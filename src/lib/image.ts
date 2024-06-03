import Pica from 'pica'

export async function downloadImage(
  url: string,
  filename: string,
  width: number,
  height: number
) {
  // Fetch the image
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const imageBuffer = await response.arrayBuffer()
    const resizedImageBlob = await resizeImage(imageBuffer, width, height)

    const blobUrl = window.URL.createObjectURL(resizedImageBlob)

    // Create a link element to download the blob
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename

    // Append the link to the body, click it, and then remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Revoke the blob URL after the download
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100)
  } catch {
    throw new Error('Failed to download image')
  }
}

async function resizeImage(
  arrayBuffer: ArrayBuffer,
  width: number,
  height: number
): Promise<Blob> {
  const pica = Pica()

  // Create an image element
  const img = new Image()

  // Create a promise to handle image loading
  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => resolve(img)
      img.onerror = (err) => reject(err)
      img.src = src
    })

  // Convert ArrayBuffer to Data URL
  const arrayBufferToDataURL = (buffer: ArrayBuffer) => {
    const bytes = new Uint8Array(buffer)
    const blob = new Blob([bytes], { type: 'image/jpeg' })
    return URL.createObjectURL(blob)
  }

  // Resize the image
  try {
    const dataUrl = arrayBufferToDataURL(arrayBuffer)
    const imgElement = await loadImage(dataUrl)

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    await pica.resize(imgElement, canvas)
    return await pica.toBlob(canvas, 'image/jpeg', 0.9)
  } catch (err) {
    const error = err as Error
    throw new Error(`Failed to resize image: ${error.message}`)
  }
}

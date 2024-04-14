export function downloadImage(url: string, filename: string): void {
  // Fetch the image
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.blob()
    })
    .then((blob) => {
      // Create a new URL for the blob object
      const blobUrl = window.URL.createObjectURL(blob)

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
    })
    .catch((error) => {
      throw new Error('Failed to download image')
    })
}

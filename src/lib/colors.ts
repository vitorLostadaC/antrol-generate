export function colorNameToHex(color: string) {
  // Create a temporary element
  var dummy = document.createElement('div')

  // Set the color of the element to the provided color name
  dummy.style.color = color

  // Append the element to the body to ensure the style is applied
  document.body.appendChild(dummy)

  // Use getComputedStyle to get the color value in RGB
  var rgb = window.getComputedStyle(dummy).color

  // Remove the element from the body
  document.body.removeChild(dummy)

  // Convert RGB to HEX
  var hex = rgb
    ?.match(/\d+/g)
    ?.map(function (x) {
      // Convert each component to hexadecimal
      return parseInt(x).toString(16).padStart(2, '0')
    })
    .join('')

  return '#' + hex
}

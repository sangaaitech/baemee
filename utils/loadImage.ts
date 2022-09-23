// Function to load image as promise

export function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Could not load image at ${src}`))
    img.src = src
  })
}

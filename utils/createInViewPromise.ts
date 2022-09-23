// Function to observe promise and resolve it when the element is in view

export function createInViewPromise(element: any, options: any = {}) {
  let observer: IntersectionObserver

  const promise = new Promise((resolve: any, reject) => {
    const threshold =
      typeof options.threshold === 'undefined' ? 1 : options.threshold
    observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const inView =
          entries[i].isIntersecting && entries[i].intersectionRatio >= threshold
        if (inView) return resolve()
      }
    }, options)
    observer.observe(element)
  })

  return {
    promise,
    disconnect: () => {
      if (observer) observer.disconnect()
    },
  }
}

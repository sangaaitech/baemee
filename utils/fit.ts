// Function to fit the child inside a parent

interface FitProps {
  parentWidth?: number
  parentHeight?: number
  childWidth?: number
  childHeight?: number
  scale?: number
  offsetX?: number
  offsetY?: number
}

export function fit({
  parentWidth,
  parentHeight,
  childWidth,
  childHeight,
  scale = 1,
  offsetX = 0.5,
  offsetY = 0.5,
}: FitProps) {
  // checking if the parameters are undefined
  if (
    childHeight === undefined ||
    childWidth === undefined ||
    parentHeight === undefined ||
    parentWidth === undefined
  )
    return

  const childRatio = childWidth / childHeight
  const parentRatio = parentWidth / parentHeight
  let width = parentWidth * scale
  let height = parentHeight * scale

  if (childRatio < parentRatio) {
    height = width / childRatio
  } else {
    width = height * childRatio
  }

  return {
    width: Math.round(width),
    height: Math.round(height),
    left: Math.round((parentWidth - width) * offsetX),
    top: Math.round((parentHeight - height) * offsetY),
  }
}

import clsx from 'clsx'

interface VignetteOverlayProps {
  z?: number
  height?: number
  width?: number
  children?: React.ReactNode
}
const VignetteOverlay = ({
  height,
  width,
  z,
  children,
}: VignetteOverlayProps) => {
  return (
    <div className="relative z-10 flex w-full justify-center">
      <div
        className={clsx(
          'pointer-events-none absolute inset-x-0 bottom-0 flex justify-center  overflow-auto bg-gradient-to-t from-purple-500 bg-contain pt-32 pb-8',
          z,
          height,
          width
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default VignetteOverlay

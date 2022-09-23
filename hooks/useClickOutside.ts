import { useEffect, MutableRefObject } from 'react'

// function to detect mouse click outside of element
const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const callbacl = (event: Event) => {
      const element = ref.current
      if (!event || !element || element.contains((event as any).target)) return
      handler(event)
    }
    document.addEventListener('click', callbacl)
    return () => document.removeEventListener('click', callbacl)
  }, [ref, handler])
}

export default useClickOutside

import create from 'zustand';
import React, {useState, useRef} from 'react';

interface PopOverState {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
  popoverState: boolean;
  action: string;
  setPopOverState: () => void;
  toggleMenu: (open: boolean) => void;
  onHover: (open: boolean, action: string) => void;
}

let timeout: ReturnType<typeof setTimeout>;
let timeoutDuration = 200;

export const useStoreOnMouseHover = create<PopOverState>(set => ({
  buttonRef: useRef(null),
  popoverState: false,
  action: 'onMouseOver',
  setPopOverState: () => set(state => ({popoverState: !state.popoverState})),
  toggleMenu: () =>
    set(state => ({
      popoverState: !state.popoverState,
    })),
  onHover: () => set(state => ({popoverState: !state.popoverState})),
}));

//   const buttonRef = useRef<HTMLButtonElement>(null)
// //   const [openState, setOpenState] = useState(false)

// //  const toggleMenu = (open: boolean) => {
// //     setOpenState(!open)
// //     buttonRef.current?.click()
// //   }

//  const onHoverFunc = (open: boolean, action: string) => {
//     if((!open && !openState && action === 'onMouseOver') || (open && openState && action === 'onMouseLeave')) {
//       clearTimeout(timeout)
//       timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
//     }
//   }

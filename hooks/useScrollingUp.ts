import React, {useState, useEffect} from 'react';
import {off, on} from '@utils/event';

/**
 * useScrollingUp custom react hook
 * @return {boolean}
 */

const useScrollingUp = () => {
  let prevScroll: any;
  // if it is SSR then check you are now on the client side and window object is available
  if (process.browser) {
    prevScroll = window.pageYOffset;
  }
  const [scrollingUp, setScrollingUp] = useState(false);
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    const isScrolled = prevScroll > currentScroll;
    setScrollingUp(isScrolled);
    prevScroll = currentScroll;
  };
  useEffect(() => {
    on(window, 'scroll', handleScroll, {passive: true});
    return () => {
      off(window, 'scroll', handleScroll, {passive: true});
    };
  }, []);
  return scrollingUp;
};

export default useScrollingUp;

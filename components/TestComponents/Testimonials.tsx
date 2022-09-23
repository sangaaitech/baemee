import React, {useState, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import clsx from 'clsx';

import {useIsomorphicLayoutEffect} from '@hooks/useIsomorphicLayoutEffect';
import {testimonials} from '@constants/testimonials';

interface TestimonialProps {
  author?: any;
  content?: string;
  url?: string;
  expanded?: boolean;
}

const Testimonial = ({author, content, url, expanded}: TestimonialProps) => {
  const [focusable, setFocusable] = useState(true);
  let ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (ref.current?.offsetTop !== 0) {
      setFocusable(false);
    }
  }, []);

  return (
    <li ref={ref} className="text-sm leading-6">
      <figure className="dark:highlight-white/5 relative flex flex-col-reverse rounded-xl border border-zinc-800 bg-zinc-900 p-6 duration-200 hover:bg-zinc-600/50 hover:shadow-lg hover:backdrop-blur-lg hover:transition">
        <blockquote className="mt-6 text-zinc-50">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          {/* <img
            src={author.avatar}
            alt=""
            className="h-14 w-14 flex-none rounded-full object-cover"
            loading="lazy"
          /> */}
          <div className="flex-auto">
            <div className="text-base font-semibold text-white">
              {url ? (
                <a href={url} tabIndex={focusable || expanded ? 0 : -1}>
                  <span className="absolute inset-0" />
                  {author?.name}
                </a>
              ) : (
                author?.name
              )}
            </div>
            <div className="mt-0.5 text-violet-400">{author?.role}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials = <T extends HTMLElement>() => {
  let ref = useRef<T>(null);
  const [expanded, setExpanded] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);
  const [transition, setTransition] = useState(false);
  const {ref: inViewRef, inView} = useInView({threshold: 0});
  let initial = useRef<HTMLAreaElement | Boolean>(true);

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (expanded) {
      ref.current?.focus({preventScroll: expanded});
    } else {
      ref.current?.focus();
      ref.current?.scrollIntoView();
    }
    if (expanded) {
      setShowCollapseButton(false);
    }
  }, [expanded]);

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0);
  }, [expanded]);

  useEffect(() => {
    if (!expanded || !inView) return;
    function onScroll() {
      let bodyRect = document.body.getBoundingClientRect();
      let rect = ref?.current?.getBoundingClientRect();
      let middle = rect!.top + rect!.height / 4 - bodyRect.top - window.innerHeight / 2;

      let isHalfWay = window.scrollY > middle;
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false);
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true);
      }
    }
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll, {passive: true} as EventListenerOptions);
    };
  }, [expanded, showCollapseButton, inView]);

  return (
    <section
      ref={ref}
      tabIndex={-1}
      className="relative mx-auto max-w-6xl px-4 focus:outline-none sm:px-4 md:px-5"
    >
      <h2 className="sr-only">Testimonials</h2>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8',
          !expanded && 'max-h-[33rem] overflow-hidden',
        )}
      >
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx(
              'space-y-8',
              i === 1 && 'hidden sm:block',
              i === 2 && 'hidden lg:block',
            )}
          >
            {column.map(testimonial => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          'pointer-events-none inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black pt-32 pb-8 dark:from-black',
          expanded ? 'sticky -mt-52' : 'absolute',
          transition && 'duration-400 transition-opacity',
          expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0'),
        )}
      >
        <button
          type="button"
          className={clsx(
            'relative flex h-12 items-center rounded-lg bg-gradient-to-tr from-slate-500 to-slate-700 px-6 text-sm font-semibold text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-600',
            transition && 'transition-transform',
            expanded && !showCollapseButton && 'translate-y-4',
            (!expanded || showCollapseButton) && 'pointer-events-auto',
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Okay, I get the point' : 'Show more...'}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

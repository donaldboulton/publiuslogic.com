import * as React from 'react'

const useScrollspy = (
  elements: Element[],
  options?: {
    offset?: number;
    root?: Element;
  }
  ): [number, Element[], number[]] => {
    const [
      currentIntersectingElementIndex,
      setCurrentIntersectingElementIndex,
    ] = React.useState(-1);
  
    const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;
  
    const observer = React.useRef<IntersectionObserver>();
  
    React.useEffect(() => {
      if (observer.current) {
        observer.current.disconnect();
      }
  
      observer.current = new IntersectionObserver(
        (entries) => {
          // find the index of the section that is currently intersecting
          const indexOfElementIntersecting = entries.findIndex((entry) => {
            // if intersection > 0 it means entry is intersecting with the view port
            return entry.intersectionRatio > 0;
          });
  
          // store the value of indexOfElementIntersecting
          setCurrentIntersectingElementIndex(indexOfElementIntersecting);
        },
        {
          root: (options && options.root) || null,
          // use this option to handle custom offset
          rootMargin,
        }
      );
  
      const { current: ourObserver } = observer;
  
      // observe all the elements passed as argument of the hook
      elements.forEach((element) =>
        element ? ourObserver.observe(element) : null
      );
  
      return () => ourObserver.disconnect();
    }, [elements, options, rootMargin]);
  
    return [currentIntersectingElementIndex];
};
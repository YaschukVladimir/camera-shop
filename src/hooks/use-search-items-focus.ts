import { useEffect, useRef } from 'react';

type useSearchItemsFocusProps = {
  listOpened: boolean;
};


export function useSearchItemsFocus ({ listOpened }: useSearchItemsFocusProps) {
  const ref = useRef<HTMLUListElement | null>(null);

  let currentIndex = 0;

  useEffect(() => {
    if (listOpened && ref.current) {
      const focusableElements = Array.from(ref.current.querySelectorAll(
        'li'
      ));

      const handleFocus = (evt: KeyboardEvent) => {
        if (evt.key === 'ArrowDown') {
          if (currentIndex === 0) {
            evt.preventDefault();
            focusableElements[0].focus();
            currentIndex++;
          } else if (currentIndex < focusableElements.length) {
            evt.preventDefault();
            const currentElement = focusableElements[currentIndex];
            currentElement.focus();
            currentIndex = currentIndex + 1;
          } else if (currentIndex >= focusableElements.length) {
            evt.preventDefault();
            currentIndex = 0;
            focusableElements[0].focus();
          }
        }
        if (evt.key === 'ArrowUp') {
          if (currentIndex <= focusableElements.length && currentIndex !== 0) {
            evt.preventDefault();
            currentIndex = currentIndex - 1;
            const currentElement = focusableElements[currentIndex];
            currentElement.focus();
          } else if (currentIndex === 0) {
            evt.preventDefault();
            currentIndex = focusableElements.length - 1;
            focusableElements[currentIndex].focus();
          }
        }
      };

      document.addEventListener('keydown', handleFocus);

      return () => {
        document.removeEventListener('keydown', handleFocus);
      };
    }
  }, [listOpened, currentIndex]);

  return ref;
}


import { useEffect, useRef } from 'react';

type UseFocusTrapProps = {
  isModalActive: boolean;
};

export function useFocusTrap({ isModalActive }: UseFocusTrapProps) {
  const ref = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (isModalActive && ref.current) {
      const focusableElements = Array.from(ref.current.querySelectorAll(
        'button, [href], input:not(.star), select, textarea, [tabindex]:not([tabindex="-1"]'
      ));
      let index = 0;
      const firstElement = focusableElements[index] as HTMLElement | null;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement | null;

      const handleFocus = (evt: KeyboardEvent) => {
        if (evt.key === 'Tab') {
          if (document.activeElement === firstElement) {
            evt.preventDefault();
            index = index + 1;
            const nextElement = focusableElements[index] as HTMLElement | null;
            nextElement?.focus();
          } else if (document.activeElement === lastElement) {
            evt.preventDefault();
            firstElement?.focus();
            index = 0;
          }
        }
      };

      document.addEventListener('keydown', handleFocus);

      return () => {
        document.removeEventListener('keydown', handleFocus);
      };
    }
  }, [isModalActive]);

  return ref;
}


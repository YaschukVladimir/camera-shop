import { useEffect } from 'react';


export const useModalCloseEffect = (modalActiveStatus: boolean, keyPressCb: (arg0: string) => void) => {
  useEffect(() => {
    if (modalActiveStatus) {
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('keydown', (evt) => keyPressCb(evt.key));
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeEventListener('keydown', (evt) => {
        keyPressCb(evt.key);
      });
    };
  }, [modalActiveStatus]);
};

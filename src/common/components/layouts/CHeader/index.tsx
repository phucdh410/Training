import { useEffect, useRef } from 'react';

import { Box } from '@mui/material';

import { HEADER } from '@/constants/style-variables';

export const CHeader = () => {
  //#region Data
  const navbarRef = useRef<HTMLElement | null>(null);
  //#endregion

  //#region Event
  //#endregion

  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.addEventListener('scroll', () => {
      var currentScrollPos = window.scrollY;

      if (navbarRef.current) {
        if (prevScrollpos > currentScrollPos) {
          navbarRef.current.style.top = '0';
        } else {
          navbarRef.current.style.top = `-${HEADER.HEIGHT}px`;
        }
        prevScrollpos = currentScrollPos;
      }
    });
  }, [window?.scrollY]);

  //#region Render
  return (
    <Box
      ref={navbarRef}
      height={HEADER.HEIGHT}
      sx={{
        backgroundColor: HEADER.BG_COLOR,
        transition: 'top 0.3s',
      }}
      position="fixed"
      top={0}
      width="100%"
    >
      CHeader
    </Box>
  );
  //#endregion
};

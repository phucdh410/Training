import { Box } from '@mui/material';

import { ICChildren } from '@/types/component';
import { HEADER } from '@/constants/style-variables';

import { CHeader } from '../CHeader';

export const CMainLayout = ({ children }: ICChildren) => {
  return (
    <Box position="relative">
      <CHeader />

      <Box paddingTop={HEADER.HEIGHT + 'px'}>
        <Box p={2}>{children}</Box>
      </Box>
    </Box>
  );
};

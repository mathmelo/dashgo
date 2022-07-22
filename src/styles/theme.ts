import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts } from './fonts';
import { global as styles } from './global';

export const theme = extendTheme({
  colors,
  styles,
  fonts,
});

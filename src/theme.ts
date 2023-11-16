import {extendTheme, ThemeConfig} from '@chakra-ui/react'
import '@fontsource/Manrope/400.css'
import '@fontsource/Manrope/700.css'

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config, fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },});

export default theme;
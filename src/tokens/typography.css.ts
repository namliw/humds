import { globalFontFace } from "@vanilla-extract/css"
import ButlerBoldWoff2 from '../assets/fonts/Butler_Webfont/Butler-Bold.woff2';
import ButlerBoldWoff from '../assets/fonts/Butler_Webfont/Butler-Bold.woff';
import OpenSansLight from '../assets/fonts/Open_Sans/OpenSans-Light.ttf';

globalFontFace('Butler Bold', {
  src: `url(${ButlerBoldWoff2}) format("woff2"), url(${ButlerBoldWoff}) format("woff")`
})

globalFontFace('Open Sans Light', {
  src: `url(${OpenSansLight}) format("ttf")`
})

const fontFamily = {
  main: '"Butler Bold", serif',
  secondary: '"Open Sans Light", sans-serif',
}

const fontWeight = {
  light: '300',
  regular: '500',
  bold: '600',
}

const fontSize = {
  button: '0.8rem'
}

const lineHeight = {
  button: '1.5'
}

const font = {
  button: `${fontWeight.bold} ${fontSize.button}/${lineHeight.button} ${fontFamily.secondary}`
}

const letterSpacing = {
  button: '0.075em'
}

export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  font,
  letterSpacing,
}

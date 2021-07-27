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
  regular: '400',
  bold: '600',
}

const fontSize = {
  button: '0.8rem',
  pageTitle: (50/16)+'rem',
  sectionTitle: (26/16)+'rem',
  contentTile: (26/16)+'rem',
  content: (16/16)+'rem',
}

const lineHeight = {
  button: '1.5',
  pageTitle: '1.2',
  sectionTitle: '1.2',
  contentTile: '1.2',
  content: '1',
}

const font = {
  button: `${fontWeight.bold} ${fontSize.button}/${lineHeight.button} ${fontFamily.secondary}`,
  pageTitle: `${fontWeight.regular} ${fontSize.pageTitle}/${lineHeight.pageTitle} ${fontFamily.main}`,
  sectionTitle: `${fontWeight.regular} ${fontSize.sectionTitle}/${lineHeight.sectionTitle} ${fontFamily.secondary}`,
  contentTile: `${fontWeight.regular} ${fontSize.contentTile}/${lineHeight.contentTile} ${fontFamily.secondary}`,
  content: `${fontWeight.light} ${fontSize.content}/${lineHeight.content} ${fontFamily.secondary}`,
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

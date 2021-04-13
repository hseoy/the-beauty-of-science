export const HTML_FONT_SIZE = 16;
export const calcRem = px => px / HTML_FONT_SIZE;
export const pxToRem = px => `${calcRem(px)}rem`;

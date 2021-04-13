import { calcRem, pxToRem } from './utils';

const fontFamiyBase = `'NanumSquareR', 'NanumBarunpenR', sans-serif`;
const fontFamilyAccent = `'TmonTium', 'TmonMonsori', ${fontFamiyBase}`;
const fontFamilySpecial = `'BlackOpsOneR', ${fontFamilyAccent}`;

const font = {
  size: {
    title: pxToRem(50),
    subtitle: pxToRem(30),
    paragraph: pxToRem(16),
  },
  family: {
    base: fontFamiyBase,
    accent: fontFamilyAccent,
    special: fontFamilySpecial,
  },
};

const utils = {
  calcRem,
  pxToRem,
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
  laptopL: `only screen and (max-width: ${deviceSizes.laptopL})`,
};

const colors = {
  whiteColor: '#fff',
  textColor: '#1e1e1e',
  bgColor: '#fff',
  grayColor: '#ddd',
  primaryColor: '#FFC400',
  accentColor: '#000000',
};

const themes = {
  font,
  deviceSizes,
  device,
  colors,
  utils,
};

export default themes;

/**
 * colors变量
 * @author renmaomin@126.com
 */
import { darken, rem } from 'polished';

// colors base
const white = '#fff';
const black = '#333';
const primary = '#337ab7';
const success = '#218838';
const info = '#31b0d5';
const warning = '#ec971f';
const danger = '#c9302c';
const dashed = '#d9d9d9';
const transparent = '#0000';

// common variables
export const lineHeight = 1;

export const fontSizeBase = rem('14px');
export const fontSizeLarge = rem('18px');
export const fontSizeSmall = rem('12px');

export const fontWeightLight = 300;
export const fontWeightNormal = 400;
export const fontWeightBold = 700;

export const paddingXBase = rem('6px');
export const paddingYBase = rem('12px');

export const paddingXLarge = rem('10px');
export const paddingYLarge = rem('16px');

export const paddingXSmall = rem('5px');
export const paddingYSmall = rem('10px');

export const borderWidth = '1px';

export const borderRadiusBase = rem('4px');
export const borderRadiusLarge = rem('6px');
export const borderRadiusSmall = rem('3px');

export const disabledOpacity = 0.65;

// button variables
export const buttonFontWeight = fontWeightNormal;
export const buttonLineHeight = lineHeight;
export const buttonBorderWidth = borderWidth;

export const buttonFontSize = fontSizeBase;
export const buttonFontSizeLarge = fontSizeLarge;
export const buttonFontSizeSmall = fontSizeSmall;

export const buttonPaddingX = paddingXBase;
export const buttonPaddingY = paddingYBase;

export const buttonPaddingXLarge = paddingXLarge;
export const buttonPaddingYLarge = paddingYLarge;

export const buttonPaddingXSmall = paddingXSmall;
export const buttonPaddingYSmall = paddingYSmall;

export const buttonBorderRadius = borderRadiusBase;
export const buttonBorderRadiusLarge = borderRadiusLarge;
export const buttonBorderRadiusSmall = borderRadiusSmall;


export const buttonDisabledOpacity = disabledOpacity;

export const buttonColor = black;
export const buttonBg = white;
export const buttonBorder = '#ccc';

export const buttonPrimaryColor = white;
export const buttonPrimaryBg = primary;
export const buttonPrimaryBorder = darken(0.05, primary);

export const buttonSuccessColor = white;
export const buttonSuccessBg = success;
export const buttonSuccessBorder = darken(0.05, success);

export const buttonInfoColor = white;
export const buttonInfoBg = info;
export const buttonInfoBorder = darken(0.05, info);

export const buttonWarningColor = white;
export const buttonWarningBg = warning;
export const buttonWarningBorder = darken(0.05, warning);

export const buttonDangerColor = white;
export const buttonDangerBg = danger;
export const buttonDangerBorder = darken(0.05, danger);

export const buttonDashedBg = white;
export const buttonDashedBorder = dashed;

export const buttonTextBg = transparent;
export const buttonTextBorder = transparent;

export const buttonTheme = {
  common: {
    fontWeight: buttonFontWeight,
    lineHeight: buttonLineHeight,
    borderWidth: buttonBorderWidth,
    disabledOpacity: buttonDisabledOpacity,
  },
  colorScheme: {
    normal: {
      color: buttonColor,
      backgroundColor: buttonBg,
      borderColor: buttonBorder,
    },
    primary: {
      color: buttonPrimaryColor,
      backgroundColor: buttonPrimaryBg,
      borderColor: buttonPrimaryBorder,
    },
    success: {
      color: buttonSuccessColor,
      backgroundColor: buttonSuccessBg,
      borderColor: buttonSuccessBorder,
    },
    info: {
      color: buttonInfoColor,
      backgroundColor: buttonInfoBg,
      borderColor: buttonInfoBorder,
    },
    warning: {
      color: buttonWarningColor,
      backgroundColor: buttonWarningBg,
      borderColor: buttonWarningBorder,
    },
    danger: {
      color: buttonDangerColor,
      backgroundColor: buttonDangerBg,
      borderColor: buttonDangerBorder,
    },
  },
  sizeScheme: {
    normal: {
      fontSize: buttonFontSize,
      paddingX: buttonPaddingX,
      paddingY: buttonPaddingY,
      borderRadius: buttonBorderRadius,
    },
    small: {
      paddingX: buttonPaddingXSmall,
      paddingY: buttonPaddingYSmall,
      borderRadius: buttonBorderRadiusSmall,
    },
    large: {
      fontSize: buttonFontSizeLarge,
      paddingX: buttonPaddingXLarge,
      paddingY: buttonPaddingYLarge,
      borderRadius: buttonBorderRadiusLarge,
    },
  },
};

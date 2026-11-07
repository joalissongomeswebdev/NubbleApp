import { createText, TextProps as SRTextProps } from '@shopify/restyle';
import { Platform, TextProps as RNTextProps, TextStyle } from 'react-native';
import { Theme } from '../../theme/theme';

const SRText = createText<Theme>();

interface TextProps extends RNTextProps, SRTextProps<Theme> {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...rest
}: TextProps) {
  const isHeading = preset.startsWith('heading');
  const weight: Weight =
    isHeading || bold ? 'bold' : semiBold ? 'medium' : 'regular';

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], fontStyleFor(weight, italic), style]}
      {...rest}
    >
      {children}
    </SRText>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'caption'
  | 'captionSmall';

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  caption: { fontSize: 12, lineHeight: 16.8 },
  captionSmall: { fontSize: 10, lineHeight: 14 },
};

type Weight = 'regular' | 'medium' | 'bold';

const $fontFamily: Record<Weight, { normal: string; italic: string }> = {
  regular: { normal: 'Satoshi-Regular', italic: 'Satoshi-Italic' },
  medium: { normal: 'Satoshi-Medium', italic: 'Satoshi-MediumItalic' },
  bold: { normal: 'Satoshi-Bold', italic: 'Satoshi-BoldItalic' },
};

function fontStyleFor(weight: Weight, italic?: boolean): TextStyle {
  return Platform.select<TextStyle>({
    android: {
      fontFamily: $fontFamily[weight][italic ? 'italic' : 'normal'],
    },
    ios: {
      fontFamily: 'Satoshi',
      fontWeight: weight === 'bold' ? '700' : '400',
      fontStyle: italic ? 'italic' : 'normal',
    },
  });
}

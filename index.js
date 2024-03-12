import chroma from 'chroma-js';
import tinycolor from 'tinycolor2';
import colorConvert from 'color-convert';
import Color from 'color';
import ColorThief from 'colorthief';

/**
 * Generates a complementary color theme based on the provided primary color.
 * @param {string} primaryColor - The primary color in HEX format.
 * @returns {object} A color theme object with complementary and analogous colors.
 */
function generateTheme(primaryColor) {
  const complementaryColor = chroma(primaryColor).set('hsl.h', '+180').hex();
  const analogousColors = chroma.scale([primaryColor, complementaryColor]).mode('lch').colors(3);

  const triadicColors = [0, 120, 240].map(hue =>
    Color(primaryColor).rotate(hue).hex()
  );

  const accentColor = tinycolor(complementaryColor).complement().toString();
  const secondaryColor = Color(primaryColor).lighten(0.3).hex();

  return {
    primaryColor,
    complementaryColor,
    analogousColors,
    triadicColors,
    accentColor,
    secondaryColor
  };
}

/**
 * Extracts the dominant color from an image and generates a theme based on it.
 * @param {string} imagePath - Path to the image file.
 * @returns {Promise<object>} A promise that resolves with the generated color theme.
 */
async function generateThemeFromImage(imagePath) {
  const colorThief = new ColorThief();
  const dominantColor = `#${colorConvert.rgb.hex(colorThief.getColor(imagePath))}`;
  return generateTheme(dominantColor);
}

export { generateTheme, generateThemeFromImage };

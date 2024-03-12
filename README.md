# colorway-designer

Generate beautiful color themes for your projects based on a primary color. Whether you're designing a UI, creating art, or just love colors, colorway-designer simplifies the process of creating complementary, analogous, and triadic color schemes.

## Features

- Generate color themes based on a single primary color.
- Create themes from the dominant color in an image.
- Get complementary, analogous, triadic, accent, and secondary colors automatically.

## Installation

```bash
npm install colorway-designer
```

## Usage

### Generate Theme from Color

```javascript
import { generateTheme } from 'colorway-designer';

const theme = generateTheme('#3498db');
console.log(theme);
```

### Generate Theme from Image

```javascript
import { generateThemeFromImage } from 'colorway-designer';

generateThemeFromImage('/path/to/image.jpg').then(theme => {
console.log(theme);
});
```

## Dependencies

- `chroma-js`: For advanced color manipulations.
- `color`: For color conversions and transformations.
- `tinycolor2`: For complementary color calculations.
- `color-convert`: For converting color models.
- `colorthief`: For extracting dominant colors from images.

## License

This project is licensed under the MIT License.

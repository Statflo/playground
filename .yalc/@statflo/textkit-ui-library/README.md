![TextKit by Statflo](./assets/textkit-logo.svg)

# TextKit React UI Library

Welcome to our UI component library built in React.

## Installation

```node
yarn add @statflo/textkit-ui-library
```

## Fonts

If you want to use our brand fonts simply add the following to the `head` of your `HTML` file.

```html
<link rel="stylesheet" href="https://cdn.statflo.com/brandon/brandon.css" />
```

Our `BrandonText` font comes in three different weights.

- Regular: (weights 100-400)
- Medium: (weights 500-600)
- Bold: (weights 700-900)

## Documentation

You can import any of our components using the following convention.

```javascript
import { Button, Checkbox, ... } from "@statflo/textkit-ui-library";
```

For a list of our components and more detailed documentation checkout our [Storybook](https://statflo.github.io/textkit-ui-library)

## Styling with Tailwind CSS

We are using [Tailwind CSS](https://tailwindcss.com) for all of our Styling. We prefix all the classes with `tk-` to eliminate any potential css collisions with your existing styles.

If you want to use Tailwind within your project you can install Tailwind using one of thier [Framework guides](https://tailwindcss.com/docs/installation/framework-guides).

### Setup with our colors and prefix

Here is a sample `tailwind.config.js` file you can use that will include our prefix and colors.

```javascript
const tailwindConfig = require('@statflo/textkit-ui-library/dist/tailwind.config.js')

module.exports = {
  prefix: tailwindConfig.prefix,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".public/**/*.{html,htm}"
  ],
  theme: {
    extend: {
      ...tailwindConfig.theme.extend
    },
  },
  plugins: [],
}
```

### Setup with our colors and without our prefix

Here is a sample `tailwind.config.js` file you can use that will include our prefix and colors.

```javascript
const tailwindConfig = require('@statflo/textkit-ui-library/dist/tailwind.config.js')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".public/**/*.{html,htm}"
  ],
  theme: {
    extend: {
      ...tailwindConfig.theme.extend
    },
  },
  plugins: [],
}
```
### Our colors

Below is a mapping of our current colors and their names

```javascript
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    fontFamily: {
        sans: ['BrandonText', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
        thin: 400,
        extralight: 400,
        light: 400,
        normal: 400,
        medium: 500,
        semibold: 500,
        bold: 700,
        extrabold: 700,
        black: 700,
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        black: '#000000',
        main: {
            default: 'hsl(0, 0%, 17.6%)',
            l1: 'hsl(0, 0%, 32.6%)',
            l2: 'hsl(0, 0%, 47.6%)',
            l3: 'hsl(0, 0%, 62.6%)',
        },
        primary: {
            default: 'hsl(229.3, 63.6%, 56.9%)',
            hover: 'hsl(229.3, 63.6%, 51.9%)',
            active: 'hsl(229.3, 63.6%, 46.9%)',
            unused: 'hsla(229.3, 63.6%, 56.9%, 0.8)',
            disabled: 'hsla(229.3, 63.6%, 56.9%, 0.6)',
        },
        gray: {
            hover: 'hsl(229.3, 63.6%, 96%)',
            active: 'hsl(229.3, 63.6%, 94%)',
            secondary: 'hsl(0, 0%, 93%)',
            spacer: 'hsl(0, 0%, 90%)',
            highlight: 'hsl(0, 0%, 99%)',
            shadow: 'hsla(0, 0%, 12%, 0.15)',
        },
        success: {
            default: '#347F4D',
            l1: '#58D07E',
            l2: '#EDF9F0'
        },
        warning: {
            default: '#B95000',
            l1: '#FF8F39',
            l2: '#FFF4EC'
        },
        error: {
            default: '#C92F24',
            l1: '#F17E7E',
            l2: '#FCEAE8',
        },
        info: {
            default: '#2E5AAC',
            l1: '#8EACFB',
            l2: '#EBF1FF',
            active: '#134CEE',
        },
        brand: {
            navy: '#293C89',
            magenta: '#E1207B',
            teal: '#3FB8C0'
        },
        secondary: {
            stark: '#4B9BFF',
            mormont: '#FFB46E',
            lannister: '#FF5F5F',
            martell: '#50D2A0',
            tyrell: '#FF73C3',
            targaryen: '#9BE169',
            dothraki: '#9258E7',
            kahstark: '#FFD76E',
            tarly: '#5FC8FF',
        }
    }
};
```
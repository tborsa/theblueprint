// Common global style values

export const fonts = {
  display: {
      family: 'Nunito',
      size: {
        tiny: '0.625rem',
        small: '1rem',
        medium: '1rem',
        large: '1.5rem',
        giant: '2.25rem',
      }
  },
  
  text: {
      family: 'Montserrat',
      size: {
        tiny: '0.625rem',
        small: '1rem',
        medium: '1rem',
        large: '1.5rem',
        giant: '2.25rem',
      }
  },

  script: {
      family: 'Oleo Script',
      size: {
        tiny: '0.625rem',
        small: '1rem',
        medium: '1rem',
        large: '1.5rem',
        giant: '2.25rem',
      }
  }
}

export const colors = {
  primary: '#E9446A',
  secondary: '#333333',
  light: '#A8A8A8',
  dark: '#222222',
  white: '#FFFFFF',
  offWhite: '#FAFAFA',
  divider: '#a9a9a9',
  body: '#161f3d',
  muted: 'rgba(29, 29, 38, 0.5)'
}

export const margins = {
  light: '0.25rem',
  regular: '0.5rem',
  heavy: '1rem',
  content: '4vw'
}

export const paddings = {
    light: '0.25rem',
    regular: '0.5rem',
    heavy: '1rem',
    content: '4vw'
}

export const borders = {
  radius: {
      light: '0.25rem',
      regular: '0.5rem',
      heavy: '1rem',
      pill: '1.25rem'
  }
}

export const spacing = {
  none: '0rem',
  default: '0.875rem'
};

export const bars = {
  thin: '1rem',
  medium: '3rem',
  thick: '4rem'
}

export const shadows = {
  color: '#000000',
  x: 0,
  y: 0.125,
  blur: 0.25,
  spread: 0
}

export default {
  fonts,
  colors,
  borders,
  paddings,
  shadows,
  margins,
  spacing,
  bars
}
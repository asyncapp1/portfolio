export const colors = {
  primary: '#0E5484',      // cvblue from resume
  secondary: '#3BD80D',    // cvgreen from resume
  accent: '#0F4539',       // darkcolor from resume
  tagAccent: '#00E278',    // taggreen from resume
  dark: '#130810',         // black from resume 
  darkGrey: '#2E2E2E',     // SlateGrey from resume
  lightGrey: '#666666',    // LightGrey from resume
  white: '#FFFFFF',
  background: '#F9FAFB',
  lightBackground: '#F5F7F9',
};

export const fontSizes = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  md: '1rem',        // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  xxl: '1.5rem',     // 24px
  xxxl: '2rem',      // 32px
  heading: '2.25rem', // 36px
  subheading: '1.75rem', // 28px
};

export const spacing = {
  xs: '0.25rem',     // 4px
  sm: '0.5rem',      // 8px
  md: '1rem',        // 16px
  lg: '1.5rem',      // 24px
  xl: '2rem',        // 32px
  xxl: '3rem',       // 48px
};

export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const borderRadius = {
  sm: '0.125rem',    // 2px
  md: '0.25rem',     // 4px
  lg: '0.5rem',      // 8px
  xl: '1rem',        // 16px
  full: '9999px',
};

export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
};

export const zIndices = {
  base: 0,
  overlay: 10,
  modal: 20,
  navigation: 30,
  tooltip: 40,
};

const theme = {
  colors,
  fontSizes,
  spacing,
  breakpoints,
  shadows,
  borderRadius,
  transitions,
  zIndices,
};

export default theme; 
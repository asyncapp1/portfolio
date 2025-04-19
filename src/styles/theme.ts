export const colors = {
  primary: '#6C84F2',      // Lighter blue for dark theme
  secondary: '#4BEA1D',    // Brighter green for dark theme
  accent: '#17A589',       // Brighter teal accent for dark theme
  tagAccent: '#00FF85',    // Brighter tag green for dark theme
  dark: '#E2E2E2',         // Light color for text (formerly dark)
  darkGrey: '#CCCCCC',     // Lighter grey for text
  lightGrey: '#A0A0A0',    // Medium grey for less important text
  white: '#FFFFFF',        // Still white
  background: '#121212',   // Dark background
  lightBackground: '#1E1E1E', // Slightly lighter dark background
  logoBackground: '#A54941'  // Slightly brighter logo background
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
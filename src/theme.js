import { MantineProvider } from '@mantine/core';

export const theme = {
    colors: {
      // Testfärger
      primary: [
        '#FFB3BA', // Light Pink
        '#FFDFBA', // Light Orange
        '#FFFFBA', // Light Yellow
        '#BAFFC9', // Light Green
        '#BAE1FF', // Light Blue
        '#E0BAFF', // Light Purple
        '#BAA7FF', // Medium Purple
        '#FFBAF2', // Light Magenta
        '#FFBAD5', // Light Pink-Red
        '#C9BAFF', // Light Violet
        '#BAFFEC', // Light Aqua
        '#FFD5BA', // Light Peach
        '#A2BAFF', // Light Indigo
      ],
  
      // primary: [
      //     '#E6E9F2', // Lightest shade
      //     '#CCD2E6', // Lighter shade
      //     '#B2BBDA', // Slightly light shade
      //     '#98A4CE', // Less light shade
      //     '#7E8DC2', // Near base but lighter
      //     '#1f3568', // Base shade
      //     '#1f3568', // Slightly darker
      //     '#38487E', // Darker shade
      //     '#222F62', // Dark shade
      //     '#0C1846'  // Darkest shade
      // ],
    },
    primaryColor: 'primary',
    fontFamily: 'Inter, sans-serif',
    headings: {
      fontFamily: 'Verdana, sans-serif',
      sizes: {
        h1: { fontSize: 30 },
        h2: { fontSize: 25 },
        h3: { fontSize: 20 },
        // Lägg till fler heading-storlekar om det behövs
      },
    },
    spacing: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
    },
    radius: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
    },
    components: {
      Button: {
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.primary[5],
            color: theme.white,
            '&:hover': {
              backgroundColor: theme.colors.primary[7],
            },
            borderRadius: theme.radius.xs,
          },
        }),
      },
    },
  };

// Exempel på övriga props vi kan ändra på:
// colorScheme: 'dark',
// Shadows 
// Avatarer
// Logo variationer
// Menyer, NavBars

export const ThemeProvider = ({ children }) => (
  <MantineProvider theme={theme}>
    {children}
  </MantineProvider>
);




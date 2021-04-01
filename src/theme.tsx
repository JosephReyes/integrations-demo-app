import { createMuiTheme } from '@material-ui/core';

const spacing = 8;

const primary = {
  light: '#537dd2',
  main: '#1DB954',
  dark: '#002a71',
  contrastText: '#FFFFFF',
};

const secondary = {
  light: '#FFFFFF',
  main: '#FFFFFF',
  dark: '#E5E5E5',
  contrastText: '#0D51A0',
  darkBlue: '#09315F',
  grey: 'rgba(0,0,0,0.36)',
};

const divider = '#E0E0E0';

const caption = '#797979';

const navbarIcon = '#B6CBE2';

export default createMuiTheme({
  spacing: spacing,
  mixins: {
    toolbar: {
      minHeight: spacing * 8,
    },
  },
  palette: {
    divider: divider,
    primary: primary,
    secondary: secondary,
    action: {
      selected: 'rgba(95,169,255,0.26)',
      hover: 'rgba(95,169,255,0.26)',
    },
  },
  typography: {
    fontWeightMedium: 'normal',
    h1: {
      fontWeight: 300,
      fontSize: '1.875rem',
      lineHeight: '2.5rem',
      marginTop: '1.5rem',
      marginBottom: '1rem',
    },
    h2: {
      fontWeight: 400,
      color: '#949FA3',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    h3: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: '1.1875rem',
      marginBottom: '0.5rem',
    },
    h5: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      marginBottom: '2rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '0.9375rem',
    },
    caption: {
      color: caption,
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
    },
    button: {
      textTransform: 'initial',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        fontSize: '0.875rem',
        lineHeight: '1rem',
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid ${primary.main}`,
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.875rem',
        lineHeight: '1rem',
      },
    },
    MuiButton: {
      root: {
        color: navbarIcon,
        maxHeight: '2.25rem',
        marginRight: '1rem',
      },
    },
    MuiIconButton: {
      root: {
        padding: spacing,
        color: navbarIcon,
      },
    },
    MuiDialog: {
      paper: {
        margin: spacing * 2,
      },
    },
    MuiTableCell: {
      head: {
        borderBottom: 'none',
        fontSize: '0.75rem',
        color: 'rgba(0, 0, 0, 0.54)',
        lineHeight: '0.875rem',
        paddingLeft: spacing * 3,
      },
      body: {
        borderBottom: 'none',
        paddingLeft: spacing * 3,
      },
    },
    MuiTableRow: {
      head: {
        borderBottom: `1px solid ${divider}`,
      },
      root: {
        borderBottom: `1px solid ${divider}`,
      },
    },
    MuiTablePagination: {
      select: {
        fontSize: '0.8125rem',
        fontWeight: 'normal',
        lineHeight: '0.9375rem',
        padding: '0',
      },
      menuItem: {
        fontSize: '0.8125rem',
        fontWeight: 'normal',
        lineHeight: '0.9375rem',
      },
      toolbar: {
        paddingRight: '0',
        paddingLeft: '0',
      },
    },
    MuiTableSortLabel: {
      icon: {
        opacity: 1,
        color: '#0D51A0',
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: 16,
      },
    },
    MuiTooltip: {
      popper: {
        opacity: 0.85,
      },
      tooltip: {
        backgroundColor: '#000000',
        paddingTop: spacing,
        paddingRight: spacing * 2,
        paddingBottom: spacing,
        paddingLeft: spacing * 2,
        maxWidth: 400,
        borderRadius: 2,
      },
      arrow: {
        color: '#000000',
      },
      tooltipPlacementTop: {
        margin: '8px 0 !important',
      },
      tooltipPlacementBottom: {
        margin: '8px 0 !important',
      },
    },
    MuiListItem: {
      button: {
        marginRight: '1.5rem',
      }
    }
  },
});

const theme = {
  typography: {
    fontFamily: [
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightSemiBold: 700,
    fontWeightBold: 900
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  palette: {
    primary: {
      main: '#060915',
    },
    secondary: {
      main: '#E12921',
    }  
  }
}

export default theme
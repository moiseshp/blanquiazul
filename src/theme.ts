const theme = {
  typography: {
    fontFamily: [
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    // fontWeightRegular: 300,
    fontWeightSemiBold: 700,
    fontWeightBold: 900,
    button: {
      // fontWeight: 800,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  palette: {
    // background: {
    //   default: '#ffffff'
    // },
    primary: {
      main: '#060915',
    },
    secondary: {
      main: '#E12921',
    }  
  }
}

export default theme
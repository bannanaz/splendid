import { blue } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F9F6",
      main: "#258A70",
      dark: "#258A70",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d66d5e",
      dark: "#d66d5e",
      contrastText: "#fff",
    },

    info: {
      main: "#FFFFFF",
    },

    text: {
      primary: "#5F5F5F",
      secondary: "#09806d",
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: 24,
      fontWeight: 600,
    },
    h2: {
      fontSize: 18,
      textDecoration: "underline",
      marginBottom: 20,
      fontWeight: 600,
      color: "#258A70",
      lineHeight: 1.5,
    },

    h3: {
      fontSize: 20,
      fontWeight: "500",
      color: "#5F5F5F",
      lineHeight: 1.7,
    },

    h4: {
      fontSize: 16,
      fontWeight: "500",
      color: "#5F5F5F",
    },

    h5: {
      fontSize: "2.7rem",
      fontWeight: "700",
      color: "#258A70",
    },

    subtitle1: {
      fontWeight: 500,
      color: "#5F5F5F",
      fontFamily: "Poppins",
    },

    body1: {
      fontFamily: "Poppins",
      color: "#5F5F5F",
    },
  },
});

/*--- Props overrides -----*/

theme.props = {
  MuiTextField: {
    variant: "filled",
    fullWidth: true,
    required: true,
    margin: "normal",
  },

  MuiSelect: {
    root: {
      required: true,
      autoWidth: true,
    },
  },

  MuiPaper: {
    root: {
      elevation: "2",
    },
  },
};

/*--- Style overrides -----*/

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
    },
    containedPrimary: {
      width: 170,
      "&:hover": {
        backgroundColor: "#0B9882",
      },
    },

    containedSecondary: {
      width: 170,
      margin: "27px 0px 27px 0px",
    },

    textPrimary: {
      color: "#FFFFFF",
      marginLeft: "9px",
    },

    textSecondary: {
      fontStyle: "italic",
      textDecoration: "underline",
    },

    endIcon: {
      color: "#FFFFFF",
    },
    startIcon: {
      color: "#FFFFFF",
    },
  },

  MuiInputLabel: {
    root: {
      color: "#5F5F5F",
      fontSize: 14,
    },
  },

  MuiSelect: {
    root: {
      color: "#5F5F5F",
      fontSize: 14,
      width: 200,
    },
  },
};

export default theme;

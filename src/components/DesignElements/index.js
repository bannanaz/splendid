import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Container, Link, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";

export const BottomBtn = ({ children, target, rel, href }) => {
  return (
    <Button
      type="button"
      variant="conatined"
      size="large"
      sx={{
        backgroundColor: "#0a8f7a",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "16px",
        textTransform: "none",
        border: "none",
        width: 300,
        mb: 10,
        "&:hover": {
          backgroundColor: "#0B9882",
        },
      }}
    >
      {children}
    </Button>
  );
};

BottomBtn.propTypes = {
  target: PropTypes.string,
  rel: PropTypes.string,
  href: PropTypes.string,
};

export const GoBackIcon = () => {
  return (
    <ArrowBackIcon
      fontSize="medium"
      sx={{ color: "#818181", cursor: "pointer" }}
    />
  );
};

export const TopnavLogo = ({ children }) => {
  return (
    <Typography component="div" variant="h1" noWrap>
      {children}
    </Typography>
  );
};

export const SmallCard = ({ children }) => {
  return (
    <Card
      elevation={2}
      sx={{
        minWidth: 250,
        maxWidth: 400,
        padding: 0,
        margin: 0,
      }}
    >
      {children}
    </Card>
  );
};

export const CardHeaderGlbl = ({ title, subheader }) => {
  return (
    <CardHeader
      title={title}
      subheader={subheader}
      titleTypographyProps={{
        variant: "h3",
        component: "h2",
      }}
      subheaderTypographyProps={{
        variant: "h4",
        component: "h3",
        color: "textPrimary",
      }}
    />
  );
};

CardHeaderGlbl.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export const SmallCardMedia = ({ image, title, alt }) => {
  return (
    <CardMedia
      image={image}
      title={title}
      alt={alt}
      component="img"
      height="220"
    />
  );
};

SmallCardMedia.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};

export const MainContainerCenter = ({ children }) => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        width: { xs: "100%", md: "75%", lg: "65%", xl: "60%" },
      }}
    >
      {children}
    </Container>
  );
};

export const GoBack = () => {
  const history = useHistory();
  return (
    <Container
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        padding: "0px",
        width: { xs: "100%", md: "75%", lg: "65%", xl: "60%" },
      }}
    >
      <Link variant="button" onClick={() => history.goBack()}>
        <ArrowBackIcon
          fontSize="medium"
          sx={{ color: "#818181", cursor: "pointer" }}
        />
      </Link>
    </Container>
  );
};

export const PaperAdUpload = ({ children }) => {
  return <Paper sx={{ padding: 3, width: "100%" }}>{children}</Paper>;
};

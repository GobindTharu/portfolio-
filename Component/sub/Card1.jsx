"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Box)({
  position: "relative",
  height: "400px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "23px",
  overflow: "hidden",
  boxShadow: "5px 16px 10px rgba(225, 225, 225, 0.5)",
  background: "rgb(225, 224, 224, 1)",
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: "calc(-100% + 5px)",
    width: "100%",
    background: "rgb(0, 234, 255)",
    height: "100%",
    zIndex: 1,
    transition: "1s",
  },
  "&:hover::before": {
    top: 0,
  },
});

const Content = styled(Box)({
  position: "relative",
  zIndex: 2,
  color: "black",
  transition: "1s",
});

const StyledButton = styled(Button)({
  border: "2px solid black",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "16px",
  color: "aliceblue",
  background: "#000",
  padding: "10px 20px",
  "&:hover": {
    background: "#222",
  },
});

const Card1 = () => {
  return (
    <Box className="flex justify-center items center m-auto">
      <CardContainer>
        <Content>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.5rem",
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            Title
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: "22px", padding: "20px 0", margin: "20px 0" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum qui
            ad accusantium molestias, reiciendis ducimus quisquam corporis
            beatae aliquam, ullam nam iste minima. Animi sed voluptatibus
            tempore numquam modi.
          </Typography>
          <StyledButton href="#">Read more</StyledButton>
        </Content>
      </CardContainer>
    </Box>
  );
};

export default Card1;

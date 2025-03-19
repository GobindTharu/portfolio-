"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Testimonials } from "@/Constants/constants";

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

const Card = () => {
  return (
    <div className="flex flex-wrap  xs:flex-col  m-auto xs:m-2 gap-16 mt-20 rounded-full">
      {Testimonials.map((item, index) => (
        <Box className="flex justify-center items center m-auto rounded-full">
          <CardContainer>
            <Content>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "2.5rem",
                  fontFamily: "Courier New, Courier, monospace",
                }}
              >
                {item?.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "22px", padding: "20px 0", margin: "20px 0" }}
              >
                {item?.description}
              </Typography>
              <StyledButton href="#">Show More</StyledButton>
            </Content>
          </CardContainer>
        </Box>
      ))}
    </div>
  );
};

export default Card;

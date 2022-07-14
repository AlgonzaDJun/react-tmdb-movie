import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const Subscribed = () => {
  const params = useParams();
  return (
    <Box sx={{ mt: 10 }}>
      Thankyou for subscribing! Your Plan: {params?.plan}
    </Box>
  );
};

export default Subscribed;

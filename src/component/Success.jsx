import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Success = ({ onClose }) => {
  return (
    <Card sx={{ maxWidth: 800, mx: "auto", p: 3, boxShadow: 3, textAlign: "center" }}>
      <CardContent>
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "green" }} />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Thank You!
        </Typography>
        <Typography>The form was submitted successfully.</Typography>
        <Button onClick={onClose} sx={{ mt: 2, textDecoration: "underline", cursor: "pointer" }}>
          Close
        </Button>
      </CardContent>
    </Card>
  );
};

export default Success;

import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Workitems = ({ year, role, name, description }) => {

  return (
    <Box sx={{ position: "relative", borderLeft: "2px solid #D6D6D6", pl: 2, mb: 0 }}>
      {/* Circle Marker */}
      <Box sx={{ position: "absolute", width: 12, height: 12, top: 8, left: -7,  backgroundColor: "#D6D6D6", borderRadius: "50%" }} />
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" justifyContent="flex-start">
        <Typography variant="body2"
          sx={{ px: 1.5, py: 0.5, fontWeight: "bold", color: "white", backgroundColor: "#00172D", borderRadius: 1 }}
        > {year} </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00172D" }}>  {role} </Typography>
      </Stack>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00172D" }}> {name} </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "gray", textAlign: "left" }}> {description} </Typography>
    </Box>
  );
};

export default Workitems;

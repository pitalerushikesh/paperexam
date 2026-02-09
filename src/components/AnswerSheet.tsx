import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export const AnswerSheet: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: "210mm", // A4 Width
        height: "297mm", // A4 Height (Fixed)
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        // Ruled Paper CSS pattern
        backgroundImage:
          "linear-gradient(#444 0.5px, transparent 0.5px), linear-gradient(#e1e1e1 1px, transparent 1px)",
        backgroundSize: "100% 2rem", // Row height
        backgroundPosition: "0 2rem", // Offset first line
        p: 0,
      }}
    >
      {/* Red Margin Line */}
      <Box
        sx={{
          position: "absolute",
          left: "3rem",
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "#f8a5c2", // Pink/Red margin
          zIndex: 1,
        }}
      />

      {/* Header Area (Above the first line) */}
      <Box
        sx={{
          height: "4rem",
          display: "flex",
          alignItems: "flex-end",
          px: 8,
          pb: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "#666", fontWeight: "bold", letterSpacing: 2 }}
        >
          Answer Sheet
        </Typography>
      </Box>
    </Paper>
  );
};

import React from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";

interface ExamHeaderProps {
  year: number;
  subject: string;
  totalMarks: number;
  logoUrl?: string; // Optional for this demo
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  year,
  subject,
  totalMarks,
  logoUrl,
}) => {
  return (
    <Paper
      elevation={3}
      className="exam-paper"
      sx={{
        p: 6,
        maxWidth: "210mm",
        minHeight: "297mm", // A4 Height
        mx: "auto",
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid #ccc",
      }}
    >
      <Box sx={{ mb: 4 }}>
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            style={{ height: 60, marginBottom: 16 }}
          />
        )}
        <Typography variant="h6" sx={{ letterSpacing: 2, fontWeight: "bold" }}>
          MHCET EXAM PAPER – {year}
        </Typography>
      </Box>

      <Divider
        sx={{
          width: "100%",
          borderBottomWidth: 2,
          borderColor: "black",
          mb: 4,
        }}
      />

      <Typography
        variant="h3"
        sx={{ fontFamily: "Merriweather, serif", fontWeight: 700, mb: 2 }}
      >
        {subject}
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 2, fontStyle: "italic" }}>
        Total Marks: <strong>{totalMarks}</strong>
      </Typography>

      <Box sx={{ mt: "auto", width: "100%" }}>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="caption">
          Authorized by LearnOpediA Institute
        </Typography>
      </Box>
    </Paper>
  );
};

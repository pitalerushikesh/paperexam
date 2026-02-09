import React from "react";
import { Box, Paper, Typography, Chip, Divider } from "@mui/material";
import type { Question } from "../utils/types";
import { QuestionRenderer } from "./QuestionRenderer";

interface QuestionCardProps extends Question {}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  marks,
  content,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: "210mm",
        height: "297mm", // Match A4 Height
        p: { xs: 3, md: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {/* Question Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "2px solid #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "1.2rem",
              fontFamily: "serif",
            }}
          >
            {questionNumber}
          </Box>
          <Typography
            variant="overline"
            sx={{ fontSize: "0.9rem", letterSpacing: 1 }}
          >
            Question
          </Typography>
        </Box>

        <Chip
          label={`${marks} MARKS`}
          variant="outlined"
          sx={{
            borderRadius: 1,
            fontWeight: "bold",
            borderWidth: 2,
            borderColor: "#000",
            fontFamily: "serif",
          }}
        />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Question Content */}
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <QuestionRenderer content={content} />
      </Box>

      {/* Footer / Page Number */}
      <Box sx={{ mt: "auto", textAlign: "center", opacity: 0.5 }}>
        <Typography variant="caption" sx={{ fontFamily: "serif" }}>
          Page {questionNumber}
        </Typography>
      </Box>
    </Paper>
  );
};

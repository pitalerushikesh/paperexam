import React from "react";
import { Box, Paper, Typography, Chip, Divider } from "@mui/material";
import type { Question } from "../utils/types";
import { QuestionRenderer } from "./QuestionRenderer";

// Add 'subject' to the props interface
interface QuestionCardProps extends Question {
  subject: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  marks,
  content,
  subject,
  optionFontScale,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: "210mm",
        height: "297mm",
        p: { xs: 3, md: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {/* --- NEW SUPER-HEADER --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          pb: 1,
          borderBottom: "1px dashed #ccc",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 800,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "text.secondary",
          }}
        >
          MHTCET 2025 — {subject}
        </Typography>
      </Box>

      {/* Existing Question Header (Number & Marks) */}
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
          label={subject === "maths" ? `${marks} MARKS` : `${marks} MARK`}
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

      <Divider sx={{ mb: 1 }} />

      {/* Question Content */}
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <QuestionRenderer content={content} optionFontScale={optionFontScale} />
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

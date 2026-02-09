import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Fade,
  Container,
} from "@mui/material";
import type { Question } from "../utils/types"; // Type-only import
import { questions } from "../utils/data";
import { ExamHeader } from "./ExamHeader";
import { QuestionCard } from "./QuestionCard";
import { AnswerSheet } from "./AnswerSheet";
import { NavigationControls } from "./NavigationControls";
import logo from "../assets/logo.png";

const theme = createTheme({
  typography: {
    fontFamily: '"Merriweather", "Times New Roman", serif',
  },
  palette: {
    background: {
      default: "#dcdcdc", // Darker desk background for contrast
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease-in-out",
        },
      },
    },
  },
});

export const ExamContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Safe check for question data
  const currentQuestion: Question | undefined = questions[currentStep - 1];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          pb: 12, // Space for footer
          pt: 4,
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Fade in={true} key={currentStep} timeout={600}>
            {/* LAYOUT LOGIC:
              - Flex Row on Desktop (md+)
              - Flex Column on Mobile (xs)
              - Gap between pages
            */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-start" },
                justifyContent: "center",
                gap: { xs: 4, lg: 2 },
              }}
            >
              {/* LEFT PAGE (Header or Question) */}
              <Box sx={{ width: "100%", maxWidth: "210mm" }}>
                {currentStep === 0 ? (
                  <ExamHeader
                    year={2025}
                    subject="PHYSICS & MATHEMATICS"
                    totalMarks={100}
                    logoUrl={logo}
                  />
                ) : (
                  currentQuestion && <QuestionCard {...currentQuestion} />
                )}
              </Box>

              {/* RIGHT PAGE (Answer Sheet) */}
              {/* Only show Answer Sheet if we are NOT on the cover page */}
              {currentStep > 0 && (
                <Box sx={{ width: "100%", maxWidth: "210mm" }}>
                  <AnswerSheet />
                </Box>
              )}
            </Box>
          </Fade>
        </Container>

        <NavigationControls
          currentStep={currentStep}
          totalQuestions={questions.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onStart={handleNext}
        />
      </Box>
    </ThemeProvider>
  );
};

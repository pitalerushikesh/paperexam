import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Fade,
  Container,
} from "@mui/material";
import type { Question } from "../utils/types";
import { questions } from "../utils/data";
import { ExamHeader } from "./ExamHeader";
import { QuestionCard } from "./QuestionCard";
import { NavigationControls } from "./NavigationControls";
import { ExcalidrawIFrame } from "./ExcalidrawIFrame";
import logo from "../assets/logo.png";
type ExcalidrawElement = { id: string; [key: string]: any };

const theme = createTheme({
  typography: {
    fontFamily: '"Merriweather", "Times New Roman", serif',
  },
  palette: {
    background: {
      default: "#dcdcdc",
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

  // State to hold drawings for each question
  const [drawings, setDrawings] = useState<
    Record<number, readonly ExcalidrawElement[]>
  >({});

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

  const handleDrawingChange = (elements: any) => {
    setDrawings((prev) => {
      // Check if anything actually changed to avoid unnecessary state commits
      if (prev[currentStep]?.length === elements.length) return prev;
      return { ...prev, [currentStep]: elements };
    });
  };

  const currentQuestion: Question | undefined = questions[currentStep - 1];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          pb: 12,
          pt: 4,
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Fade in={true} key={currentStep} timeout={600}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-start" },
                justifyContent: "center",
                gap: { xs: 4, lg: 2 },
              }}
            >
              {/* LEFT PAGE */}
              <Box sx={{ width: "100%", maxWidth: "210mm" }}>
                {currentStep === 0 ? (
                  <ExamHeader
                    year={2026}
                    subject="PHYSICS & MATHEMATICS"
                    totalMarks={100}
                    logoUrl={logo}
                  />
                ) : (
                  currentQuestion && <QuestionCard {...currentQuestion} />
                )}
              </Box>

              {/* RIGHT PAGE */}
              {currentStep > 0 && (
                <Box
                  key={`q-wrapper-${currentStep}`}
                  sx={{ width: "100%", maxWidth: "210mm" }}
                >
                  <ExcalidrawIFrame
                    questionId={currentStep}
                    initialData={drawings[currentStep] || []}
                    onChange={handleDrawingChange}
                  />
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

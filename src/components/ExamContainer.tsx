import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Fade,
  Container,
  Typography,
} from "@mui/material";

import { ExamHeader } from "./ExamHeader";
import { QuestionCard } from "./QuestionCard";
import { NavigationControls } from "./NavigationControls";
import { ExcalidrawIFrame } from "./ExcalidrawIFrame";
import logo from "../assets/logo.png";
import { SubjectPortal } from "../pages/SubjectPortal";
import { QUESTION_BANK } from "../utils/data";

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
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Use a string key for drawings to keep subjects separate: e.g., "physics-1"
  const [drawings, setDrawings] = useState<Record<string, any>>({});

  // 1. Direct access: Get the specific array for the selected subject
  // If no subject is selected, it defaults to an empty array
  const currentQuestions = selectedSubject
    ? QUESTION_BANK[selectedSubject]
    : [];

  // Handle returning to the selection screen
  if (!selectedSubject) {
    return <SubjectPortal onSelect={(sub) => setSelectedSubject(sub)} />;
  }

  const handleNext = () => {
    if (currentStep < currentQuestions.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentStep === 0) {
      setSelectedSubject(null); // Go back to subject selection cards
    } else {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Get the current question object
  const currentQuestion = currentQuestions[currentStep - 1];

  // Generate a unique key for the drawing storage
  const drawingKey = `${selectedSubject}-${currentStep}`;

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
        }}
      >
        <Container maxWidth="xl">
          {/* Header branding on top of exam */}
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ mb: 2, opacity: 0.5 }}
          >
            LearnOpediA – {selectedSubject.toUpperCase()}
          </Typography>

          <Fade in={true} key={drawingKey} timeout={600}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 2,
                justifyContent: "center",
              }}
            >
              {/* LEFT: QUESTION */}
              <Box sx={{ width: "100%", maxWidth: "210mm" }}>
                {currentStep === 0 ? (
                  <ExamHeader
                    year={2026}
                    subject={selectedSubject.toUpperCase()}
                    totalMarks={currentQuestions.length * 2}
                    logoUrl={logo}
                  />
                ) : (
                  currentQuestion && (
                    <QuestionCard
                      subject={selectedSubject}
                      {...currentQuestion}
                    />
                  )
                )}
              </Box>

              {/* RIGHT: EXCALIDRAW (Only if not on header page) */}
              {currentStep > 0 && (
                <Box sx={{ width: "100%", maxWidth: "210mm" }}>
                  <ExcalidrawIFrame
                    questionId={drawingKey} // Unique ID per subject
                    initialData={drawings[drawingKey] || []}
                    onChange={(elements) => {
                      setDrawings((prev) => ({
                        ...prev,
                        [drawingKey]: elements,
                      }));
                    }}
                  />
                </Box>
              )}
            </Box>
          </Fade>
        </Container>

        <NavigationControls
          currentStep={currentStep}
          totalQuestions={currentQuestions.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onStart={handleNext}
        />
      </Box>
    </ThemeProvider>
  );
};

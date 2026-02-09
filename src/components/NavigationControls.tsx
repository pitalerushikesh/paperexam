import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StartIcon from "@mui/icons-material/PlayArrow";

interface NavigationControlsProps {
  currentStep: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  onStart: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentStep,
  totalQuestions,
  onNext,
  onPrev,
  onStart,
}) => {
  const isHeaderPage = currentStep === 0;
  const isLastQuestion = currentStep === totalQuestions;

  return (
    <Box
      className="no-print"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        gap: 2,
        zIndex: 1000,
      }}
    >
      {isHeaderPage ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<StartIcon />}
          onClick={onStart}
          sx={{ borderRadius: 20, px: 4 }}
        >
          Start Exam
        </Button>
      ) : (
        <>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onPrev}
            // Allow going back to header (step 0)
          >
            Previous
          </Button>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={onNext}
            disabled={isLastQuestion}
          >
            {isLastQuestion ? "End of Paper" : "Next Question"}
          </Button>
        </>
      )}
    </Box>
  );
};

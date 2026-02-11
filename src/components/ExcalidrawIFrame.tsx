import React, { useEffect, useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";

interface ExcalidrawIFrameProps {
  questionId: number;
  initialData: any;
  onChange: (elements: any) => void;
}

export const ExcalidrawIFrame: React.FC<ExcalidrawIFrameProps> = ({
  questionId,
  initialData,
  onChange,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "READY") {
        iframeRef.current?.contentWindow?.postMessage(
          { type: "INITIAL_DATA", payload: { elements: initialData || [] } },
          "*",
        );
      }
      if (event.data.type === "DRAWING_UPDATE") {
        onChange(event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [questionId]);

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: "210mm",
        height: "297mm",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
      }}
    >
      {/* Visual Header matching Question side */}
      <Box
        sx={{
          height: "4rem",
          display: "flex",
          alignItems: "flex-end",
          px: 8,
          pb: 1,
          borderBottom: "1px solid #eee",
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "#999", fontWeight: "bold", letterSpacing: 2 }}
        >
          Answer Sheet - Question {questionId}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <iframe
          ref={iframeRef}
          src="/excalidraw-embed.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Excalidraw Canvas"
        />
      </Box>
    </Paper>
  );
};

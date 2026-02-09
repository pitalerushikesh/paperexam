import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

interface QuestionRendererProps {
  content: string;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  content,
}) => {
  return (
    <Box
      sx={{
        color: "text.primary",
        fontSize: { xs: "0.875rem", sm: "1rem" }, // text-sm sm:text-base
        lineHeight: { xs: 1.625, sm: 2 }, // leading-relaxed sm:leading-loose
        fontFamily: "Merriweather, serif",

        "& p": { mb: 2 }, // [&_p]:mb-3 (approx)
        "& ul": {
          mt: 2,
          pl: 4,
          listStyleType: "disc",
          "& > li": { mb: 1 }, // space-y-2
        },
        "& li": { color: "text.secondary" }, // text-muted-foreground
        "& strong": {
          color: "text.primary",
          fontWeight: 600,
        },
        "& br": { display: "block", mt: 1 },

        // KaTeX specific spacing
        "& .katex-display": { my: 3 },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

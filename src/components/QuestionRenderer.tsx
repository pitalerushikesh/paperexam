import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { injectDriveImages } from "../utils/helper";

interface QuestionRendererProps {
  content: string;
  optionFontScale?: number; // 👈 optional, per-question
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  content,
  optionFontScale = 1, // 👈 default = no change
}) => {
  const processedContent = React.useMemo(() => {
    const withImages = injectDriveImages(content);

    // ✅ wrap ONLY (a), (b), (c), (d)
    return withImages.replace(
      /^\((a|b|c|d)\)\s+/gim,
      `<span class="mcq-label">($1)</span> `,
    );
  }, [content]);

  return (
    <Box
      sx={{
        color: "text.primary",
        fontSize: { xs: "0.875rem", sm: "1.2rem" },
        lineHeight: { xs: 1.625, sm: 2 },
        fontFamily: "Merriweather, serif",

        "& p": { mb: 2 },
        "& strong": { fontWeight: 600 },
        "& br": { display: "block", mt: 1 },

        /* ===== MCQ OPTIONS (SCOPED + SAFE) ===== */
        // "& .mcq-line": {
        //   display: "inline-block",
        //   minWidth: "45%",
        //   marginRight: "24px",
        //   marginBottom: "14px",
        //   fontSize: {
        //     xs: `${1 * optionFontScale}rem`,
        //     sm: `${1.3 * optionFontScale}rem`,
        //   },
        //   lineHeight: 2,
        // },

        // "& .mcq-label": {
        //   fontWeight: 600,
        //   fontSize: "1.2em",
        //   marginRight: "6px",
        // },

        // "& p:has(.mcq-label)": {
        //   fontSize: "1.25rem",
        //   lineHeight: 2,
        // },

        // "& .mcq-label": {
        //   fontWeight: 600,
        //   fontSize: `${1.05 * optionFontScale}em`,
        // },

        "& .mcq-label": {
          fontSize: `${0.7 * optionFontScale}em`,
        },

        // scale inline math + text only
        "& p > .mcq-label + .katex": {
          fontSize: `${1.2 * optionFontScale}em`,
        },

        "& p > .mcq-label + span:not(.katex-display)": {
          fontSize: `${1.2 * optionFontScale}em`,
        },

        // explicitly DO NOT scale display math
        "& .katex-display": {
          fontSize: "1em",
          my: 5,
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      >
        {processedContent}
      </ReactMarkdown>
    </Box>
  );
};

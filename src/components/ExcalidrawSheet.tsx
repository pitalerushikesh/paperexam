// import React, { Suspense } from "react";
// import { Box, Paper, Typography, CircularProgress } from "@mui/material";

// // We keep types here
// import type { Excalidraw } from "@excalidraw/excalidraw";
// type ExcalidrawOnChange = React.ComponentProps<typeof Excalidraw>["onChange"];
// type ExcalidrawElements = Parameters<NonNullable<ExcalidrawOnChange>>[0];
// type ExcalidrawAppState = Parameters<NonNullable<ExcalidrawOnChange>>[1];

// // LAZY LOAD the component to prevent the bundling error on initial load
// const ExcalidrawWrapper = React.lazy(async () => {
//   const { Excalidraw } = await import("@excalidraw/excalidraw");
//   return { default: Excalidraw };
// });

// interface ExcalidrawSheetProps {
//   questionId: number;
//   initialData: ExcalidrawElements | null;
//   onChange: (
//     elements: ExcalidrawElements,
//     appState: ExcalidrawAppState,
//   ) => void;
// }

// export const ExcalidrawSheet: React.FC<ExcalidrawSheetProps> = ({
//   questionId,
//   initialData,
//   onChange,
// }) => {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         width: "100%",
//         maxWidth: "210mm",
//         height: "297mm",
//         position: "relative",
//         overflow: "hidden",
//         border: "1px solid #ddd",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Box
//         sx={{
//           height: "3rem",
//           bgcolor: "#f5f5f5",
//           display: "flex",
//           alignItems: "center",
//           px: 2,
//           zIndex: 5,
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{ fontWeight: "bold", color: "#666" }}
//         >
//           GRAPHING / ROUGH SHEET (Q{questionId})
//         </Typography>
//       </Box>

//       <Box sx={{ flexGrow: 1, position: "relative" }}>
//         {/* Suspense handles the loading state of the lazy-loaded Excalidraw */}
//         <Suspense
//           fallback={
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100%",
//               }}
//             >
//               <CircularProgress />
//             </Box>
//           }
//         >
//           <ExcalidrawWrapper
//             key={questionId}
//             initialData={{
//               elements: initialData || [],
//               appState: {
//                 viewBackgroundColor: "#ffffff",
//                 gridSize: 20,
//               },
//               scrollToContent: true,
//             }}
//             onChange={onChange}
//             UIOptions={{
//               canvasActions: {
//                 loadScene: false,
//                 saveToActiveFile: false,
//                 export: false,
//                 saveAsImage: false,
//               },
//             }}
//           />
//         </Suspense>
//       </Box>
//     </Paper>
//   );
// };

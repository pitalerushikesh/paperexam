import React from "react";
import { Box, Typography, Grid, Card, CardActionArea } from "@mui/material";
import { Science, Biotech, Calculate } from "@mui/icons-material";

const subjects = [
  {
    id: "physics",
    title: "Physics",
    icon: <Science fontSize="large" />,
    color: "#00bcd4",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: <Biotech fontSize="large" />,
    color: "#9c27b0",
  },
  {
    id: "maths",
    title: "Maths",
    icon: <Calculate fontSize="large" />,
    color: "#ff9800",
  },
];

export const SubjectPortal: React.FC<{ onSelect: (sub: string) => void }> = ({
  onSelect,
}) => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: 4,
    }}
  >
    <Typography variant="h2" gutterBottom sx={{ fontWeight: 900 }}>
      LearnOpediA
    </Typography>
    <Typography variant="h5" sx={{ mb: 6, opacity: 0.7 }}>
      Learn from What Was Asked
    </Typography>

    <Grid container spacing={4} justifyContent="center" maxWidth="lg">
      {subjects.map((s) => (
        <Grid key={s.id} size={{ xs: 12, sm: 4 }}>
          <Card elevation={4} sx={{ borderRadius: 4, textAlign: "center" }}>
            <CardActionArea onClick={() => onSelect(s.id)} sx={{ p: 4 }}>
              <Box sx={{ color: s.color, mb: 2 }}>{s.icon}</Box>
              <Typography variant="h5" fontWeight="bold">
                {s.title}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

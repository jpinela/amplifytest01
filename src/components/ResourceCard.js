// components/ResourceCard.js
"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ResourceCard({ item }) {
  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          component={Link}
          href={item.url}
          size="small"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{ fontWeight: 600, textTransform: "none" }}
        >
          Explore Link
        </Button>
      </CardActions>
    </Card>
  );
}

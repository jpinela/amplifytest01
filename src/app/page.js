// app/page.js
"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import ResourceCard from "@/components/ResourceCard";

// Data array for the resource cards
const cardItems = [
  { title: "u33", url: "/user/qu40", description: "see the info page fir yser 30" },
  { title: "u40", url: "/user/uj33", description: "see the info page for user 40" },
  { title: "u55", url: "/user/nu55", description: "see the info page for user 55" },  
];

export default function LandingPage() {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "grey.50" }}>
      {/* Full-Width Hero Section */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 8, md: 12 },
          px: 2,
          background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            gutterBottom
            sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" } }}
          >
            MarcarExames.com
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}
          >
            Manage your resources.
          </Typography>

          {/* Main CTA Button pointing to /info */}
          <Button
            component={Link}
            href="/info"
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<ExploreIcon />}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: "1.1rem",
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: 3,
              textTransform: "none",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            Go to Info Page
          </Button>
        </Container>
      </Box>

      {/* Cards Grid Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          
          sx={{ mb: 5 , color: "black" }}
        >
          Explore Quick Links
        </Typography>

        <Grid container spacing={4}>
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ResourceCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
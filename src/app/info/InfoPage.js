"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./../page.module.css";
import React, { useState, useEffect } from "react";

import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";

import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Info({session}) {
  const [examCatalog, setExamCatalog] = useState();

  const userName = session?.user?.name || "User";
  const userInitial = userName.charAt(0).toUpperCase();

  const navLinks = [
    { label: "Home página", href: "/", icon: <HomeIcon color="primary" /> },
    { label: "User 33", href: "/user/uj33", icon: <PersonIcon color="primary" /> },
    { label: "User 40", href: "/user/qu40", icon: <PersonIcon color="primary" /> },
    { label: "List Data", href: "/list", icon: <ListAltIcon color="primary" /> },
  ];

  // If unauthenticated, trigger sign-in directly through NextAuth's signIn endpoint
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/app/info`);
  }


  useEffect(() => {
    async function loadExams() {
      try {
        const res = await fetch(`/api/get_data?lang=EN`);
        const json = await res.json();
        if (json.success) {
          setExamCatalog(json.data);
        }
      } catch (err) {
        console.error("Failed to load exams:", err);
      } finally {

        
      }
    }
    loadExams();
  }, []);

return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: "background.paper",
        }}
      >
        {/* Header / Welcome Section */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Avatar
            src={session?.user?.image}
            alt={userName}
            sx={{ width: 56, height: 56, bgcolor: "primary.main", fontSize: "1.5rem" }}
          >
            {userInitial}
          </Avatar>

          <Box flexGrow={1}>
            <Typography variant="h5" component="h1" fontWeight={700}>
              Olá olá, {userName}! Welcome!
            </Typography>
          </Box>

          <Button
            size="medium"
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={() => signOut({ callbackUrl: "/" })}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            SignOut
          </Button>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Navigation Quick Links Grid */}
        <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
          Navegação para o Eng. Fábio:
        </Typography>

        <Grid container spacing={2}>
          {navLinks.map((link, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                component={Link}
                href={link.href}
                variant="outlined"
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  textDecoration: "none",
                  color: "text.primary",
                  borderRadius: 2,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: 2,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {link.icon}
                <Typography variant="body1" fontWeight={500}>
                  {link.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

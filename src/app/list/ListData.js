// app/agreements/page.js
"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";
import { signOut } from "next-auth/react";



import LogoutIcon from "@mui/icons-material/Logout";


// Placeholder for your AAAAA function (replace with your actual import)
async function AAAAA() {
  // Simulating API latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock raw response matching the structure prior to transformation
  return [
    { subok: "usr123#AGR-2026-A", nome: "Enterprise Service Agreement" },
    { subok: "usr123#AGR-2026-B", nome: "Non-Disclosure Agreement" },
    { subok: "usr456#AGR-2026-C", nome: "Software Licensing Terms" },
  ];
}

export default function ListData({session}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch("/api/agreements/list?lang=pt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const rawData= await response.json();

      // Transform raw objects into specified shape
      const formattedData = rawData.map((item) => ({
        id: item.id,
        agreementslug: item.agreementslug,
        agreementName: item.agreementName,
      }));

      setItems(formattedData);
    } catch (err) {
      console.error("Failed to fetch agreements:", err);
      setError("Failed to load agreements. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
            Agreements Overview
          </Typography>
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
          <Button
            size="medium"
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            href="/info"
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Info Page
          </Button>            
          <Box>   
          <Typography variant="body1" color="text.secondary">
            Displaying Agreement List
          </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchData}
          disabled={loading}
        >
          Refresh
        </Button>
      </Box>

      {/* Loading State */}
      {loading && (
        <Box display="flex" justifyContent="center" py={8}>
          <CircularProgress />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Data Items Display */}
      {!loading && !error && (
        <>
          {items.length === 0 ? (
            <Alert severity="info">No agreements found.</Alert>
          ) : (
            <Grid container spacing={3}>
              {items.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    elevation={2}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: 2,
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={1.5}>
                        <AssignmentIcon color="primary" fontSize="small" />
                        <Chip
                          label={item.agreementslug}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ fontWeight: 600 }}
                        />
                      </Box>

                      <Typography variant="h6" component="h2" fontWeight={600} gutterBottom>
                        {item.agreementName}
                      </Typography>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ wordBreak: "break-all" }}
                      >
                        ID: {item.id}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}
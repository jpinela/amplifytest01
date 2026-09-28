'use client';

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import styles from '../styles/ComingSoon.module.css';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setSnackbarMessage('Por favor introduza um endereço de email válido.');
      setSnackbarSeverity('warning');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    // Simulate backend subscription
    setTimeout(() => {
      setLoading(false);
      setSnackbarMessage(
        'Obrigado! Irá receber novidades e acesso prioritário quando lançarmos.'
      );
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setEmail('');
    }, 800);
  };

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit} className={styles.formInner}>
        <TextField
          variant="outlined"
          size="medium"
          placeholder="O seu melhor email (ex: nome@exemplo.pt)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          fullWidth
          InputProps={{
            style: {
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.07)',
              borderRadius: '10px',
              fontFamily: 'inherit',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#38bdf8',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#06b6d4',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            bgcolor: '#0284c7',
            color: '#ffffff',
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '1rem',
            padding: '12px 28px',
            borderRadius: '10px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
            '&:hover': {
              bgcolor: '#0369a1',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.6)',
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Avisem-me no Lançamento'}
        </Button>
      </form>
      <div className={styles.helperNote}>
        🔒 Sem spam. Apenas um aviso direto quando a plataforma estiver disponível.
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%', borderRadius: '10px', fontWeight: 500 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

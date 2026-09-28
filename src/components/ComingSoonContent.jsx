'use client';

import React, { useState } from 'react';
import styles from '../styles/ComingSoon.module.css';
import BackgroundSlider from './BackgroundSlider';
import ExamChips from './ExamChips';

export default function ComingSoonContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <BackgroundSlider
        activeIndex={activeIndex}
        onSlideChange={setActiveIndex}
      />

      <div className={styles.pageWrapper}>
        {/* Navigation & Brand Header */}
        <header className={styles.header}>
          <a href="#" className={styles.brand} aria-label="marcarexames.com">
            <img
              src="/images/logo_icon.png"
              alt="marcarexames.com"
              className={styles.brandLogo}
            />
            <span className={styles.brandText}>
              marcarexames<span className={styles.brandTld}>.com</span>
            </span>
          </a>
        </header>

        {/* Central Hero / Soon Message */}
        <main className={styles.mainContent}>
          <div className={styles.badgeCategory}>
            Brevemente em Portugal
          </div>

          <h1 className={styles.headline}>
            Todos os exames,{' '}
            <span className={styles.taglineHighlight}>
              um único sítio.
            </span>
          </h1>

          <p className={styles.subtext}>
            A forma mais simples e rápida de encontrar, comparar e agendar
            exames de diagnóstico médico, análises clínicas e imagiologia perto de si.
          </p>

          {/* Interactive Exam Chips / Categories that reflect the rotating images */}
          {false && <ExamChips
            activeIndex={activeIndex}
            onSelectIndex={setActiveIndex}
          />}
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>© {new Date().getFullYear()} marcarexames.com. Todos os direitos reservados.</span>
          </div>
          <div className={styles.footerRight}>
            <a href="mailto:info@marcarexames.com" className={styles.footerLink}>
              apoio@marcarexames.com
            </a>
            <span className={styles.footerDivider}>•</span>
            <span className={styles.footerLocation}>Portugal</span>
          </div>
        </footer>
      </div>
    </>
  );
}

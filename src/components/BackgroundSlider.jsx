'use client';

import React, { useEffect } from 'react';
import styles from '../styles/Slider.module.css';

export const EXAM_SLIDES = [
  {
    id: 1,
    title: 'Ressonância Magnética (RM)',
    subtitle: 'Imagiologia Avançada de Alta Resolução',
    src: '/images/exam_mri.jpg',
    tag: 'Ressonância',
  },
  {
    id: 2,
    title: 'Ecografia & Ultrassonografia',
    subtitle: 'Diagnóstico por Ultrassons em Tempo Real',
    src: '/images/exam_ultrasound.jpg',
    tag: 'Ecografia',
  },
  {
    id: 3,
    title: 'Análises Clínicas & Hematologia',
    subtitle: 'Resultados Rápidos e Confiáveis em Laboratório',
    src: '/images/exam_laboratory.jpg',
    tag: 'Análises Clínicas',
  },
  {
    id: 4,
    title: 'Tomografia Computorizada (TAC)',
    subtitle: 'Precisão Tridimensional e Rastreios Preventivos',
    src: '/images/exam_ctscan.jpg',
    tag: 'TAC / TC',
  },
  {
    id: 5,
    title: 'Cardiologia & Eletrocardiograma (ECG)',
    subtitle: 'Monitorização Cardiovascular e Esforço',
    src: '/images/exam_cardiology.jpg',
    tag: 'Cardiologia',
  },
];

export default function BackgroundSlider({ activeIndex, onSlideChange }) {
  useEffect(() => {
    const timer = setInterval(() => {
      onSlideChange((prev) => (prev + 1) % EXAM_SLIDES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [onSlideChange]);

  const activeSlide = EXAM_SLIDES[activeIndex] || EXAM_SLIDES[0];

  return (
    <div className={styles.sliderContainer} aria-hidden="false">
      {EXAM_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className={styles.slideImage}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* Dark gradient blur overlay for readability */}
      <div className={styles.overlay} />

      {/* Floating Exam Info Badge */}
      {false && <div className={styles.examLabelPill}>
        <span className={styles.examPulseDot} />
        <span>
          <strong>{activeSlide.title}</strong> — {activeSlide.subtitle}
        </span>
      </div>}

      {/* Slide Navigation Progress Indicators */}
      <div className={styles.controlsBar}>
        <ul className={styles.indicatorsList} role="tablist" aria-label="Slides de Exames">
          {EXAM_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={slide.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ver ${slide.title}`}
                  className={`${styles.indicatorButton} ${
                    isActive ? styles.indicatorButtonActive : ''
                  }`}
                  onClick={() => onSlideChange(index)}
                >
                  <span className={styles.indicatorProgress} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

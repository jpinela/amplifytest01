'use client';

import React from 'react';
import styles from '../styles/ComingSoon.module.css';
import { EXAM_SLIDES } from './BackgroundSlider';

const ADDITIONAL_EXAMS = [
  'Mamografia Digital',
  'Endoscopia & Colonoscopia',
  'Raio-X (RX)',
  'Densitometria Óssea',
];

export default function ExamChips({ activeIndex, onSelectIndex }) {
  return (
    <div className={styles.examTagsContainer}>
      <span className={styles.examTagTitle}>Exames integrados:</span>
      {EXAM_SLIDES.map((slide, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={slide.id}
            type="button"
            className={`${styles.examTagChip} ${
              isActive ? styles.examTagChipActive : ''
            }`}
            onClick={() => onSelectIndex(index)}
          >
            {slide.tag}
          </button>
        );
      })}
      {ADDITIONAL_EXAMS.map((name) => (
        <span key={name} className={styles.examTagChip} style={{ opacity: 0.75 }}>
          {name}
        </span>
      ))}
    </div>
  );
}

# Plan for marcarexames.com Coming Soon Page

## Overview
A sleek, modern, high-impact "Em Breve" (Coming Soon) landing page for `marcarexames.com`, Portugal/Lusophone-focused medical exam booking platform.
Tagline: "Todos os exames, um único sítio."

## Features
- **Full-screen rotating medical exam background imagery**: 5 distinct, high-definition medical examination backgrounds (MRI/Ressonância Magnética, Ecografia/Ultrasound, Análises Clínicas/Laboratory Diagnostics, Tomografia/TAC/X-Ray, Cardiologia/Oftalmologia).
- **Auto-rotate every 5 seconds**: Smooth cross-fade transition with animated progress indicators and exam labels.
- **Modern, non-generic typography & layout**: Clean Portuguese medical portal aesthetic using Plus Jakarta Sans, fluid typography (`clamp()`), and responsive layout.
- **Removed elements as requested**:
  - Removed contact / email notification form.
  - Removed "Em Desenvolvimento" status pill from the header for an ultra-clean, confident presence.
- **Full Responsiveness across all screen sizes**:
  - Fluid headline and subtext sizing with `clamp(...)` to prevent awkward wrapping on mobile phones.
  - Responsive examination tags that format neatly into touch-friendly chips.
  - Repositioned slider indicators and bottom info badges to ensure no overlap on viewport heights as low as 500px or widths down to 320px (`100dvh` support).

## Directory Structure
- `marcarexames_8492/public/images/`:
  - `exam_mri.jpg` (Ressonância Magnética)
  - `exam_ultrasound.jpg` (Ecografia)
  - `exam_laboratory.jpg` (Análises Clínicas)
  - `exam_ctscan.jpg` (Tomografia Computorizada - TAC)
  - `exam_cardiology.jpg` (Cardiologia & ECG)
  - `logo_icon.png` (Brand Icon)
- `marcarexames_8492/src/styles/`:
  - `globals.css`: Base resets, typography, and color tokens
  - `Slider.module.css`: Full-width & height background cross-fader and responsive timer indicators
  - `ComingSoon.module.css`: Page layout, fluid typography, interactive category tags, and responsive breakpoints
- `marcarexames_8492/src/components/`:
  - `BackgroundSlider.jsx`: Handles image rotation every 5s, indicators, smooth fade animations
  - `ComingSoonContent.jsx`: Header, branding, tagline, exam categories preview, and clean footer
  - `ExamChips.jsx`: Interactive exam category pills synced with slider state
- `marcarexames_8492/src/app/`:
  - `layout.jsx`: Root layout with font imports and metadata
  - `page.jsx`: Main page assembling the components

## Problems and Solutions
- *Issue*: On small mobile screens, large fixed font sizes and multiple floating badges can clash with the viewport height and slide indicators.
  *Solution*: Applied CSS fluid typography (`clamp(2rem, 6.5vw, 4.25rem)` for the title), dynamic viewport units (`100dvh`), and adjusted indicator stacking on screens under 768px and 480px.
- *Issue*: Requirement to remove the contact form and "Em Desenvolvimento" section while maintaining visual balance.
  *Solution*: Centered the visual emphasis on the hero tagline "Todos os exames, um único sítio." and expanded the interactive examination category chips.

let activeAnimationFrame = null;

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

export function scrollToSection(sectionId, offset = 76) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const start = window.scrollY;
  const top = target.getBoundingClientRect().top + start - offset;
  const distance = top - start;

  if (activeAnimationFrame) {
    window.cancelAnimationFrame(activeAnimationFrame);
  }

  if (prefersReducedMotion || Math.abs(distance) < 4) {
    window.scrollTo(0, top);
    return;
  }

  const duration = Math.min(620, Math.max(320, Math.abs(distance) * 0.22));
  const startedAt = performance.now();

  const step = (timestamp) => {
    const elapsed = timestamp - startedAt;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(step);
    } else {
      activeAnimationFrame = null;
    }
  };

  activeAnimationFrame = window.requestAnimationFrame(step);
}

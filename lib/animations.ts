/**
 * Hause Design System - Animation Library
 * Reusable animations and transitions
 */

export const animations = {
  // Fade animations
  fadeIn: {
    keyframes: `
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
    animation: 'fadeIn 0.3s ease',
    duration: '0.3s',
  },

  fadeOut: {
    keyframes: `
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `,
    animation: 'fadeOut 0.3s ease',
    duration: '0.3s',
  },

  // Scale animations
  scaleIn: {
    keyframes: `
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
    animation: 'scaleIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    duration: '0.2s',
  },

  scaleOut: {
    keyframes: `
      @keyframes scaleOut {
        from {
          opacity: 1;
          transform: scale(1);
        }
        to {
          opacity: 0;
          transform: scale(0.95);
        }
      }
    `,
    animation: 'scaleOut 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    duration: '0.2s',
  },

  // Slide animations
  slideInUp: {
    keyframes: `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    animation: 'slideInUp 0.3s ease',
    duration: '0.3s',
  },

  slideInDown: {
    keyframes: `
      @keyframes slideInDown {
        from {
          opacity: 0;
          transform: translateY(-16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    animation: 'slideInDown 0.3s ease',
    duration: '0.3s',
  },

  slideInLeft: {
    keyframes: `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-16px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `,
    animation: 'slideInLeft 0.3s ease',
    duration: '0.3s',
  },

  slideInRight: {
    keyframes: `
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(16px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `,
    animation: 'slideInRight 0.3s ease',
    duration: '0.3s',
  },

  // Bounce/elastic animations
  bounce: {
    keyframes: `
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-4px);
        }
      }
    `,
    animation: 'bounce 0.6s ease-in-out',
    duration: '0.6s',
  },

  // Glow animations
  glow: {
    keyframes: `
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(255, 78, 100, 0.2);
        }
        50% {
          box-shadow: 0 0 40px rgba(255, 78, 100, 0.4);
        }
      }
    `,
    animation: 'glow 2s ease-in-out infinite',
    duration: '2s',
  },

  // Pulse animations
  pulse: {
    keyframes: `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `,
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    duration: '2s',
  },

  // Shimmer (loading skeleton)
  shimmer: {
    keyframes: `
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `,
    animation: 'shimmer 2s infinite',
    duration: '2s',
  },

  // Count up animation (for stat counters)
  countUp: {
    keyframes: `
      @keyframes countUp {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    animation: 'countUp 0.6s ease-out',
    duration: '0.6s',
  },

  // Stagger delay (use with array of children)
  stagger: (index: number, totalDelay: number = 0.08) => ({
    animation: `fadeIn 0.3s ease forwards`,
    animationDelay: `${index * totalDelay}s`,
  }),
};

/**
 * Tailwind CSS animation classes
 * Add to tailwind.config.ts extend.animation
 */
export const tailwindAnimations = {
  fadeIn: 'fadeIn 0.3s ease',
  fadeOut: 'fadeOut 0.3s ease',
  scaleIn: 'scaleIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  scaleOut: 'scaleOut 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  slideInUp: 'slideInUp 0.3s ease',
  slideInDown: 'slideInDown 0.3s ease',
  slideInLeft: 'slideInLeft 0.3s ease',
  slideInRight: 'slideInRight 0.3s ease',
  bounce: 'bounce 0.6s ease-in-out',
  glow: 'glow 2s ease-in-out infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  shimmer: 'shimmer 2s infinite',
  countUp: 'countUp 0.6s ease-out',
};

/**
 * Keyframes for Tailwind config
 * Add to tailwind.config.ts extend.keyframes
 */
export const keyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  scaleOut: {
    '0%': { opacity: '1', transform: 'scale(1)' },
    '100%': { opacity: '0', transform: 'scale(0.95)' },
  },
  slideInUp: {
    '0%': { opacity: '0', transform: 'translateY(16px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideInDown: {
    '0%': { opacity: '0', transform: 'translateY(-16px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideInLeft: {
    '0%': { opacity: '0', transform: 'translateX(-16px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  slideInRight: {
    '0%': { opacity: '0', transform: 'translateX(16px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-4px)' },
  },
  glow: {
    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 78, 100, 0.2)' },
    '50%': { boxShadow: '0 0 40px rgba(255, 78, 100, 0.4)' },
  },
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
  shimmer: {
    '0%': { backgroundPosition: '-1000px 0' },
    '100%': { backgroundPosition: '1000px 0' },
  },
  countUp: {
    '0%': { opacity: '0', transform: 'translateY(8px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
};

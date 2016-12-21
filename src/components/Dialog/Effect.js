import { spring, presets } from 'react-motion';

const EffectConfig = {
  FADE_IN: {
    start: {
      from: {
        x: 0
      },
      to: {
        x: spring(1, presets.noWobble)
      }
    },
    end: {
      from: {
        x: 1
      },
      to: {
        x: spring(0, presets.noWobble)
      }
    }
  },
  FADE_IN_SCALE: {
    start: {
      from: {
        x: 0.5
      },
      to: {
        x: spring(1, presets.noWobble)
      }
    },
    end: {
      from: {
        x: 1
      },
      to: {
        x: spring(0, presets.noWobble)
      }
    }
  },
  FALL: {
    start: {
      from: {
        x: 1.5,
        y: 0
      },
      to: {
        x: spring(1, presets.noWobble),
        y: spring(1, presets.noWobble)
      }
    },
    end: {
      from: {
        x: 1,
        y: 1
      },
      to: {
        x: spring(1.5, presets.noWobble),
        y: spring(0, presets.noWobble)
      }
    }
  },
  SLIDE_IN_BOTTOM: {
    start: {
      from: {
        x: 40,
        y: 0
      },
      to: {
        x: spring(0, presets.wobbly),
        y: spring(1, presets.wobbly)
      }
    },
    end: {
      from: {
        x: 0,
        y: 1
      },
      to: {
        x: spring(40, presets.noWobble),
        y: spring(0, presets.noWobble)
      }
    }
  },
  ROTATE_IN_SCALE: {
    start: {
      from: {
        x: 180,
        y: 0
      },
      to: {
        x: spring(0, presets.wobbly),
        y: spring(1, presets.wobbly)
      }
    },
    end: {
      from: {
        x: 0,
        y: 1
      },
      to: {
        x: spring(180, presets.noWobble),
        y: spring(0, presets.noWobble)
      }
    }
  }
};

const fadeIn = value => (
  {
    opacity: value.x
  }
);

const fadeInScale = value => (
  {
    transform: `scale(${value.x})`,
    opacity: value.x
  }
);

const fall = value => (
  {
    transform: `scale(${value.x})`,
    opacity: value.y
  }
);

const slideInBottom = value => (
  {
    transform: `translateY(${value.x}px)`,
    opacity: value.y
  }
);

const rotateInScale = value => (
  {
    transform: `rotate(${value.x}deg)`,
    opacity: value.y
  }
);

const Effect = {
  FADE_IN: fadeIn,
  FADE_IN_SCALE: fadeInScale,
  FALL: fall,
  SLIDE_IN_BOTTOM: slideInBottom,
  ROTATE_IN_SCALE: rotateInScale
};

export default Effect;
export { EffectConfig };

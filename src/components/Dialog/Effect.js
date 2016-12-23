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
  SIDE_FALL: {
    start: {
      from: {
        translate: 60,
        translateZ: 600,
        rotate: 45,
        opacity: 0
      },
      to: {
        translate: spring(0, presets.noWobble),
        translateZ: spring(0, presets.noWobble),
        rotate: spring(0, presets.noWobble),
        opacity: spring(1, presets.noWobble)
      }
    },
    end: {
      from: {
        translate: 0,
        translateZ: 0,
        rotate: 0,
        opacity: 1
      },
      to: {
        translate: spring(60, presets.noWobble),
        translateZ: spring(600, presets.noWobble),
        rotate: spring(45, presets.noWobble),
        opacity: spring(0, presets.noWobble)
      }
    }
  },
  SLIDE_IN_TOP: {
    start: {
      from: {
        x: -40,
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
        x: spring(-40, presets.noWobble),
        y: spring(0, presets.noWobble)
      }
    }
  },
  SLIDE_IN_RIGHT: {
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
  SLIDE_IN_LEFT: {
    start: {
      from: {
        x: -40,
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
        x: spring(-40, presets.noWobble),
        y: spring(0, presets.noWobble)
      }
    }
  },
  ROTATE_IN: {
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

const sideFall = value => (
  {
    transform: `translate(${value.translate}%) translateZ(${value.translateZ}px) rotate(${value.rotate}deg)`,
    opacity: value.opacity
  }
);

const slideInTop = value => (
  {
    transform: `translateY(${value.x}px)`,
    opacity: value.y
  }
);

const slideInRight = value => (
  {
    transform: `translateX(${value.x}px)`,
    opacity: value.y
  }
);

const slideInBottom = value => (
  {
    transform: `translateY(${value.x}px)`,
    opacity: value.y
  }
);

const slideInLeft = value => (
  {
    transform: `translateX(${value.x}px)`,
    opacity: value.y
  }
);

const rotateIn = value => (
  {
    transform: `rotate(${value.x}deg)`,
    opacity: value.y
  }
);

const Effect = {
  FADE_IN: fadeIn,
  FADE_IN_SCALE: fadeInScale,
  FALL: fall,
  SIDE_FALL: sideFall,
  SLIDE_IN_TOP: slideInTop,
  SLIDE_IN_RIGHT: slideInRight,
  SLIDE_IN_BOTTOM: slideInBottom,
  SLIDE_IN_LEFT: slideInLeft,
  ROTATE_IN: rotateIn
};

export default Effect;
export { EffectConfig };

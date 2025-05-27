import { useState } from "react";
import Button from '../button'
import IconLeft from '../../icons/Placeholder-Outline.svg?react'
import IconRight from '../../icons/Arrow-Enter-Left-Outline.svg?react'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h3 className="w-full h-min text-text-lg font-semibold">Neutral Button</h3>
        <Button
        size="sm"
        variant="neutral"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Neutral Small
        </Button>
        <Button
        size="md"
        variant="neutral"
        showLeftIcon={false}
        showRightIcon={false}
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Neutral No Icons
        </Button>
        <Button
        size="lg"
        variant="neutral"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Neutral Large
        </Button>
        </div>
      <h3 className="w-full h-min text-text-lg font-semibold">Primary Button</h3>
        <Button
        size="sm"
        variant="primary"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Small Button
        </Button>
        <Button
        size="md"
        variant="primary"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Medium Button
        </Button>
        <Button
        size="lg"
        variant="primary"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Large Button
        </Button>
    </div>
    
  );
}
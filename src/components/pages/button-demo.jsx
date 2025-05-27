import { useState } from "react";
import Button from '../button'
import IconLeft from '../../icons/Placeholder-Outline.svg?react'
import IconRight from '../../icons/Arrow-Enter-Left-Outline.svg?react'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
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
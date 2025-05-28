import { useState } from "react";
import Button from '../button'
import IconLeft from '../../icons/Placeholder-Outline.svg?react'
import IconRight from '../../icons/Arrow-Enter-Left-Outline.svg?react'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-disp-xs font-bold">DC Button Component</h1>
        <h3 className="w-full h-min text-text-lg font-semibold">Reusable Button Component with Icon Support and Multiple Variants</h3>
        <p className="w-full h-min text-text-md font-normal">Build powerful user interactions with our Tailwind CSS-powered button component. Designed to be flexible and modern, it includes support for icons, multiple styles like primary, neutral, outline, success, and error, and works seamlessly across different screen sizes.
Whether you're crafting call-to-actions, form submissions, or navigation triggers, this component adapts to your needs with clean, scalable styling. Explore the examples below to see how easily it integrates into your Tailwind-based UI projects.</p>
        <div className="border border-white-500 rounded-curve-xl justify-center items-center p-6 flex gap-4">
          <Button
          size="sm"
          variant="neutral"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Neutral Small
          </Button>
          <Button
          size="md"
          variant="error"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Error Button
          </Button>
          <Button
          size="md"
          variant="warning"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Warning Button
          </Button>
          <Button
          size="lg"
          variant="secondary"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Secondary Large
          </Button>
          <Button
          size="lg"
          variant="success"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Success Large
          </Button>
        </div>
      </div>
      <h3 className="w-full h-min text-text-lg font-semibold">Primary Button</h3>
        <Button
        size="sm"
        variant="info"
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
        variant="info"
        leftIcon={IconLeft}
        rightIcon={IconRight}
        >
        Info Button
        </Button>
    </div>
    
  );
}
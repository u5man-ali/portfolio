import { useState } from "react";
import Button from '../button'
import IconLeft from '../../icons/Placeholder-Outline.svg?react'
import IconRight from '../../icons/Arrow-Enter-Left-Outline.svg?react'

export default function buttonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl font-bold border-b border-white-600 p-2">DC Button Component</h1>
        <p className="w-full h-min text-body-md font-normal mb-4">Build powerful CTAs with our Tailwind CSS-powered button component. Designed to be flexible and modern, it includes support for icons, multiple styles like primary, neutral, outline, success, and error, and works seamlessly across different screen sizes.
Whether you're crafting call-to-actions, form submissions, or navigation triggers, this component adapts to your needs with clean, scalable styling. Explore the examples below to see how easily it integrates into your Tailwind-based UI projects.</p>
        <h3 className="w-full h-min text-body-lg font-semibold">Neutral Button</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with neutral color. It features hover and active states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="lg"
          style="neutral"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={true}
          showRightIcon={true}
          iconLeftName="Add-Circle-Filled" 
          iconRightName="Add-Square-Multiple-Outline"
          >
          Gradient Button
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg font-semibold">Primary Button</h3>
        <p className="w-full h-min text-body-md font-normal">The example below shows a basic button with primary brand color variation. It features hover and focus states for better interactive experience.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="primary"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Gradient Button
          </Button>
          <Button
          size="sm"
          style="primary"
          variant="outline"
          shape="pill"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Pill Shaped Button
          </Button>
          <Button
          size="sm"
          style="primary"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Solid Color Button
          </Button>
          <Button
          size="sm"
          style="primary"
          variant="transparent"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Transparent Button
          </Button>
        </div>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="success"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Gradient Button
          </Button>
          <Button
          size="sm"
          style="success"
          variant="outline"
          shape="pill"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Pill Shaped Button
          </Button>
          <Button
          size="sm"
          style="success"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Solid Color Button
          </Button>
          <Button
          size="sm"
          style="success"
          variant="transparent"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Transparent Button
          </Button>
        </div>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="error"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Gradient Button
          </Button>
          <Button
          size="sm"
          style="error"
          variant="outline"
          shape="pill"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Pill Shaped Button
          </Button>
          <Button
          size="sm"
          style="error"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Solid Color Button
          </Button>
          <Button
          size="sm"
          style="error"
          variant="transparent"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Transparent Button
          </Button>
        </div>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="warning"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Gradient Button
          </Button>
          <Button
          size="sm"
          style="warning"
          variant="outline"
          shape="pill"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Pill Shaped Button
          </Button>
          <Button
          size="sm"
          style="warning"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Solid Color Button
          </Button>
          <Button
          size="sm"
          style="warning"
          variant="transparent"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Transparent Button
          </Button>
        </div>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex gap-4">
          <Button
          size="md"
          style="info"
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Gradient Button
          </Button>
          <Button
          size="sm"
          style="info"
          variant="outline"
          shape="pill"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Pill Shaped Button
          </Button>
          <Button
          size="sm"
          style="info"
          variant="solid"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Solid Color Button
          </Button>
          <Button
          size="sm"
          style="info"
          variant="transparent"
          shape="rounded"
          disabled={false}
          showLeftIcon={false}
          showRightIcon={false}
          leftIcon={IconLeft}
          rightIcon={IconRight}
          >
          Transparent Button
          </Button>
        </div>
      </div>
    </div>
    
  );
}
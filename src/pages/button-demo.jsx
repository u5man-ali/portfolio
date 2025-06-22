import { useState } from "react";
import Button from '../components/button'

import chevronRight from '../icons/Chevron-Right-Outline.svg?react'
import book from '../icons/Book-Default-Filled.svg?react'
import cloudUpload from '../icons/Cloud-Arrow-Up-Outline.svg?react'
import google from '../icons/google.svg?react'

export default function ButtonDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
        <div className="w-full flex justify-center items-center gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Button Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Button is a versatile, fully responsive UI element crafted with Tailwind CSS, ideal for building modern interfaces that demand clarity and performance. Whether you're designing a compelling call-to-action, form submission flow, or navigation control, this component delivers flexibility, consistency, and polish across devices and use cases.
With support for multiple styles, shapes, sizes, and icon placements, the button component adapts seamlessly to any UI scenario.</p>
<p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4 ">Explore the variations below to understand its full potential and how you can integrate it effortlessly into your Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Button</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the foundational version of the DC Button, featuring a clean layout with a primary color palette and a subtle gradient style along with it's disabled (muted) version. Interactive states like hover and active transitions provide smooth feedback to enhance user experience. It’s perfect for general use across dashboards, forms, and utility actions.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          >
          Basic Button
          </Button>
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={true}
          >
          Disabled Button
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Button Style Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Button supports a rich set of visual styles to suit different interaction goals:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Solid:</strong> For high-emphasis actions like primary CTAs.<br></br>
        💠 <strong>Gradient:</strong> Adds a dynamic visual flair, ideal for modern UIs.<br></br>
        💠 <strong>Outline:</strong> Great for secondary actions where visual balance is key.<br></br>
        💠 <strong>Transparent:</strong> Blends with the background—perfect for minimal or embedded UIs.<br></br>
        💠 <strong>Hyperlink:</strong> Styled like a traditional link but with button functionality for seamless integration in content-rich areas.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each style is built with consistency and accessibility in mind, ensuring that your design remains clean and intuitive.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="md"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Gradient Button
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="solid"
          shape="rounded"
          iconSize="md"
          >
          Solid Button
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          >
          Outline Button
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="transparent"
          shape="rounded"
          iconSize="md"
          >
          Transparent Button
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="link"
          shape="rounded"
          iconSize="md"
          >
          Hyperlink
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Buttons With Icons</h3>
        <p className="w-full h-min text-body-md text-neutral-default font-normal">Buttons can include left or right icons, enhancing clarity and visual meaning. Common examples include:</p>
        <p className="w-full h-min text-body-md text-neutral-default font-normal">
        💠 “Learn More” with a right arrow<br></br>
        💠 “Documentation” with a book icon<br></br>
        💠 “Upload Files” with a cloud or upload symbol<br></br>
        💠 “Continue with Google” with a branded icon</p>
        <p className="w-full h-min text-body-md text-neutral-default font-normal mb-4">Icons can be customized in size and style, and you can toggle their presence based on your layout needs.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="sm"
          style="info"
          variant="link"
          shape="rounded"
          iconSize="sm"
          iconRight={chevronRight}
          >
          Learn More
          </Button>
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          iconLeft={book}
          iconRight={chevronRight}
          >
          Read Documentation
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          iconLeft={cloudUpload}
          >
          Upload Files
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          iconLeft={google}
          >
          Continue with Google
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Button Color Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Button supports contextual color schemes to communicate intent:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Primary:</strong> Main actions users should focus on<br></br>
        💠 <strong>Secondary:</strong> Default for utility or balanced actions<br></br>
        💠 <strong>Success:</strong> Positive actions like “Save” or “Submit”<br></br>
        💠 <strong>Error:</strong> Alerts or destructive actions like “Delete”<br></br>
        💠 <strong>Warning:</strong> Cautionary actions such as “Proceed with Risk”<br></br>
        💠 <strong>Info:</strong> Informational buttons like “Details” or “View Logs”</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each color option is tuned for accessibility and clarity, making it easy to signal different types of actions.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Primary Brand Color
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Secondary Color
          </Button>
          <Button
          size="md"
          style="success"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Success Color
          </Button>
          <Button
          size="md"
          style="error"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Error Color
          </Button>
          <Button
          size="md"
          style="warning"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Warning Color
          </Button>
          <Button
          size="md"
          style="info"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Info Color
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Button Shape Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">Chosse from multiple shapes to align with your UI's tone and purpose:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Rounded:</strong> Soft corners for a modern, friendly feel<br></br>
        💠 <strong>Square:</strong> Straight edges for minimal, clean designs<br></br>
        💠 <strong>Pill:</strong> Fully rounded for high-emphasis or mobile-friendly elements</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Rounded Corners
          </Button>
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="square"
          iconSize="md"
          >
          Square Button
          </Button>
          <Button
          size="md"
          style="primary"
          variant="gradient"
          shape="pill"
          iconSize="md"
          >
          Circular Pill
          </Button>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Button Size Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Button supports three standard sizes:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Small:</strong> Compact use cases like tables, lists, or toolbars<br></br>
        💠 <strong>Medium:</strong> Default size for most buttons—balanced and readable<br></br>
        💠 <strong>Large:</strong> Ideal for mobile UIs, prominent CTAs, or form submissions</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Button
          size="sm"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="sm"
          >
          Small Button
          </Button>
          <Button
          size="md"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          >
          Medium Button
          </Button>
          <Button
          size="lg"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="lg"
          >
          Large Button
          </Button>
        </div>
      </div>
    </div>
    
  );
}
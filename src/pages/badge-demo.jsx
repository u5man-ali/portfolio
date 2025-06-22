import { useState } from "react";
import Badge from '../components/badge';

import CircleSmallFilled from '../icons/Circle-Small-Filled.svg?react'
import Dismiss from '../icons/Dismiss-Filled.svg?react'
import Pakistan from '../flags/Pakistan-Round.svg?react'
import Check from '../icons/Checkmark-Outline.svg?react'
import Sync from '../icons/Arrow-Sync-Outline.svg?react'
import Upload from '../icons/Cloud-Arrow-Up-Outline.svg?react'

export default function BadgeDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
        <div className="w-full flex justify-center items-start gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Badge Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Badge is a flexible, fully responsive UI element built with Tailwind CSS, crafted for modern interfaces that require clarity, categorization, and visual hierarchy. Whether you're displaying status indicators, categorizing content, tagging elements, or labeling rows in a table, this component delivers a consistent and lightweight visual aid across screen sizes and use cases. With support for various styles, shapes, sizes, and icon placements, the badge integrates smoothly into any design system or interface.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4 ">Explore the examples below to see how DC Badge can be used effectively in Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the base version of the DC Badge. It features a clean layout, a primary color palette, and optional gradient styling, along with a muted version for inactive or disabled states. Lightweight transitions on hover (if interactive) maintain visual smoothness. This foundational badge is ideal for use in tables, filter chips, or status indicators throughout your UI.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          iconLeft={CircleSmallFilled}
          iconRight={Dismiss}
          >
          Primary Filled
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Color Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Badge includes contextual color schemes to indicate status or type, along with 2 distinct styles that are shown below:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Primary:</strong> Default color for categorization or grouping. <br></br>
        💠 <strong>Neutral:</strong> Neutral tone for subtle presence.<br></br>
        💠 <strong>Success:</strong> Indicates completed or successful status. <br></br>
        💠 <strong>Error:</strong> Marks failures, alerts, errors etc.<br></br>
        💠 <strong>Warning:</strong> Cautionary tags for attention and warnings.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each style is built with consistency and accessibility in mind, ensuring that your design remains clean and intuitive.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <div className="flex gap-4">
            <Badge
            size="md"
            style="primary"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Primary Filled
            </Badge>
            <Badge
            size="md"
            style="neutral"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Neutral Filled
            </Badge>
            <Badge
            size="md"
            style="success"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Success Filled
            </Badge>
            <Badge
            size="md"
            style="error"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Error Filled
            </Badge>
            <Badge
            size="md"
            style="warning"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Warning Filled
            </Badge>
            <Badge
            size="md"
            style="info"
            variant="filled"
            shape="rounded"
            iconSize="md"
            >
            Info Filled
            </Badge>
          </div>
          <div className="flex gap-4">
            <Badge
            size="md"
            style="primary"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Primary Outline
            </Badge>
            <Badge
            size="md"
            style="neutral"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Neutral Outline
            </Badge>
            <Badge
            size="md"
            style="success"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Success Outline
            </Badge>
            <Badge
            size="md"
            style="error"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Error Outline
            </Badge>
            <Badge
            size="md"
            style="warning"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Warning Outline
            </Badge>
            <Badge
            size="md"
            style="info"
            variant="outline"
            shape="rounded"
            iconSize="md"
            >
            Info Outline
            </Badge>
          </div>
        </div>
        
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badges With Icons</h3>
        <p className="w-full h-min text-body-md text-neutral-default font-normal">Icons can enhance the semantic meaning of badges and statuses they represent. They can also show a dismiss icon to represent the removal of filter tags or country flags etc. Various examples are shown below for demonstartion purposes.</p>

        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          iconLeft={Pakistan}
          iconRight={Dismiss}
          >
          Pakistan
          </Badge>
          <Badge
          size="md"
          style="success"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          iconLeft={Check}
          iconRight={null}
          >
          Download Complete
          </Badge>
          <Badge
          size="md"
          style="neutral"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          iconLeft={Upload}
          iconRight={null}
          >
          Upload Required
          </Badge>
          <Badge
          size="md"
          style="error"
          variant="filled"
          shape="pill"
          iconSize="md"
          disabled={false}
          iconLeft={Sync}
          iconRight={null}
          >
          Autosync Error
          </Badge>
        </div>
        <p className="w-full h-min text-body-md text-neutral-default font-normal mb-4">Icons can be customized in size and style, and you can toggle their presence based on your layout needs.</p>
        
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Shape Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">Although the badges or tags are usually in a pill shape (circular borders) and it is advised to keep the status tags in consistent shape throughout the design. However, for support of diverse requirements there is one additional shape variant available with rounded corners. </p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Rounded:</strong> Modern, approachable appearance.<br></br>
        💠 <strong>Square:</strong> Minimalist, structured form</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="rounded"
          iconSize="md"
          >
          Rounded Corners
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          >
          Circular Pill
          </Badge>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Badge Size Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">DC Badge supports three standard sizes to adapt to different layouts:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 <strong>Small:</strong> For compact areas like tables, lists, or label overlays<br></br>
        💠 <strong>Medium:</strong> Default size for general tagging or categorization<br></br>
        💠 <strong>Large:</strong> For badges used in prominent metadata or filter sections</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This flexibility lets you match the design language of your app or brand</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Badge
          size="sm"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="sm"
          >
          Small Badge
          </Badge>
          <Badge
          size="md"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="md"
          >
          Medium Badge
          </Badge>
          <Badge
          size="lg"
          style="primary"
          variant="filled"
          shape="pill"
          iconSize="lg"
          >
          Large Badge
          </Badge>
        </div>
      </div>
    </div>
    
  );
}
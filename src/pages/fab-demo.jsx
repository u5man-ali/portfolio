import FAB from '../components/fab'
import placeholder from '../icons/Placeholder-Outline.svg?react'

export default function FabDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
        <div className="w-full flex justify-center items-center gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">Floating Action Button</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DezineCrafts Floating Action Button (FAB) is a bold, context-aware UI element designed to surface your app’s most important or high-impact actions. Built entirely with Tailwind CSS and fine-tuned for responsiveness, the FAB elevates usability in mobile-first interfaces and dashboard workflows—where quick access and visual hierarchy matter.
With support for multiple styles, shapes, sizes, and icon placements, the button component adapts seamlessly to any UI scenario.</p>
<p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4 ">Whether launching a creation flow, triggering contextual tools, or prompting a new message, the FAB makes your intent unmistakable—without overwhelming the layout.</p>
        <div className="text-neutral-hovered w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          Basic FAB
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Disabled FAB
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={true}
          icon={placeholder}
          >
          </FAB>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Purpose-Built for High-Impact Interactions</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">FABs are typically used to represent the primary action on a screen. Positioned above other content, they float confidently to grab attention while maintaining a lightweight footprint.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">Ideal use cases include:</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
        💠 Creating a new item (task, post, event)<br></br>
        💠 Uploading or attaching a file<br></br>
        💠 Starting a chat or support session<br></br>
        💠 Adding a new entry or connection</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each variant and style of the FAB corresponds with that of the default button component and is identical in this context. So here are a few examples of the FAB variants.</p>
        <div className="text-neutral-hovered w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          Gradient FAB
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Solid FAB
          <FAB
          size="md"
          style="primary"
          variant="solid"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Outline FAB
          <FAB
          size="md"
          style="primary"
          variant="outline"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Transparent FAB
          <FAB
          size="md"
          style="primary"
          variant="transparent"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">FAB Color Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The same color variations are copied from the main DC button component</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Each color option is tuned for accessibility and clarity, making it easy to signal different types of actions.</p>
        <div className="text-neutral-hovered w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          Brand Primary
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Secondary FAB
          <FAB
          size="md"
          style="secondary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Success FAB
          <FAB
          size="md"
          style="success"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Error FAB
          <FAB
          size="md"
          style="error"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Warning FAB
          <FAB
          size="md"
          style="warning"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Info FAB
          <FAB
          size="md"
          style="info"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">FAB Shape Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">The Floating Action Button pairs beautifully with cards, modals, drawers, and other DC components. Whether you're building a productivity tool, admin dashboard, or mobile-first app, the FAB anchors your UI with functional flair.</p>
        <div className="text-neutral-hovered w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          Rounded Corners
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Square Corners
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="square"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Circular Pill
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="pill"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">FAB Size Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">Identical to the DC Button component, FABs also feature 3 distinct size variants for different use cases.</p>
        <div className="text-neutral-hovered w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          Small FAB
          <FAB
          size="sm"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="sm"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Medium FAB
          <FAB
          size="md"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="md"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
          Large FAB
          <FAB
          size="lg"
          style="primary"
          variant="gradient"
          shape="rounded"
          iconSize="lg"
          disabled={false}
          icon={placeholder}
          >
          </FAB>
        </div>
      </div>
    </div>
    
  );
}
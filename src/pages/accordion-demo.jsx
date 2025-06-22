import Accordion from '../components/accordion'

export default function AccordionDemo() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
      <div className="w-full h-min flex justify-center items-center gap-2 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">DC Accordion Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DC Accordion is a flexible, responsive UI component built with Tailwind CSS, designed to show and hide content efficiently within limited screen real estate. Commonly used in FAQ sections, content-heavy dashboards, filter panels, and forms, accordions improve UX by reducing clutter and giving users control over what to read or interact with.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">With support for multiple styles, size variations, and an intuitive expand/collapse behavior, the DC Accordion delivers clarity, consistency, and a polished experience across all screen sizes.<br></br>
        Explore the examples below to see how it adapts to various design needs in your Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Accordion</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">This is the base version of the DC Accordion. It features a trigger (header or title) and a collapsible content area. Interaction is keyboard-accessible and supports smooth transitions between collapsed and expanded states. The base accordion uses a neutral style and medium size by default—ideal for general use in settings pages, vertical navigation, or sectioned content blocks.</p>
        
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <Accordion
          title="What is DezineCrafts UI Kit?"
          style="primary"
          size="sm"
          iconName="Chevron-Down-Outline"
          className="max-w-md"
          >
            DezineCrafts UI Kit is a modern, Tailwind CSS–based design system that provides reusable and customizable components like buttons, dropdowns, forms, and layout blocks to help developers and designers build beautiful web interfaces faster.
          </Accordion>
        </div>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">The DC Accordion enhances content presentation by helping users focus, explore, and interact with your interface on their own terms. Its configurability in terms of size, style, and interaction makes it a powerful tool in modern UI design systems.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Accordion Variations</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">There are several variations based on sizes and styles using neutral as well as brand colors to suit varying densities of content and layout needs. The accordion sizes can be configured to adopt the responsive behavior, becoming smaller on small screens as required. All variants are fully optimized for all screen sizes.</p>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4 mb-4">
          <p className="w-full h-min text-center text-body-md text-neutral-hovered font-normal ">Small Accordion with Neutral Style</p>
          <Accordion
          title="Expand to see the variant details for this accordion"
          style="neutral"
          size="sm"
          iconName="Chevron-Down-Outline"
          className="max-w-sm mb-4"
          >
            This variant has neutral style applied and is small in size with max width set to medium breakpoint passed as a custom class: (className="max-w-md"). 
          </Accordion>
          <p className="w-full h-min text-center text-body-md text-neutral-hovered font-normal ">Medium Accordion with Brand Colors</p>
          <Accordion
          title="Expand to see the variant details for this accordion"
          style="primary"
          size="md"
          iconName="Chevron-Down-Outline"
          className="max-w-xl mb-4"
          >
            This variant has primary style applied and is medium in size with max width set to medium breakpoint passed as a custom class: (className="max-w-md"). 
          </Accordion>
          <p className="w-full h-min text-center text-body-md text-neutral-hovered font-normal ">Large Transparent Accordion</p>
          <Accordion
          title="Expand to see the variant details for this accordion"
          style="transparent"
          size="lg"
          iconName="Chevron-Down-Outline"
          className="max-w-full mb-4"
          >
            This variant has primary style applied and is medium in size with max width set to medium breakpoint passed as a custom class: (className="max-w-md"). 
          </Accordion>
        </div>
        
      </div>
    </div>
  );
}
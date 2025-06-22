import { useState } from "react";
import Tabs from '../components/tabs'

const section1 = [
    {id: "tab1", title: "Tab One"},
    {id: "tab2", title: "Tab Two"},
    {id: "tab3", title: "Tab Three"},
    {id: "tab4", title: "Tab Four"},
    {id: "tab5", title: "Tab Five"}
];
const section2 = [
    {id: "tab1", title: "Overview"},
    {id: "tab2", title: "Specs"},
    {id: "tab3", title: "Reviews"},
    {id: "tab4", title: "Manufacturers"},
    {id: "tab5", title: "User Guides"}
];

export default function TabDemo() {
    const [section1Tab, setSection1Tab] = useState(section1[0].id);
    const [section2Tab, setSection2Tab] = useState(section1[0].id);
    const [section3Tab, setSection3Tab] = useState(section1[0].id);
  return (
    <div className="flex justify-center items-center mb-4 flex-wrap text-neutral-hovered">
        <div className="w-full flex justify-center items-center gap-2 flex-wrap">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">Tabs Component</h1>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DezineCrafts Tabs component is a horizontally stacked, lightweight navigation UI designed for segmenting and switching between different content views—all without reloading the page. Built with Tailwind CSS utility classes and React state logic, it delivers an accessible, flexible tab-switching experience while remaining highly customizable for product, dashboard, or documentation use cases.</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">
            With built-in support for dynamic tab counts, sizing presets (sm, md, lg), and configurable visual styles (primary, neutral, transparent), this Tabs component ensures seamless integration into various interface themes. Its optional icon support allows you to reinforce context visually without cluttering the UI.
        </p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Intentional, State-Managmement & Tab Switching</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">
            Each tab behaves as a toggle button that controls the currently active section. Internally, the component tracks the selected tab via <b>useState</b>, and when clicked, returns the associated id using <b>handleSelect( )</b> function allowing the parent to control which content is displayed. This is also demonstrated in the examples shown below.
        </p>
        <div className="w-full flex flex-wrap text-neutral-hovered border border-neutral-regular rounded-curve-xl justify-center px-6 py-8 mb-4">
        <div className="w-full">
            <Tabs
            tabs={section1}
            size="md"
            style="primary"
            defaultActive={0}
            onSelect={(id) => setSection1Tab(id)}
            tabClassName=""
            />
        </div>
        <div className="w-full flex justify-center bg-neutral-primary py-8 text-body-lg font-semibold">
            {section1Tab === "tab1" && 
            <div className=" text-semantic-error-focused"> 
                Content of tab one contains text in red color.
            </div>}
            {section1Tab === "tab2" && 
            <div className="text-brand-primary-focused"> 
                Content of tab two is text written in brand color.
            </div>}
            {section1Tab === "tab3" && 
            <div className="text-semantic-info-focused">
                This text uses semantic info color.
            </div>}
            {section1Tab === "tab4" &&
            <div className="text-semantic-success-focused">
                For success we use Emerald from TailwindCSS color library.
            </div>}
            {section1Tab === "tab5" && 
            <div>
                Content of tab five is neutral
            </div>}
        </div>
        </div>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold">Purpose Built for Sectioned Content</h3>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal">
            Tabs are best suited for layouts where users need to switch between contextual views without leaving the page. Common use cases include:
        </p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal ">
        💠 Switching between product details like Overview, Specs, Reviews, Manufacturers, Suppliers etc.<br></br>
        💠 Organizing account settings into sections like Profile, Security, Billing...<br></br>
        💠 Segmenting dashboards into tabs like Analytics, Reports, Logs<br></br>
        💠 Toggling between steps in a process or wizard flow</p>
        <p className="w-full h-min text-body-md text-neutral-hovered font-normal mb-4">The tabs below also feature full-width version that can be easily controlled by passing <b>flex-1</b> argument under the <b>tabClassnName</b> prop of the component.</p>
        <div className="w-full flex flex-wrap text-neutral-hovered border border-neutral-regular rounded-curve-xl justify-center px-6 py-8 mb-4">
        <div className="w-full">
            <Tabs
            tabs={section2}
            size="lg"
            style="neutral"
            defaultActive={0}
            onSelect={(id) => setSection2Tab(id)}
            tabClassName="flex-1"
            />
        </div>
        <div className="w-full flex justify-center bg-neutral-primary py-8 mb-4">
            {section2Tab === "tab1" && 
            <div> 
                Product Overview will be displayed here.
            </div>}
            {section2Tab === "tab2" && 
            <div> 
                Product Specifications.
            </div>}
            {section2Tab === "tab3" && 
            <div>
                Users reviews about the product.
            </div>}
            {section2Tab === "tab4" &&
            <div>
                Manufacturers and Suppliers of the product.
            </div>}
            {section2Tab === "tab5" && 
            <div>
                User Guides & Manuals.
            </div>}
        </div>
        </div>
        </div>
    </div>
  );
}
import { useState } from "react";
import Input from '../components/input'

import SearchIcon from '../icons/Search-Outline.svg?react';
import WarningIcon from '../icons/Warning-Outline.svg?react';

export default function InputDemo() {

  return (
    <div className="flex justify-center items-center mb-4 flex-wrap text-neutral-hovered">
        <div className="w-full flex justify-center items-center gap-2 flex-wrap">
            <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2 mb-4">Tabs Component</h1>
            <p className="w-full h-min text-body-md text-neutral-hovered font-normal">The DezineCrafts Tabs component is a horizontally stacked, lightweight navigation UI designed for segmenting and switching between different content views—all without reloading the page. Built with Tailwind CSS utility classes and React state logic, it delivers an accessible, flexible tab-switching experience while remaining highly customizable for product, dashboard, or documentation use cases.</p>
            <div className="w-full flex flex-col justify-center mx-auto py-4 space-y-6">
                <Input
                id="search"
                label="Search"
                size="md"
                shape="rounded"
                iconLeft={SearchIcon}
                placeholder="Search something..."
                hint="Type at least 3 characters."
                />
                <Input
                id="feedback"
                label="Feedback"
                size="sm"
                shape="rounded"
                multiline
                rows={4}
                placeholder="Write your thoughts here..."
                className="max-w-md"
                />
                <Input
                id="email"
                label="Email"
                size="md"
                shape="rounded"
                iconRight={WarningIcon}
                placeholder="example@email.com"
                error="Invalid email address."
                />
            </div>
        </div>
    </div>
  );
}
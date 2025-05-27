// src/components/content.jsx
import ButtonDemo from './pages/button-demo';

const componentMap = {
  button: ButtonDemo,
  // Add other components here as needed
};

export default function Content({ selectedPage }) {
    const ComponentToRender = componentMap[selectedPage] || (() => <div>Select a component to view its demo.</div>);
  return (
    <main className="flex-1 mb-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{selectedPage}</h1>
      <p className="text-base text-black-700 mb-4">
        {`Here you'll find examples and usage for the "${selectedPage}" component from the UI kit.`}
      </p>

      {/* Dynamically load component previews here based on selection */}
      {/* Example static placeholder: */}
      <div className="bg-white-50 p-4 rounded-lg">
        <ComponentToRender />
        <p className="text-black-600">Component preview goes here.</p>
      </div>
    </main>
  );
}
import { useEffect, useRef, useState } from 'react';

const CircularPath = ({ items = [] }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef();
  const angleRef = useRef(0);
  const requestRef = useRef();

  // Animation loop
  const animate = () => {
    if (!isPaused) {
      angleRef.current += 0.005;
      if (angleRef.current > Math.PI * 2) angleRef.current = 0;
    }
    updatePositions();
    requestRef.current = requestAnimationFrame(animate);
  };

  // Calculate positions of small circles
  const updatePositions = () => {
    if (!animationRef.current) return;
    
    const largeCircle = animationRef.current;
    const radius = largeCircle.offsetWidth / 2 - 30; // Adjust for small circle size
    const smallCircles = largeCircle.querySelectorAll('.small-circle');
    
    smallCircles.forEach((circle, index) => {
      if (!items.length) return;
      const angle = angleRef.current + (index * (Math.PI * 2 / items.length));
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      circle.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <div 
        ref={animationRef}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-300"
      >
        {/* Central text display */}
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div className="text-lg font-medium">
            {hoveredItem ? hoveredItem.title : 'Hover a circle'}
          </div>
        </div>

        {/* Small circles */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className="small-circle absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium cursor-pointer transition-all"
            onMouseEnter={() => {
              setIsPaused(true);
              setHoveredItem(item);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredItem(null);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CircularPath;
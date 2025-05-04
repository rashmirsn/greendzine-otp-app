import React, { useRef, useEffect } from 'react';

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Perform actions on the chartRef element, like initializing a chart
      console.log(chartRef.current);  // Example action: log the DOM element
    }
  }, []);  // Empty array means this effect runs once when the component mounts

  return (
    <div ref={chartRef}>
      {/* Your chart content */}
      Chart goes here
    </div>
  );
}

export default ChartComponent;

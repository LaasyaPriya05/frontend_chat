import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  isDarkMode: boolean;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, isDarkMode }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: isDarkMode ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'monospace',
      fontSize: 14,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });
  }, [isDarkMode]);

  useEffect(() => {
    if (elementRef.current && chart) {
      elementRef.current.innerHTML = chart;
      mermaid.init(undefined, elementRef.current);
    }
  }, [chart, isDarkMode]);

  return (
    <div 
      ref={elementRef} 
      className="mermaid-diagram w-full overflow-auto p-4 bg-white dark:bg-gray-800 rounded-lg border"
      style={{ minHeight: '200px' }}
    />
  );
};
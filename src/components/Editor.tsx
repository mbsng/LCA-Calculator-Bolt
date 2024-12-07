import React, { useEffect, useRef } from 'react';
import { createEditor } from '../utils/editor';

export function Editor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let editor: any;
    createEditor(containerRef.current).then(e => {
      editor = e;
    });

    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-[600px] border border-gray-200 rounded-lg bg-white">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
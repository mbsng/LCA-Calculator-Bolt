import React from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';

export const GoalEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        strokeWidth={2}
        stroke="#9333ea"
        strokeDasharray="5,5"
      />
      <foreignObject
        width={100}
        height={40}
        x={labelX - 50}
        y={labelY - 20}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-purple-100 px-2 py-1 rounded text-sm border border-purple-300">
            {data?.targetValue ?? 0}{data?.isPercentage ? '%' : ''}
          </div>
        </div>
      </foreignObject>
    </>
  );
};
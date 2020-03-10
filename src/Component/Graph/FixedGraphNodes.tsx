import React from 'react';
import { FixedNode, WeightedLine } from '../../util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FixedGraphNodes({ graphNodes, graphLines, list }: any): JSX.Element {
  const nodes = graphNodes.map((node: FixedNode) => (
    <g key={node.key}>
      <circle cx={node.x + window.innerWidth / 3} cy={node.y + window.innerHeight / 5} r="30" stroke="black" strokeWidth="1" fill={node.color} key={node.key} />
      <text x={node.x + window.innerWidth / 3} y={node.y + window.innerHeight / 5} textAnchor="middle" stroke="white" dy=".4em" key={`text${node.key}`}>{node.key}</text>
    </g>
  ));
  const nowMin = list.map((minimum: number, i: number) => (
    <text
      x={graphNodes[i].x + window.innerWidth / 3 - 10}
      y={graphNodes[i].y + window.innerHeight / 5 - 40}
      textAnchor="middle"
      stroke="red"
      dy=".1em"
      // eslint-disable-next-line react/no-array-index-key
      key={i}
    >
      {minimum !== 999999 ? minimum : '∞'}
    </text>
  ));
  const lines = graphLines.map((line: WeightedLine) => (
    <g key={line.key}>
      <line
        x1={graphNodes[line.from].x + window.innerWidth / 3}
        y1={graphNodes[line.from].y + window.innerHeight / 5}
        x2={graphNodes[line.to].x + window.innerWidth / 3}
        y2={graphNodes[line.to].y + window.innerHeight / 5}
        style={{
          stroke: line.color,
          strokeWidth: 2,
          zIndex: 1,
        }}
        key={line.key}
        textRendering={line.weight}
      />
      <text
        x={((graphNodes[line.from].x + window.innerWidth / 3)
          + (graphNodes[line.to].x + window.innerWidth / 3)) / 2 + 20}
        y={((graphNodes[line.from].y + window.innerHeight / 5)
          + (graphNodes[line.to].y + window.innerHeight / 5)) / 2 - 20}
        textAnchor="middle"
        stroke="black"
        dy=".4em"
      >
        {line.weight}
      </text>
    </g>
  ));
  return (
    <div>
      <svg height="900" width={window.innerWidth}>
        {lines}
        {nodes}
        {nowMin}
      </svg>
    </div>
  );
}
export default FixedGraphNodes;

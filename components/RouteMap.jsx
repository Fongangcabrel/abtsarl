// Abstract corridor diagram: Kribi & Douala (ports) fanning out to the
// hinterland markets ABT actually serves (Tchad, RCA, Congo). Deliberately
// schematic, not a literal map — echoes the interlaced-line language of the
// ABT icosahedron mark.
export default function RouteMap({ className = '', variant = 'light' }) {
  const line = variant === 'light' ? 'rgba(255,255,255,0.28)' : 'rgba(22,53,105,0.18)';
  const lineStrong = variant === 'light' ? 'rgba(255,255,255,0.55)' : 'rgba(22,53,105,0.35)';
  const node = variant === 'light' ? '#FFFFFF' : '#163569';
  const label = variant === 'light' ? 'rgba(255,255,255,0.85)' : '#3C4657';
  const gold = '#DCB56B';

  const ports = [
    { x: 190, y: 330, label: 'KRIBI' },
    { x: 340, y: 340, label: 'DOUALA' },
  ];
  const inland = [
    { x: 120, y: 90, label: 'TCHAD' },
    { x: 300, y: 55, label: 'RCA' },
    { x: 470, y: 100, label: 'CONGO' },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      role="img"
      aria-label="Corridor logistique ABT reliant Kribi et Douala au Tchad, à la RCA et au Congo"
    >
      {ports.map((p, pi) =>
        inland.map((d, di) => (
          <line
            key={`${pi}-${di}`}
            x1={p.x}
            y1={p.y}
            x2={d.x}
            y2={d.y}
            stroke={line}
            strokeWidth="1"
          />
        ))
      )}
      <line
        x1={ports[0].x}
        y1={ports[0].y}
        x2={ports[1].x}
        y2={ports[1].y}
        stroke={lineStrong}
        strokeWidth="1.5"
      />

      {inland.map((d, i) => (
        <g key={`inland-${i}`}>
          <circle cx={d.x} cy={d.y} r="4" fill={node} opacity="0.85" />
          <text
            x={d.x}
            y={d.y - 12}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.08em"
            fill={label}
          >
            {d.label}
          </text>
        </g>
      ))}

      {ports.map((p, i) => (
        <g key={`port-${i}`}>
          <circle cx={p.x} cy={p.y} r="6" fill={gold} />
          <circle cx={p.x} cy={p.y} r="10" fill="none" stroke={gold} strokeWidth="1" opacity="0.5" />
          <text
            x={p.x}
            y={p.y + 24}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="12"
            letterSpacing="0.08em"
            fontWeight="600"
            fill={label}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

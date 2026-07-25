// Abstract corridor diagram: Kribi & Douala (ports) fanning out to the
// hinterland markets ABT actually serves (Tchad, RCA, Congo). Deliberately
// schematic, not a literal map — echoes the interlaced-line language of the
// ABT icosahedron mark.
//
// `animated` fait tracer les liaisons depuis les ports quand le bloc entre
// à l'écran : le SVG reste statique, c'est le parent <Reveal> qui déclenche
// l'animation via la classe `is-visible` (voir globals.css).
export default function RouteMap({ className = '', variant = 'light', animated = false }) {
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
      className={`${animated ? 'route-animated' : ''} ${className}`.trim()}
      role="img"
      aria-label="Corridor logistique ABT reliant Kribi et Douala au Tchad, à la RCA et au Congo"
    >
      {/* liaison entre les deux ports : tracée en premier */}
      <line
        className="route-line"
        pathLength="1"
        x1={ports[0].x}
        y1={ports[0].y}
        x2={ports[1].x}
        y2={ports[1].y}
        stroke={lineStrong}
        strokeWidth="1.5"
        style={{ '--line-delay': '200ms' }}
      />

      {ports.map((p, pi) =>
        inland.map((d, di) => (
          <line
            key={`${pi}-${di}`}
            className="route-line"
            pathLength="1"
            x1={p.x}
            y1={p.y}
            x2={d.x}
            y2={d.y}
            stroke={line}
            strokeWidth="1"
            style={{ '--line-delay': `${500 + (pi * 3 + di) * 110}ms` }}
          />
        ))
      )}

      {inland.map((d, i) => (
        <g key={`inland-${i}`}>
          <circle
            className="route-node"
            cx={d.x}
            cy={d.y}
            r="4"
            fill={node}
            opacity="0.85"
            style={{ '--node-delay': `${1300 + i * 120}ms` }}
          />
          <text
            className="route-label"
            x={d.x}
            y={d.y - 12}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.08em"
            fill={label}
            style={{ '--node-delay': `${1380 + i * 120}ms` }}
          >
            {d.label}
          </text>
        </g>
      ))}

      {ports.map((p, i) => (
        <g key={`port-${i}`}>
          <circle
            className="route-node"
            cx={p.x}
            cy={p.y}
            r="6"
            fill={gold}
            style={{ '--node-delay': `${i * 140}ms` }}
          />
          <circle
            className="route-node"
            cx={p.x}
            cy={p.y}
            r="10"
            fill="none"
            stroke={gold}
            strokeWidth="1"
            opacity="0.5"
            style={{ '--node-delay': `${120 + i * 140}ms` }}
          />
          <text
            className="route-label"
            x={p.x}
            y={p.y + 24}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="12"
            letterSpacing="0.08em"
            fontWeight="600"
            fill={label}
            style={{ '--node-delay': `${200 + i * 140}ms` }}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

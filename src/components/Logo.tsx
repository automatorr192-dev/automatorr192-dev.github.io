const squares: [number, number][] = [
  [0, 0], [1, 0],
  [2, 1], [3, 1], [4, 1],
  [5, 2], [7, 2],
]

export function Logo() {
  return (
    <svg viewBox="0 0 142.6 30" aria-hidden="true">
      {squares.map(([col, row]) => (
        <rect
          key={`${col}-${row}`}
          x={col * 19.2}
          y={row * 10.9}
          width="8.2"
          height="8.2"
          style={{ animationDelay: `${0.7 + col * 0.035}s` }}
        />
      ))}
    </svg>
  )
}

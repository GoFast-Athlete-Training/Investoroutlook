export default function ProjectionTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-neutral-900 text-slate-200">
            {Object.keys(rows[0]).map((key) => (
              <th key={key} className="px-3 py-2 text-left whitespace-nowrap">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 ? 'bg-neutral-950' : 'bg-neutral-900/50'}>
              {Object.values(row).map((val, i) => (
                <td key={i} className="px-3 py-2 whitespace-nowrap">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



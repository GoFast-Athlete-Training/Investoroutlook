export default function UseOfFundsChart({ items }) {
  const total = items.reduce((sum, i) => sum + i.amount, 0)
  return (
    <div className="space-y-3">
      {items.map((i) => {
        const pct = Math.round((i.amount / total) * 100)
        return (
          <div key={i.label}>
            <div className="flex justify-between text-sm text-slate-300 mb-1">
              <span>{i.label}</span>
              <span>${i.amount.toLocaleString()} · {pct}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded">
              <div className="h-3 rounded bg-indigo-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}



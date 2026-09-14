export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="sticky top-20 h-fit rounded-xl2 border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink">Your Stack</h3>
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 transition hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>
      <p className="mt-1 text-xs text-gray-400">
        {count} {count === 1 ? 'Technology' : 'Technologies'} Selected
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <p className="rounded-lg border border-dashed border-gray-200 py-8 text-center text-sm text-gray-400">
            No technologies added yet. Start exploring and add a few to build your stack!
          </p>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
            >
              <img src={tech.icon} alt={tech.name} className="h-8 w-8 flex-shrink-0 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="flex-shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-gray-200 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  )
}

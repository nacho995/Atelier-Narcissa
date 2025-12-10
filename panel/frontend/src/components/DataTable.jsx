export default function DataTable({ data, columns, onEdit, onDelete }) {
  if (!data.length) {
    return (
      <div className="card text-center py-8 text-brand-500">
        No hay datos para mostrar
      </div>
    );
  }

  return (
    <div className="card overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-brand-100">
            {columns.map(col => (
              <th key={col.key} className="text-left py-3 px-4 text-brand-600 font-medium">
                {col.label}
              </th>
            ))}
            <th className="text-right py-3 px-4 text-brand-600 font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="border-b border-brand-50 hover:bg-brand-50">
              {columns.map(col => (
                <td key={col.key} className="py-3 px-4 text-brand-700">
                  {col.render ? col.render(item[col.key]) : item[col.key]}
                </td>
              ))}
              <td className="py-3 px-4 text-right">
                <button
                  onClick={() => onEdit(item)}
                  className="text-brand-600 hover:text-brand-800 mr-3"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


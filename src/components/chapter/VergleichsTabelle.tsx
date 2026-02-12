interface VergleichsTabelleProps {
  headers: string[];
  rows: string[][];
}

export function VergleichsTabelle({ headers, rows }: VergleichsTabelleProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-teal-600 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-gray-200 dark:border-gray-700 ${
                ri % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${ci === 0 ? "font-medium text-gray-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-300"}`}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

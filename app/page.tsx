
export default function Home() {
  return (
    <main className="bg-gray-800 w-4/5 mx-auto mt-20 p-5 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <div className="text-3xl text-white">Todos</div>
        <button className="bg-blue-500 text-white px-5 py-3 text-xl rounded-xl">
          Add Todo</button>
      </div>
      <div className="mt-5">
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-blue-900">
            <tr>
              <th className="text center py-3 border border-gray-500 text-lg">
                Done
              </th>
              <th className="text center py-3 border border-gray-500 text-lg">
                Task
              </th>
              <th className="text center py-3 border border-gray-500 text-lg">
                Edit
              </th>
              <th className="text center py-3 border border-gray-500 text-lg">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center odd:bg-gray-700 even:bg-gray-600">
              <td className="py-3 border border-gray-500">
                <button>
                  <div className="w-4 h-4 cursor-pointer border border-white rounded-sm"></div>
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                pay the bill
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Edit
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center odd:bg-gray-700 even:bg-gray-600">
              <td className="py-3 border border-gray-500">
                <button>
                  <div className="w-4 h-4 cursor-pointer border border-white rounded-sm"></div>
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                pay the bill
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Edit
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center odd:bg-gray-700 even:bg-gray-600">
              <td className="py-3 border border-gray-500">
                <button>
                  <div className="w-4 h-4 cursor-pointer border border-white rounded-sm"></div>
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                pay the bill
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Edit
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center odd:bg-gray-700 even:bg-gray-600">
              <td className="py-3 border border-gray-500">
                <button>
                  <div className="w-4 h-4 cursor-pointer border border-white rounded-sm"></div>
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                pay the bill
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Edit
                </button>
              </td>
              <td className="py-3 border border-gray-500">
                <button>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
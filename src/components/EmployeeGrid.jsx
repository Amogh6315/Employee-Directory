export default function EmployeeGrid({ employees, onViewHierarchy }) {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center"
        >
          <img
            src={emp.photo}
            alt={emp.name}
            className="w-24 h-24 mx-auto rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold dark:text-white">{emp.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{emp.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {emp.department}
          </p>
          <button
            onClick={() => onViewHierarchy(emp.id)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
          >
            View Hierarchy
          </button>
        </div>
      ))}
    </div>
  );
}

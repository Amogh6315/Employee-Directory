// src/components/EmployeeCard.jsx
export default function EmployeeCard({ employee, compact, large, onViewHierarchy, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(employee.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm flex items-center justify-between px-4 py-3 cursor-${onClick ? 'pointer' : 'default'} ${
        large ? "h-28 w-80" : compact ? "h-20 w-64" : "h-24 w-72"
      }`}
    >
      <div>
        <h4 className="text-sm font-semibold dark:text-white">{employee.name}</h4>
        <p className="text-xs text-gray-500">{employee.title}</p>
        
        {onViewHierarchy && !compact && !large && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewHierarchy(employee.id);
            }}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
          >
            View Hierarchy
          </button>
        )}
      </div>
      <img
        src={employee.photo}
        alt={employee.name}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>
  );
}

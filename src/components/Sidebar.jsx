import { IoMdClose } from "react-icons/io";

export default function Sidebar({ selectedDepartment, onSelectDepartment, sidebarOpen, setSidebarOpen }) {
  const departments = ["All", "Engineering", "Design", "HR", "Marketing", "Sales"];

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-100 dark:bg-gray-900 shadow-lg overflow-y-auto z-40 transition-all duration-300 
      ${sidebarOpen ? "w-64" : "w-0"}`}
    >
      {sidebarOpen && (
        <div className="p-4 relative">
          {/* Close button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <IoMdClose size={20} className="text-black dark:text-white" />
          </button>

          <h2 className="text-2xl font-bold mb-4 cursor-default dark:text-white">
            Departments
          </h2>

          <ul className="space-y-2 mt-10">
            {departments.map((dept) => {
              const isSelected = selectedDepartment === dept;
              return (
                <li
                  key={dept}
                  onClick={() => onSelectDepartment(dept)}
                  className={`cursor-pointer px-3 py-2 rounded transition-colors ${
                    isSelected
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {dept}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

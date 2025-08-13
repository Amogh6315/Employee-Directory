import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EmployeeGrid from "../components/EmployeeGrid";
import EmployeeCard from "../components/EmployeeCard";
import employeesData from "../data/employees.json";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setEmployees(employeesData);
    setFilteredEmployees(employeesData);
  }, []);

  useEffect(() => {
    let filtered = employees;
    if (selectedDepartment !== "All") {
      filtered = filtered.filter(
        (emp) => emp.department === selectedDepartment
      );
    }
    if (searchQuery.trim() !== "") {
      const lower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (emp) =>
          emp.name.toLowerCase().includes(lower) ||
          emp.department.toLowerCase().includes(lower)
      );
    }
    setFilteredEmployees(filtered);
  }, [employees, searchQuery, selectedDepartment]);

  const getEmployeeById = (id) => employees.find((emp) => emp.id === id);

  const getManagerChain = (employee) => {
    const chain = [];
    let current = employee;
    while (current && current.managerId) {
      const manager = getEmployeeById(current.managerId);
      if (manager) {
        chain.unshift(manager);
        current = manager;
      } else {
        break;
      }
    }
    return chain;
  };

  const getDirectReports = (employeeId) => {
    return employees.filter((emp) => emp.managerId === employeeId);
  };

  const handleViewHierarchy = (employeeId) => {
    const emp = getEmployeeById(employeeId);
    if (emp) {
      setSelectedEmployee(emp);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`relative transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar
          selectedDepartment={selectedDepartment}
          onSelectDepartment={setSelectedDepartment}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Close button inside sidebar */}
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute cursor-pointer top-4 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            <IoMdClose size={20} className="text-black dark:text-white" />
          </button>
        )}
      </div>

      {/* Hamburger button (only when sidebar is closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer p-2 m-2 rounded-md shadow fixed left-6 top-7 z-50"
        >
          <FiMenu size={20} />
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1">
          <Header onSearch={setSearchQuery} />
          <EmployeeGrid
            employees={filteredEmployees}
            onViewHierarchy={handleViewHierarchy}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-auto min-w-[60vw]">
            <button
              onClick={closeModal}
              className="sticky top-2 right-2 ml-auto block bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              {getManagerChain(selectedEmployee).length > 0 && (
                <div className="flex flex-col items-center mb-4">
                  {getManagerChain(selectedEmployee).map((manager) => (
                    <div
                      key={manager.id}
                      className="flex flex-col items-center"
                    >
                      <EmployeeCard
                        employee={manager}
                        compact
                        onClick={handleViewHierarchy}
                      />
                      <div className="w-px bg-gray-400 h-6"></div>
                    </div>
                  ))}
                </div>
              )}

              <div className="relative border-2 border-blue-500 rounded-lg">
                <EmployeeCard employee={selectedEmployee} large />
              </div>

              {getDirectReports(selectedEmployee.id).length > 0 && (
                <>
                  <div className="w-px bg-gray-400 h-6"></div>
                  <div className="border border-gray-300 rounded-lg p-4 mt-2 bg-gray-50 dark:bg-gray-700">
                    <h4 className="text-sm font-semibold mb-3 dark:text-white">
                      Works with
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4">
                      {getDirectReports(selectedEmployee.id).map((rep) => (
                        <EmployeeCard
                          key={rep.id}
                          employee={rep}
                          compact
                          onClick={handleViewHierarchy}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

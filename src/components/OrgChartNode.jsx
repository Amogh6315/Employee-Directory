import React from "react";

const OrgChartNode = ({ employee }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Employee Card */}
      <div className="bg-[#f3f2f1] dark:bg-[#201f1e] border border-gray-300 dark:border-gray-700 rounded-lg shadow p-3 w-48 text-center">
        <img
          src={employee.photo}
          alt={employee.name}
          className="w-14 h-14 rounded-full mx-auto mb-2 object-cover"
        />
        <h4 className="text-sm font-semibold dark:text-white">{employee.name}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-300">{employee.title}</p>
      </div>

      {/* Connector lines */}
      {employee.reports && employee.reports.length > 0 && (
        <>
          {/* Vertical line from parent to horizontal */}
          <div className="w-px bg-gray-400 dark:bg-gray-500 h-4"></div>

          {/* Horizontal line connecting children */}
          <div className="flex items-center">
            {employee.reports.map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="w-px bg-gray-400 dark:bg-gray-500 h-4"></div>
                {idx < employee.reports.length - 1 && (
                  <div className="w-12 h-px bg-gray-400 dark:bg-gray-500"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Child nodes with vertical lines */}
          <div className="flex">
            {employee.reports.map((child, idx) => (
              <div key={idx} className="flex flex-col items-center mx-6">
                <div className="w-px bg-gray-400 dark:bg-gray-500 h-4"></div>
                <OrgChartNode employee={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OrgChartNode;

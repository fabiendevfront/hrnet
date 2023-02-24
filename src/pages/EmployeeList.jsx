import EmployeeTable from "../components/EmployeeTable";

const EmployeeList = () => {
    return (
        <div className="employee-list">
            <h2 className="employee-list__title">Current Employees</h2>
            <div className="employee-list__content">
                <EmployeeTable />
            </div>
        </div>
    );
};

export default EmployeeList;
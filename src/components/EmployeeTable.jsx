import { useEmployee } from "../hook/useEmployee";
import DataTable from "react-data-table-component";
import { tableColumns } from "../business/tools";

const EmployeeTable = () => {
    const { employees } = useEmployee();

    return (
        <div className="employee-table">
            <DataTable
                columns={tableColumns}
                data={employees}
                responsive
                striped
                highlightOnHover
                pagination
                theme="solarized"
            />
        </div>
    );
};

export default EmployeeTable;
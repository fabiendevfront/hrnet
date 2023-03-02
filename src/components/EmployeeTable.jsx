import { useState, useEffect } from "react";
import { useEmployee } from "../hook/useEmployee";
import DataTable from "react-data-table-component";
import { tableColumns, searchEmployees } from "../business/tools";
import Search from "./Search";

const EmployeeTable = () => {
    const [search, setSearch] = useState("");
    const { employees } = useEmployee();
    const [displayedEmployees, setDisplayedEmployees] = useState(employees);

    useEffect(() => {
        setDisplayedEmployees(employees);
    }, [employees]);

    const filteredEployees = searchEmployees(displayedEmployees, search);

    const newSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="employee-table">
            <Search
                label="Search"
                onChange={newSearch}
                customStyle="search search--table"
            />
            <DataTable
                columns={tableColumns}
                data={filteredEployees}
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
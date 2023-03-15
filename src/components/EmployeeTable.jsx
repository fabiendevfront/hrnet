import { useState } from "react";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import DataTable from "react-data-table-component";
import { tableColumns } from "../data/tableColumns";
import { searchEmployees } from "../business/tools";
import Search from "./Search";

/**
* Component for Employee Table
* @component
* @returns {JSX.Element}
*/
const EmployeeTable = () => {
    const [search, setSearch] = useState("");

    // Use "EmployeeContext" to access "employee" data through the component
    const { employees } = useContext(EmployeeContext);

    // Call function searchEmployees() with `employees` and `search` params to filter the `employees` data
    const filteredEployees = searchEmployees(employees, search);

    /**
    * Updates the search status with the value enter by user
    * @param {Object} e - Input change event
    */
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
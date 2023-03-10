import { useState } from "react";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import DataTable from "react-data-table-component";
import { tableColumns } from "../data/tableColumns";
import { searchEmployees } from "../business/tools";
import Search from "./Search";

const EmployeeTable = () => {
    const [search, setSearch] = useState("");
    const { employees } = useContext(EmployeeContext);

    const filteredEployees = searchEmployees(employees, search);

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
import { format } from "date-fns";

// Format date for datepicker
export const formatDate = (date) => {
    const reformattedDate = format(new Date(date), "MM-dd-yyyy");
    return reformattedDate;
};

// Format data submit on form
export const formatSubmitData = (data) => {
    const formatedData = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: formatDate(data.birthdate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zip: data.zip,
        start: formatDate(data.start),
        department: data.department.label
    };

    return formatedData;
};


// Columns for employee table
export const tableColumns = [
    {
        name: "FirstName",
        selector: (row) => row.firstname,
        sortable: true,
        minWidth: "128px"
    },
    {
        name: "LastName",
        selector: (row) => row.lastname,
        sortable: true,
        minWidth: "126px"
    },
    {
        name: "Start Date",
        selector: (row) => row.start,
        sortable: true,
        minWidth: "126px"
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        minWidth: "145px"
    },
    {
        name: "Birth",
        selector: (row) => row.birthdate,
        sortable: true,
        minWidth: "110px"
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        minWidth: "179px"
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
        minWidth: "120px"
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        minWidth: "90px"
    },
    {
        name: "Zip",
        selector: (row) => row.zip,
        sortable: true,
        minWidth: "80px"
    },
];

// Search function for employee table
export const searchEmployees = (employees, search) => {
    console.log(employees);
    console.log(search);

    if (!search) {
        return employees;
    }

    const employeesFiltered = employees.filter((employee) => {
        const employeeValues = [
            employee.firstname.toLowerCase(),
            employee.lastname.toLowerCase(),
            employee.start.toLowerCase(),
            employee.department.toLowerCase(),
            employee.birthdate.toLowerCase(),
            employee.street.toLowerCase(),
            employee.city.toLowerCase(),
            employee.state.toLowerCase(),
            employee.zip.toString(),
        ];

        return employeeValues.some((value) => value.includes(search.toLowerCase()));
    });

    return employeesFiltered;
};
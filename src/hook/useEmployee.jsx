import { useState, useEffect } from "react";
import { mockEmployees } from "../data/mockEmployees";

export const useEmployee = () => {
    const [ employees, setEmployee ] = useState([]);

    useEffect (() => {
        setEmployee(mockEmployees);
    }, []);

    const addEmployee = (employee) => {
        const newListEmployees = [...employees];
        newListEmployees.push(employee);
        setEmployee(newListEmployees);
    };

    return {employees, addEmployee};
};
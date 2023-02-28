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
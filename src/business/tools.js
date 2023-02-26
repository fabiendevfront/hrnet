import { format } from "date-fns";

// Format date for datepicker
export const formatDate = (date) => {
    const reformattedDate = format(new Date(date), "MM-dd-yyyy");
    return reformattedDate;
};
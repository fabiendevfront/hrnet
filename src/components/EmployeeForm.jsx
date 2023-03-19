import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useForm, Controller } from "react-hook-form";
import { formatSubmitData } from "../business/tools";
import ReactModalComponent from "@fabiendev/react-modal-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { states } from "../data/states";
import { departments } from "../data/departments";

/**
* Component for Employee Form
* @component
* @returns {JSX.Element}
*/
const EmployeeForm = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [msgModal, setMsgModal] = useState("");

    // Form handling functions and properties of useForm() hook of react-hook-form
    const { handleSubmit, register, setValue, control, formState: { errors }, reset } = useForm();

    // Use "EmployeeContext" to access "addEmployee" function through the component
    const { addEmployee } = useContext(EmployeeContext);

    // Toggle for display the modal
    const toggleModal = () => setDisplayModal(!displayModal);

    /**
    * This function call from an EmployeeContext, and use addEmployee function from that context to add the new employee to the table
    * @param {Object} data - New Employee data to add to the table.
    */
    const addNewEmployee = (data) => {
        const newEmployee = formatSubmitData(data);
        const { firstname, lastname } = newEmployee;
        addEmployee(newEmployee);
        toggleModal();
        setMsgModal(`The new employee ${firstname} ${lastname} has been added successfully !`);
        reset();
        setValue("state", "");
        setValue("department", "");
    };

    return (
        <div className="employee-form">
            <form className="employee-form__form" onSubmit={handleSubmit(addNewEmployee)}>
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Informations</h3>
                    <div className="employee-form__group">
                        <label htmlFor="firstname" className="employee-form__label">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            className={errors.firstname ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                            {...register(
                                "firstname",
                                {
                                    required: true,
                                    pattern: /^[\p{L}]{2,25}$/ui
                                }
                            )}
                        />
                        {errors.firstname && (
                            <p className="employee-form__error">Firstname entered is incorrect</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="lastname" className="employee-form__label">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            className={errors.lastname ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                            {...register(
                                "lastname",
                                {
                                    required: true,
                                    pattern: /^[\p{L}]{2,25}$/ui
                                }
                            )}
                        />
                        {errors.lastname && (
                            <p className="employee-form__error">Lastname entered is incorrect</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="birth" className="employee-form__label">Date of birth</label>
                        <Controller
                            control={control}
                            name="birthdate"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    id="birthdate"
                                    className={errors.birthdate ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                                    selected={value}
                                    onChange={onChange}
                                    placeholderText="Choose a date..."
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            )}
                            rules={{ required: true }}
                        />
                        {errors.birthdate && (
                            <p className="employee-form__error">Birthdate is required</p>
                        )}
                    </div>
                </div>
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Address</h3>
                    <div className="employee-form__group">
                        <label htmlFor="street" className="employee-form__label">Street</label>
                        <input
                            type="text"
                            id="street"
                            className={errors.street ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                            {...register(
                                "street",
                                {
                                    required: true,
                                    pattern: /^[\p{L}\s\d]{2,25}$/ui
                                }
                            )}
                        />
                        {errors.street && (
                            <p className="employee-form__error">Street entered is incorrect</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="city" className="employee-form__label">City</label>
                        <input
                            type="text"
                            id="city"
                            className={errors.city ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                            {...register(
                                "city",
                                {
                                    required: true,
                                    pattern: /^[\p{L}]{2,25}$/ui
                                }
                            )}
                        />
                        {errors.city && (
                            <p className="employee-form__error">City entered is incorrect</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <Controller
                            name="state"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label htmlFor="state" id="state" className="employee-form__label">State</label>
                                    <Select
                                        options={states}
                                        onChange={onChange}
                                        value={value}
                                        placeholder="Select a state..."
                                        className={errors.state ? "react-select react-select--error" : "react-select"}
                                        classNamePrefix="react-select"
                                        aria-labelledby="state"
                                    />
                                </>
                            )}
                            rules={{ required: true }}
                        />
                        {errors.state && (
                            <p className="employee-form__error">State is required</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="zip" className="employee-form__label">Zip Code</label>
                        <input
                            type="number"
                            id="zip"
                            className={errors.zip ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                            {...register(
                                "zip",
                                { required: true }
                            )}
                        />
                        {errors.zip && (
                            <p className="employee-form__error">ZIP code is required</p>
                        )}
                    </div>
                </div>
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Work status</h3>
                    <div className="employee-form__group">
                        <label htmlFor="start" className="employee-form__label">Start Date</label>
                        <Controller
                            control={control}
                            name="start"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    id="start"
                                    className={errors.start ? "employee-form__input employee-form__input--error" : "employee-form__input"}
                                    selected={value}
                                    onChange={onChange}
                                    placeholderText="Choose a date..."
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            )}
                            rules={{ required: true }}
                        />
                        {errors.start && (
                            <p className="employee-form__error">Start date is required</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <Controller
                            name="department"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label htmlFor="department" id="department" className="employee-form__label">Department</label>
                                    <Select
                                        options={departments}
                                        onChange={onChange}
                                        value={value}
                                        placeholder="Select a department..."
                                        className={errors.state ? "react-select react-select--error" : "react-select"}
                                        classNamePrefix="react-select"
                                        aria-labelledby="department"
                                    />
                                </>
                            )}
                            rules={{ required: true }}
                        />
                        {errors.department && (
                            <p className="employee-form__error">Department is required</p>
                        )}
                    </div>
                </div>
                <button className="btn">Save</button>
            </form>
            {displayModal &&
                <ReactModalComponent
                    hideModal={toggleModal}
                    title="Success !"
                    modalSize="medium"
                >
                    <p className="employee-form__modal-txt">{msgModal}</p>
                </ReactModalComponent>
            }
        </div>
    );
};

export default EmployeeForm;
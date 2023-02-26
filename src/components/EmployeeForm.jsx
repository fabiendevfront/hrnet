import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { formatDate } from "../business/tools";

const EmployeeForm = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm();

    const addEmployee = (data) => {
        console.log(formatDate(data.birthdate));
        console.log(formatDate(data.start));
    };

    return (
        <div className="employee-form">
            <form className="employee-form__form" onSubmit={handleSubmit(addEmployee)}>
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
                                { required: true },
                                { pattern: /^[\p{L}]{2,25}$/ui }
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
                                { required: true },
                                { pattern: /^[\p{L}]{2,25}$/ui }
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
                                { required: true },
                                { pattern: /^[\p{L}\s\d]{2,25}$/ui }
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
                                { required: true },
                                { pattern: /^[\p{L}]{2,25}$/ui }
                            )}
                        />
                        {errors.city && (
                            <p className="employee-form__error">City entered is incorrect</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="state" className="employee-form__label">State</label>
                        <input type="text" id="state" className="employee-form__input" />
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
                                />
                            )}
                            rules={{ required: true }}
                        />
                        {errors.start && (
                            <p className="employee-form__error">Start date is required</p>
                        )}
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="department" className="employee-form__label">Department</label>
                        <input type="text" id="department" className="employee-form__input" />
                    </div>
                </div>
                <button className="btn">Save</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
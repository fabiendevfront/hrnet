import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeForm = () => {
    return (
        <div className="employee-form">
            <form className="employee-form__form">
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Informations</h3>
                    <div className="employee-form__group">
                        <label htmlFor="firstname" className="employee-form__label">First Name</label>
                        <input type="text" id="firstname" className="employee-form__input" />
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="lastname" className="employee-form__label">Last Name</label>
                        <input type="text" id="lastname" className="employee-form__input" />
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="birth" className="employee-form__label">Date of birth</label>
                        <DatePicker
                            id="birthdate"
                            className="employee-form__input"
                        />
                    </div>
                </div>
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Address</h3>
                    <div className="employee-form__group">
                        <label htmlFor="street" className="employee-form__label">Street</label>
                        <input type="text" id="street" className="employee-form__input" />
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="city" className="employee-form__label">City</label>
                        <input type="text" id="city" className="employee-form__input" />
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="state" className="employee-form__label">State</label>
                        <input type="text" id="state" className="employee-form__input" />
                    </div>
                    <div className="employee-form__group">
                        <label htmlFor="zip" className="employee-form__label">Zip Code</label>
                        <input type="number" id="zip" className="employee-form__input" />
                    </div>
                </div>
                <div className="employee-form__container">
                    <h3 className="employee-form__title">Work status</h3>
                    <div className="employee-form__group">
                        <label htmlFor="start" className="employee-form__label">Start Date</label>
                        <DatePicker
                            id="start"
                            className="employee-form__input"
                        />
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
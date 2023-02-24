import EmployeeForm from "../components/EmployeeForm";

const CreateEmployee = () => {
    return (
        <div className="create-employee">
            <h2 className="create-employee__title">Create Employee</h2>
            <div className="create-employee__content">
                <EmployeeForm />
            </div>
        </div>
    );
};

export default CreateEmployee;
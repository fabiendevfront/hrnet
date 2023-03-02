import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter.jsx";
import { EmployeeContext } from "./context/EmployeeContext";
import { useEmployee } from "./hook/useEmployee";


/**
 * The App component returns JSX element that renders Layout component which contains an AppRouter component.
 * @component
 * @returns {JSX.Element}
 */
const App = () => {
    const employeeHook = useEmployee();

    return (
        <div className="app">
            <EmployeeContext.Provider value={employeeHook}>
                <Layout>
                    <AppRouter />
                </Layout>
            </EmployeeContext.Provider>
        </div>
    );
};

export default App;

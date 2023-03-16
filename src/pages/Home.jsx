import LinkButton from "../components/LinkButton";

/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const Home = () => {
    return (
        <div className="home">
            <div className="home__cta">
                <h2 className="home__title">Welcome to HRnet</h2>
                <p className="home__subtitle">Create or view your employees</p>
                <div className="home__btn">
                    <LinkButton btnLink="/create-employee" btnStyle="btn btn--home" label="Start to create" />
                    <LinkButton btnLink="/employee-list" btnStyle="btn btn--home" label="View your list" />
                </div>
            </div>
        </div>
    );
};

export default Home;
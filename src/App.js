import './App.scss';
import Form from "./components/Form";
import {connect} from "react-redux";


function App({name, names, deleteName}) {
    return (
        <div>
            <Form
                names={names}
                name={name}
                deleteName={deleteName}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.name,
    names: state.names,
    deleteName: state.deleteName

})

export default connect(mapStateToProps)(App);

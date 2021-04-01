import './App.scss';
import Form from "./components/Form";
import {connect} from "react-redux";
import Notes from "./components/Notes"

function App({name, names}) {
   
    return (
        <div>
            <Form
                names={names}
                name={name}
            />
            < Notes />
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.name,
    names: state.names
})

export default connect(mapStateToProps)(App);

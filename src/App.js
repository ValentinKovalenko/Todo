import './App.css';
import Form from "./components/Form";
import {connect} from "react-redux";


function App({name, names, addSplice}) {
    return (
        <div>
            <Form
                names={names}
                name={name}
                addSplice={addSplice}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.name,
    names: state.names,
    addSplice: state.addSplice

})

export default connect(mapStateToProps)(App);

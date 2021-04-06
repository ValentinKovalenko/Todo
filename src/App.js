import React from "react";
import "./App.scss";
import Form from "./components/Form";
import { connect } from "react-redux";
import Notes from "./components/Notes";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function App({ name, names }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" >
          <Box display="flex" justifyContent="center" color="">
            <div>
              <Form names={names} name={name} />
              <Notes />
            </div>
          </Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  names: state.names,
});

export default connect(mapStateToProps)(App);

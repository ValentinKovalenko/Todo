import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { addNames, handleSelect } from "../action/customers";
import { connect } from "react-redux";

const Form = ({ name }) => {
  return (
    <div>
      <form>
        <TextField
          name="name"
          type="text"
          variant="outlined"
          style={{ marginTop: 10, marginLeft: 10 }}
          placeholder="Enter name"
          onChange={handleSelect}
          value={name}
        />
        <Button
          style={{ marginTop: 15, marginLeft: 10 }}
          variant="contained"
          size="large"
          color="primary"
          onClick={addNames}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  names: state.names,
});

export default connect(mapStateToProps)(Form);

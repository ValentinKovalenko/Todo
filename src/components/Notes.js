import React from "react";
import { Button, List, ListItemText, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { connect } from "react-redux";
import { nameDel } from "../action/customers";
import { useState } from "react";

export const Notes = ({ names, name }) => {
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChunkingChange = (e, index) => {
    let inputNames = [...names];

    if (e.target.value) {
      inputNames[index] = {
        ...inputNames[index],
        name: e.target.value,
      };

      setInputValue(inputNames);
      console.log("new", inputValue);
    }
  };

  return (
    <List style={{ marginLeft: 10 }}>
      {names.map((item, index) => (
        <ListItemText key={index} className="note">
          <TextField
            disabled={disabled}
            id="standard-disabled"
            defaultValue={item.name}
            onChange={(e, i) => handleChunkingChange(e, index)}
          />

          <Button>
            <AccountBalanceWalletIcon />
          </Button>
          <Button className="note1" onClick={() => nameDel(index)}>
            <DeleteIcon color="secondary" type="button" />
          </Button>
          <Button onClick={handleClick}>
            <BorderColorIcon />
          </Button>
        </ListItemText>
      ))}
    </List>
  );
};
const mapStateToProps = (state) => ({
  name: state.name,
  names: state.names,
});

export default connect(mapStateToProps)(Notes);

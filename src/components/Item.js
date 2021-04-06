import React, { useState } from "react";
import { Button, ListItemText, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { setNames, nameDel } from "../action/customers";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

export const Item = ({ item, names, index }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const onClickSave = () => {
    const data = [...names];
    data[index] = {
      ...data[index],
      name: input,
    };
    setNames(data);
    setEdit(false);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickEdit = () => {
    setEdit(true);
    setInput(item.name);
  };

  const onClickDelete = () => {
    nameDel(index);
  };

  const onClickClose = () => {
    setEdit(false);
  };

  return (
    <ListItemText className="note">
      <TextField
        style={{ marginLeft: 5 }}
        disabled={!edit}
        id="standard-disabled"
        value={!edit ? item.name : input}
        onChange={onChangeInput}
      />
      {!edit ? (
        <>
          <Button onClick={onClickEdit}>
            <BorderColorIcon />
          </Button>
          <Button className="note1" onClick={onClickDelete}>
            <DeleteIcon color="secondary" type="button" />
          </Button>
        </>
      ) : (
        <>
          <Button onClick={onClickSave}>
            <SaveIcon color="primary" />
          </Button>
          <Button onClick={onClickClose}>
            <CloseIcon color="secondary" />
          </Button>
        </>
      )}
    </ListItemText>
  );
};

export default Item;

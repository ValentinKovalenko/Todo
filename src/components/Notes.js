import React from "react";
import { List } from "@material-ui/core";
import { connect } from "react-redux";

import Item from "./Item";

export const Notes = ({ names }) => {
  return (
    <List style={{ marginLeft: 0 }}>
      {names.map((item, index) => (
        <Item key={item.id} item={item} index={index} names={names} />
      ))}
    </List>
  );
};
const mapStateToProps = (state) => ({
  names: state.names,
});

export default connect(mapStateToProps)(Notes);

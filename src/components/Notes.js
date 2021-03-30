import React from "react";
import {Button, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {nameDel} from "../action/customers";


export const Notes = ({names, name}) => {

    return (
        <List
            style={{marginLeft: 10}}
        >
            {names.map(name => (
                <ListItemText
                    key={name.id}
                    className='note'
                >
                    {name.title}
                    <Button onClick={nameDel}>
                        <DeleteIcon
                            color="secondary"
                            type='button'
                        />
                    </Button>
                </ListItemText>
            ))}
        </List>
    )
}
const mapStateToProps = state => ({
    name: state.name,
    names: state.names,
    addSplice: state.addSplice


})

export default connect(mapStateToProps)(Notes);
import React, {useEffect} from "react";
import {Button, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {nameDel} from "../action/customers";


export const Notes = ({names, name}) => {


    return (
        <List
            style={{marginLeft: 10}}
        >
            {names.map((item, index) => (
                <ListItemText
                    key={index}
                    className='note'
                >
                    {item.name}
                    <Button
                    className='note1'
                        onClick={()=>nameDel(index)}
                    >
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
    deleteName: state.deleteName
})

export default connect(mapStateToProps)(Notes);
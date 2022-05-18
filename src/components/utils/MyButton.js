import React from 'react';
import Button from '@material-ui/core/button';
import TicketIcon from '../../resources/images/icons/ticket.png';


const MyButton = (props) =>{

    return(

        <Button href={props.link} variant="contained" size={'small'} style={{background: '#c5e17a'}} color="#fff">
        {/*<img src={TicketIcon} alt="button-img" className="IconImage"></img>*/}
        {props.text}
        </Button>
    )
}

export default MyButton;
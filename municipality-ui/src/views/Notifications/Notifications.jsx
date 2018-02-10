import React from 'react';
import {
    Grid
} from 'material-ui';
import {
    AddAlert
} from 'material-ui-icons';

import {
    RegularCard, A, P, Small, Button, SnackbarContent, Snackbar, ItemGrid
} from 'components';

class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tl: false,
            tc: false,
            tr: false,
            bl: false,
            bc: false,
            br: false
        };
    }
    showNotification(place){
        var x = [];
        x[place] = true;
        this.setState(x);
        setTimeout(function(){
            x[place] = false;
            this.setState(x);
        }.bind(this),6000);
    }
    render(){
        return (
            <RegularCard
                cardTitle="Notifications"
                content={
                    <div>
                        <Grid container>
                            <ItemGrid xs={12} sm={12} md={6}>
                                <h5>Notifications Style</h5>
                                <br />
                                <SnackbarContent message={'This is a plain notification'} />
                                <br />
                                <SnackbarContent message={'This is a notification with close button.'} close/>
                                <br />
                                <SnackbarContent
                                    message={"This is a notification with close button and icon."}
                                    close
                                    icon={AddAlert}
                                />
                                <br />
                                <SnackbarContent
                                    message={"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."}
                                    close
                                    icon={AddAlert}
                                />
                                <br />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={12} md={6}>
                                <h5>Notifications States</h5>
                                <br />
                                <SnackbarContent message={'INFO - This is a regular notification made with color="info"'} close color="info"/>
                                <br />
                                <SnackbarContent message={'SUCCESS - This is a regular notification made with color="success"'} close color="success"/>
                                <br />
                                <SnackbarContent message={'WARNING - This is a regular notification made with color="warning"'} close color="warning"/>
                                <br />
                                <SnackbarContent message={'DANGER - This is a regular notification made with color="danger"'} close color="danger"/>
                                <br />
                                <SnackbarContent message={'PRIMARY - This is a regular notification made with color="primary"'} close color="primary"/>
                                <br />
                            </ItemGrid>
                        </Grid>
                        <br />
                        <br />
                    </div>
                }
            />
        );
    }
}

export default Notifications;

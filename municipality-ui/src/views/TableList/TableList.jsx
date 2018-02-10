import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid
} from 'components';

class TableList extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="ByVarsling Table"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['ID','Category','Source','Location', 'Message' , 'Date']}
                                tableData={[
                                    [ "1333456" , "Accident" , "Mobile" , "Kristiansand" , "Car Accident" , "10.02.2018"] ,
                                    [ "1233443" , "Accident" , "Mobile" , "Kristiansand" , "Car Accident" , "10.02.2018"] ,
                                    [ "5345677" , "Some other shit" , "Mobile" , "Kristiansand" , "Traffic Jam" , "10.02.2018"] ,
                                    [ "9876544" , "Emergency" , "Mobile" , "Kristiansand" , "Some man got hearth attack" , "10.02.2018"] ,
                                    [ "8798742" , "Cool ShitSpotting" , "Mobile" , "Kristiansand" , "Must see" , "10.02.2018"] ,
                                    [ "9879064" , "Emergency" , "Mobile" , "Kristiansand" , "Blablabla" , "10.02.2018"]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default TableList;

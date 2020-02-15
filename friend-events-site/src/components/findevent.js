import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class FindEvent extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-2">
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        )
    }
}

export default FindEvent;
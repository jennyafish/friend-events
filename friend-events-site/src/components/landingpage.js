import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://localtvktvi.files.wordpress.com/2019/04/gettyimages-873431730.jpg?quality=85&strip=all&w=400&h=225&crop=1"
                            className="home-img"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://c2.staticflickr.com/6/5001/5275906661_d929e53ee3_b.jpg"
                            className="home-img"

                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
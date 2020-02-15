import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text-abs">
                            <h1>Welcome to Event Pal!</h1>
                        </div>
                        <img 
                            src="https://c2.staticflickr.com/6/5001/5275906661_d929e53ee3_b.jpg"
                            className="home-img"
                        />
                    </Cell>
                    <Cell col={12}>
                        <a href="/findevent" className="banner-text button">Find an event</a>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
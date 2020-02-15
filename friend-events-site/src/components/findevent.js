import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class FindEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};

    }
    toggleCategories(){

        if(this.state.activeTab == 0){
            return(
                <div>
                    <Card shadow={10} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://a2.espncdn.com/combiner/i?img=/photo/2014/0519/nfl_u_heinzts_1296x729.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

                )
        }
    }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Sports</Tab>
                    <Tab>Music</Tab>
                    <Tab>Public Events</Tab>
                    <Tab>Shopping</Tab>
                    <Tab>Movies</Tab>
                    <Tab>Others</Tab>

                </Tabs>
                <Grid className="events-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default FindEvent;
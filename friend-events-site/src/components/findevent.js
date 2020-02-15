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
                <div className="events-grid">
                    <Card shadow={10} style={{maxwidth: '600px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://a2.espncdn.com/combiner/i?img=/photo/2014/0519/nfl_u_heinzts_1296x729.jpg) center / cover'}}>Steeler's Game</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        
                    </Card>

                    <Card shadow={10} style={{minwidth: '600px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://cdn.vox-cdn.com/thumbor/xp8GDdbiMCqNK7x7egYAxkOK--0=/0x0:4008x2652/1200x800/filters:focal%281621x518:2261x1158%29/cdn.vox-cdn.com/uploads/chorus_image/image/61971367/usa_today_11533554.0.jpg) center / cover'}}>UPitt Game</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>

                    </Card>
                    <Card shadow={10} style={{minwidth: '600px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://assets.rbl.ms/14932190/980x.jpg) center / cover'}}>Ice Skating</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                           
                        </CardMenu>
                    </Card>
                </div>

                )
        }

        if(this.state.activeTab == 2){
            return(
                <div className="events-grid">
                    <Card shadow={10} style={{maxwidth: '600px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://www.visitpittsburgh.com/imager/files_idssasp_com/public/C32/1529a01f-6df8-4770-973c-840f62ca26a8/82e4dd84-2143-45aa-a8bb-c2d173c26ece/a35306f0-2266-495c-bb67-5c73b24f52bf_06a96c204074c363c2b2ae6c5709a5a1.jpg) center / cover'}}>Alleggeny Outdoor Show</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                           
                        </CardMenu>
                    </Card>

                   
                </div>

                )
        }

        if(this.state.activeTab == 1){
            return(
                <div className="events-grid">
                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://www.popcultureonline.net/wp-content/uploads/2013/08/Fall-Out-Boy-Concert-Singapore-01.jpg) center / cover'}}>Fall Out Boy</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://media.wmagazine.com/photos/59243691c711f04ad921f407/4:3/w_1536/GettyImages-633746418.jpg) center / cover'}}>Ariana Grande</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://i.pinimg.com/originals/af/6c/a4/af6ca455942324c9244ea1485dc4f496.jpg) center / cover'}}>Shawn Mendes</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>


                </div>

                )

        }

        if(this.state.activeTab == 3){
            return(
                <div className="events-grid">
                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://www.dailydot.com/wp-content/uploads/3a2/14/5e41e5b23dbe4d63e1f2276ee14af4ca.jpg) center / cover'}}>Target</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                           
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://media-cdn.tripadvisor.com/media/photo-s/05/49/d0/33/laurel-park-place.jpg) center / cover'}}>Laural Park Place</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                           
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(http://media.bizj.us/view/img/485091/01jw-waterfront-01*750.jpg) center / cover'}}>Waterfront</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>
                </div>

                )

        }


        if(this.state.activeTab == 4){
            return(
                <div className="events-grid">
                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                            background: 'url(https://www.dvdsreleasedates.com/posters/800/S/Star-Wars-Episode-VIII---The-Last-Jedi-2017-movie-poster.jpg) center / cover'}}>Last Jedi</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://i.ytimg.com/vi/isOGD_7hNIY/maxresdefault.jpg) center / cover'}}>Parasite</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>

                    <Card shadow={10} style={{minwidth: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', 
                        background: 'url(https://i.redd.it/2kca6d7hlbs31.jpg) center / cover'}}>Jumanji 2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Join Event</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            
                        </CardMenu>
                    </Card>
                </div>

                )

        }

        if(this.state.activeTab == 5){
            return(
                <div className="event-text">
                    <h1>Nothing right now, check back later!</h1>
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
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default FindEvent;

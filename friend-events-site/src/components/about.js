import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div>

            <h1 style={{textAlign: 'center', color:'white'}}>About Us</h1>
                <p className="about-us"> We wanted to promote more social interactions and help people venture out into the world by allowing them to meet new friends through common interests! <br/> 
                Event Pal helps people avoid going alone to social events, and also helps to share resource usage and costs (ex. ubers, group ticket discounts). <br/>
                Two of us (Natalie and Katherine) did frontend via create-react-app and YouTube tutorials because we both had no frontend experience. <br/><br/>The other two (Jenny and Albert) did the backend via MongoDb, Express with very little experience in backend, so it was a big learning opportunity for everyone!<br/>
                We were running out of time to link front end and back end, so we were only able to do a few things. <br/>We set up a server and can have user login information stored and we allow users to create a new event, which goes to a database we set up. <br/> We did not get around to having user created events show up on the Find Event page yet, but we will still work on it after the hackathon!
              </p>
            </div>

        )
    }
}

export default About;
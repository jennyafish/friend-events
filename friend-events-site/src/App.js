import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div style={{height: '1000px', position: 'relative'}}>
        <Layout style={{background: 'url(https://media.istockphoto.com/photos/blue-domestic-room-background-picture-id514987530?k=6&m=514987530&s=612x612&w=0&h=b92EYpLKAhCjCfYnYgOFxc8nYreB5vv9qb9tsluyW7Q=) center / cover'}}>
            <Header className="header-color" title="Event Pal" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/findevent">Find Event</Link>
                    <Link to="/trackevent">Track Event</Link>
                    <Link to="/createevent">Create Event</Link>
                    <Link to="/login">Login</Link>
                </Navigation>
            </Header>
            <Drawer title="Event Pal">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/findevent">Find Event</Link>
                    <Link to="/trackevent">Track Event</Link>
                    <Link to="/createevent">Create Event</Link>
                    <Link to="/login">Login</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
 }
}


export default App;

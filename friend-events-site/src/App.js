import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div style={{height: '1000px', position: 'relative'}}>
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
            <Header className="header-color" title="Event Pal" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/findevent">Find Event</Link>
                    <Link to="/trackevent">Track Event</Link>
                    <Link to="/createevent">Create Event</Link>
                </Navigation>
            </Header>
            <Drawer title="Event Pal">
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/findevent">Find Event</Link>
                    <Link to="/trackevent">Track Event</Link>
                    <Link to="/createevent">Create Event</Link>
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

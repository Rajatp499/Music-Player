import React from 'react';
import Navbar from './navBar';
import WebComponent1 from './webComponent1';
import WebComponent2 from './webComponent2';
import WebComponent3 from './webComponent3';
import WebComponent4 from './webComponent4';
import Footer from './footer';
import data from './webComponent3_data';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Docs
import Docs from './Links/Docs';
import Tutorial from './Links/Tutorial';
import Blog from './Links/Blog';
import Community from './Links/Community';




const App=()=>{

    const Error=()=>{
        return <h1>00ps! Page Not Found..</h1>
    }

    return (
        <><BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/">
        <WebComponent1 />
        <WebComponent2 />
        <WebComponent3 title={data[0].title} body={data[0].body} />
        <WebComponent3 title={data[1].title} body={data[1].body} />
        <WebComponent3 title={data[2].title} body={data[2].body} />
        <WebComponent3 title={data[3].title} body={data[3].body} />
        <WebComponent4 />
        <Footer />
        </Route>
        <Route path="/docs" component={Docs} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/blog" component={Blog} />
        <Route path="/community" component={Community} />
        <Route  component={Error} />

        {/* <Route component={Error} /> */}
        </Switch>
        </BrowserRouter>
        </>
    )

}

export default App;
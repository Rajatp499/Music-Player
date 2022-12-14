import React from 'react';
import './webComponent2.css';

const webComponent2=()=>{
    return(
        <>
        <div class="body_2">
        <div className="container1_2">
            <div className="title1_2">Declarative</div><br />
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br />
            Declarative views make your code more predictable and easier to debug.
        </div>
        <div className="container2_2">
        <div className="title2_2">Component-Based</div><br />
        Build encapsulated components that manage their own state, then compose them to make complex UIs.<br />
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        </div>
        <div className="container3_2">
        <div className="title3_2">Learn Once, Write Anywhere</div><br />
        We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.<br />
React can also render on the server using Node and power mobile apps using React Native.
        </div>
        </div>
        <br /><br /><br /><br /><br />
        <hr />
        </>
    )
}

export default webComponent2;
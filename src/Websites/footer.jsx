import React from 'react';
import './footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
const footer=()=>{

    return (
        <>
<div class="body_footer">
<div class="container1_footer">
<FaFacebookSquare className="icon_hexagon_footer"/><span className="inline_footer"> Facebook<br /> Open Source</span><br /> <br />
Copyright © 2021 Facebook Inc.
</div>
    <ul className="container2_ul_footer">
    <li className="list_heading_footer">DOCS</li><br/>

        <li>Installation</li>
        <li>Main Concepts</li>
        <li>Advanced Guides</li>
        <li>API Refrence</li>
        <li>Hooks</li>
        <li>Testing</li>
        <li>Contributing</li>
        <li>FAQ</li>
        <br />
        <br />
        <br />
        <li className="list_heading_footer">COMMUNITY</li><br />
        <li>Code of Conduct</li>
        <li>Community Resources</li>

    </ul>

<ul className="container3_ul_footer">
    <li className="list_heading_footer">CHANNELS</li><br />
    <li>GitHub</li>
    <li>Stack Overflow</li>
    <li>Discuss Forums</li>
    <li>Reactiflux Chat</li>
    <li>DEV Community</li>
    <li>Facebook</li>
    <li>Twitter</li>
    <br />
    <br />
    <br />
    <li className="list_heading_footer">MORE</li><br />
    <li>Tutorial</li>
    <li>Blog</li>
    <li>Acknowledgements</li>
    <li>React Native</li>
    <li>Privacy</li>
    <li>Terms</li>
</ul>
</div>
</>
    )
}

export default footer;
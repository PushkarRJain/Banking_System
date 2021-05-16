import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/WebPay-logos_transparent.png';
/*The problem of <a></a> is that whenever we use it creates a server req and our very logic is to avouid recurring server req and handle it usung js, so instead of a tag we use Link tag, and in Link tag the href is called to.
When you inspect page in chrome, you'll still see <a></a> tag where we have written link tag, the very reason for using link tag is to avoid the defualt behaviuor to give get request to server*/
function navbar() {
return(
  <div>
    <nav class="navbar navbar-custom navbar-expand-lg">
  <Link class="navbar-brand" to="/">
    <img src={Logo} width="100" height="50"/>
  </Link>
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <Link class="nav-link" to="/viewcust">View Cutomers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/transmon">Money Transfer</Link>
      </li>

    </ul>
  </div>
</nav>
  </div>
);
}
export default navbar;
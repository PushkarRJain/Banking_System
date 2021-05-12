import React from "react";
import Logo from '../images/WebPay-logos_transparent.png';

function navbar() {
return(
  <div>
    <nav class="navbar navbar-custom navbar-expand-lg">
  <a class="navbar-brand" href="#">
    <img src={Logo} width="100" height="50"/>
  </a>
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <a class="nav-link" href="#">View Cutomers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Money Transfer</a>
      </li>

    </ul>
  </div>
</nav>
  </div>
);
}
export default navbar;
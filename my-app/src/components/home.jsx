import React from "react";
import Content from './content';
import Img_con from '../images/content_img.png';
import Cards from './cards';
function home_content() {
  return(
    <div class="container">
    <div class="row">
    <div class='col-lg-6 col-sm-12'>
    <Content />
    </div>
    <div class='col-lg-6 col-sm-12'>
    <img class="content_img" src={Img_con}></img>
    </div>
    </div>
    <div class="row">
    <div class='col-lg-12'>
    <p class="def">A banking company is the one which transacts the business of banking which means accepting, for the purpose of lending and investment of deposits of money from the public, repayable on demand or otherwise and withdrawals by cheques, draft, order or otherwise.</p>
    </div>
    </div>
    <Cards/>
    </div>
  )
  
  }
  export default home_content;
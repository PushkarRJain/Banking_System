import React from "react";

function footer() {
  return(
    <div>
      <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Services</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">View Customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Transfer Money</a>
          </li>
                 </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">WebPay</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Contact & Support</span>
          </li>
          <li class="nav-item">
            <span class="nav-link"><i class="fa fa-phone"></i> +91 9860224038</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-comments"></i>Live chat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-envelope"></i> help@webpay.com</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-star"></i> Give feedback</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center"><i class="fa fa-ellipsis-h"></i></div>
    
    <div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">Webpay &copy; 2021 
        </span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
            <i class="fa fa-facebook-f"></i>
          </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/in/pushkar-jain-3280581b0/">
            <i class="fa fa-linkedin"></i>
          </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline quick-links">
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
    );
  }
  export default footer;
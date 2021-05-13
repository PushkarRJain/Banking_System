import React from "react";
import Dp from "../images/Dp.jpg";
function cards() {
  return(
    <div>
    <h1 class="abouth1">About Us</h1>
      <div class="row pb-5 mb-4">
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
         
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="bg-primary px-5 py-4 text-center card-img-top"><img src={Dp} alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"></img>
                        <h5 class="text-white mb-0">Pushkar R. Jain</h5>
                        <p class="small text-white mb-0">CEO</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <small class="text-muted">
                                <a href="https://github.com/PushkarRJain"><i class="fa fa-github mr-1 text-primary"></i></a></small>
                            </li>
                            <li class="list-inline-item">
                               <small class="text-muted"><a href="https://www.linkedin.com/in/pushkar-jain-3280581b0/"><i class="fa fa-linkedin mr-1 text-primary"></i></a></small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
       
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="bg-success px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"></img>
                        <h5 class="text-white mb-0">Enrique West</h5>
                        <p class="small text-white mb-0">CFO</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <small class="text-muted">
                                <a href="#"><i class="fa fa-github mr-1 text-success"></i></a></small>
                            </li>
                            <li class="list-inline-item">
                               <small class="text-muted"><a href="#"><i class="fa fa-linkedin mr-1 text-success"></i></a></small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">

            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="bg-info px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"></img>
                        <h5 class="text-white mb-0">Damien Braun</h5>
                        <p class="small text-white mb-0">Chairman</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <small class="text-muted">
                                <a href="#"><i class="fa fa-github mr-1 text-info"></i></a></small>
                            </li>
                            <li class="list-inline-item">
                               <small class="text-muted"><a href="#"><i class="fa fa-linkedin mr-1 text-info"></i></a></small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
         
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="bg-warning px-5 py-4 text-center card-img-top"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="..." width="100" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"></img>
                        <h5 class="text-white mb-0">Alden Cantrell</h5>
                        <p class="small text-white mb-0">Vice President</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <small class="text-muted">
                                <a href="#"><i class="fa fa-github mr-1 text-warning"></i></a></small>
                            </li>
                            <li class="list-inline-item">
                               <small class="text-muted"><a href="#"><i class="fa fa-linkedin mr-1 text-warning"></i></a></small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  );
}
export default cards;
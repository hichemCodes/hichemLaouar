import React from 'react';
import { Link } from "react-router-dom";

const HireMe = ()=> {
    return (
    <div className="w_full flex a_center d_column footer_section" >
         <div class="start_project flex j_around a_center">
  
            <div class="item flex j_start a_center "><span class="start_title grad_color ">Hire me for a  project</span></div>
                <div class="item flex  j_end a_center">
                <Link to="/contact" class="say_hello letsTalk grad_color">
                    let's talk
                </Link>

                </div>
 
        </div>
        <div class="fotter_information flex j_center a_center d_column">
               <div class="quates_s flex j-start ">
                    <i class="fas fa-quote-left "></i>
               </div>
               <div class="quates flex j_start a_center">
                    <span class="quates ">
                         Any fool can write code that a computer can understand, Good 
                          programmers write code that humans can understand.  
                    </span>
               </div>
                  
                  <span class="auteur"> Martin Fowler  </span>
                  <div class="social_media flex j_cente a_center w_full">
                       <a href="https://github.com/hichemCodes/HichemCodes" class="flex git-a j_cente a_center" target="_blank"> <i class="fab fa-github"></i></a>
                       <a href="www.linkedin.com/in/mohamed-hichem-laouar" class="flex j_cente a_center" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                       
                  </div>
                  <div class="foter_register flex d_column j_center a_center">
                     <span class="rights">© 2022 All Rights Reserved <span class="bolder">| LAOUAR Hichem</span></span> 
                     <span> Made with  <i class="fas fa-heart "></i> in France  </span>
                  </div>
        </div>
    </div>
  );
}

export default HireMe;

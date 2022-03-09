import React from 'react';

const Projects = ()=> {
    return (
    <div className="works flex a_center d_column">
        <span className="work_title grad_color">
               my recent work
        </span>
        <div className="all_project flex j_between a_center">


                  <div className="project" id="hdm">
                      
                      <div className="cover-project">
                          <a href="https://www.hdmnetwork.com/fr" target="_blank" >
                              <i class="fas fa-external-link"></i>  
                          </a>
                               
                      </div>
                  </div>

                  <div className="project" id="unsp">
                      
                      <div className="cover-project">
                          <a href="https://react-unsplash-wallpapers-finder.netlify.app" target="_blank">
                              <i class="fas fa-external-link"></i>  
                          </a>
                          <a href="https://github.com/hichemCodes/react-unsplash-wallpapers-finder" target="_blank">
                              <i class="fab fa-github"></i>  
                          </a>        
                      </div>
                  </div>
                  <div className="project" id="ble">
                      
                      <div className="cover-project">
                        
                          <a href="https://github.com/hichemCodes/BleDZ" target="_blank" >
                              <i class="fab fa-github"></i>  
                          </a>        
                      </div>
                  </div>



               
        </div>
  </div>
  );
}

export default Projects;

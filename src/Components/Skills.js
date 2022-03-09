import React from 'react';

const Skills = ()=> {
    return (
        
        <div className='skills-react'>
            <div class="about_me flex j_center a_center ">
            <div class="w_full about_content_container flex j_center a_center d_column">
                <span class="about_title">Hi, I’m Hichem. Nice to meet you.</span>
            </div>
            </div>

        <div class="skills flex j_start">
                <div class="skill ui flex   a_center d_column">
                    <i class="fas fa-pencil-ruler fa-3x grad_color"></i>
                        <span class="skill_title grad_color">Front-end  </span>
                        <span class="what_skill"></span>
                        <div class="skills_list flex d_column a_center">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Jquery</span>
                            <span>React JS</span>
                        </div>
                </div>
                <div class="skill flex  db a_center d_column">
                <i class="fas fa-laptop-code fa-3x grad_color"></i>
                        <span class="skill_title grad_color">Back-end </span>
                        <span class="what_skill"></span>
                        <div class="skills_list flex d_column a_center">
                            
                            <span>PHP</span>
                            <span>Java</span>
                            
                            <span>Laravel</span>
                            <span>Symfony</span>
                            <span>Node js </span>
                        </div>
                </div>

                <div class="skill flex  db a_center d_column">
                    <i class="fas fa-desktop fa-3x grad_color"></i>
                        <span class="skill_title grad_color">Desktop </span>
                        <span class="what_skill"></span>
                        <div class="skills_list flex d_column a_center">
                            
                            <span>Electron JS</span>
                            <span>JavaFX</span>
                        </div>
                </div>

                <div class="skill flex  db a_center d_column">
                    <i class="fas fa-database fa-3x grad_color"></i>
                        <span class="skill_title grad_color">Database</span>
                        <span class="what_skill"></span>
                        <div class="skills_list flex d_column a_center">
                            
                            <span>SQL</span>
                            <span>SQLite</span>
                            <span>MangoDB</span>
                        </div>
                </div>

                <div class="skill flex  db a_center d_column">
                    <i class="fas fa-tasks fa-3x grad_color"></i>
                        <span class="skill_title grad_color">Project Management</span>
                        <span class="what_skill"></span>
                        <div class="skills_list flex d_column a_center">
                            
                            <span>Agile</span>
                            <span>Scrum</span>
                            <span>Git</span>
                            <span>Github</span>
                            <span>Gitlab</span>
                            <span>Bitbucket</span>
                            <span>Docker</span>


                        </div>
                </div>


                
        </div>
        </div>
        
    );

}

export default Skills;


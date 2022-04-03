import React from 'react';

const Header = ()=> {
    return (
        <div className='header_custum'>
            <div className="pop_down">
                <span className="say_hello grad_color">
                    Say Hello
                </span>
           </div>
           <div className="description flex j_center a_center d_column">
                
                  <span className="title_bold grad_color">
                       Full Stack Web Developer 
                  </span>
                  <span className="title_small grad_color">
                       I design and Code Website 
                  </span>

            </div>
            <div className="avatar flex j_start">
          
            </div>
            

        </div>
 
    );

}

export default Header;
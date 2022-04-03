import { Link } from "react-router-dom";

const Contact = ()=> {

    return (
        <div class="cover flex j-start a_center d_column show_cover">
           <div class="all_def flex j_center a_center d_column">
                     <Link to="/" >
                            <i class="fa-solid fa-xmark"></i>
                     </Link>
                      
                      <span class="reach-out grad_color ">

                         Thanks for taking the time to reach out. <br />
                         How can I help you today?
                    </span>
                    <form action="" class="form_contact flex j_center a_center d_column">

                        <div class="l_item flex j_between column_mob"> 
                            <div class="item flex d_column ">
                                 <label for="name">Name</label>
                                 <input type="text" id="name" />
                            </div>
                        
                            <div class="item flex d_column">
                                <label for="email">Email</label>
                                <input type="text" id="email" />
                            </div>
                        </div>
                        <div class="l_item flex d_column">
                               <label for="msg">Message</label>
                              <textarea id="msg" rows="10"></textarea>
                        </div>
                        <input type="submit" value="Send" id="send" />
                    </form>
          </div>
        </div>
    );

}

export default Contact;
import React from "react";
import navStyles from "./Navbar.module.css";
import SubletLogo from "./SubletLogo";
import Button from "./Button";

const Navbar = (props) => {
  const { joinus } = props;
  return (
    <>
    <header  className={navStyles.navcontainer}>  
   <div className={navStyles.container}>
  <div className={navStyles.innercontainer}>
          <div>
            <SubletLogo />
          </div>
          <div className={navStyles.navigationLink}>
            <nav>
              <ul>
                <li className={navStyles.ctahome}>home</li>
                <li>about</li>
                <li>contact us</li>
              </ul>
            </nav>
          </div>
          <div className={navStyles.logindetails}> 
            <li>sign in</li>
            <Button sign={joinus} className="show">
              join us
            </Button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;
{/* <div className={herostyle.dotted}></div>
  <div>  
<img src="/src/assets/message-online-chat-social-text-concept 1.png" alt="messages"  className={herostyle.imgs}/>
    
  </div> */}
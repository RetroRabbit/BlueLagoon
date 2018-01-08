import React from 'react';
import './index.css';
import logo from '../../../../assets/male1.png';
import logo1 from '../../../../assets/male2.png';
import logo2 from '../../../../assets/female1.png';
import logo3 from '../../../../assets/Male3.png';
import slogo from '../../../../assets/search.png';
import OverflowScrolling from 'react-overflow-scrolling';


class Sidebar extends React.Component {

  constructor(props){
      super(props);
      this.state ={
          users:[
              {name:"Lloyd Jimenez",
              msg:"The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due",
              img:logo},
              {name:"Jeffrey Thomas",
              msg:"When you type the website name on your address bar, a simple yet classy homepage of",
              img:logo1},
              {name:"Catherine Sanders",
              msg:"It is not always possible to jet off half way around the world when you and your significant",
              img:logo2},
              {name:"Terry Gordon",
              msg:"Here, I focus on a range of items and features that we use in life without giving them a second",
              img:logo3},
              {name:"Lloyd Jimenez",
              msg:"The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due",
              img:logo},
              {name:"Jeffrey Thomas",
              msg:"When you type the website name on your address bar, a simple yet classy homepage of",
              img:logo1},
              {name:"Catherine Sanders",
              msg:"It is not always possible to jet off half way around the world when you and your significant",
              img:logo2},
              {name:"Terry Gordon",
              msg:"Here, I focus on a range of items and features that we use in life without giving them a second",
              img:logo3}
            ]
      };
  }
  

  render() {
    return (
        <div className="sidebar">
            <div className="rectangle-4">
                <div className="rectangle-7">
                    <div className="search">
                        <img src={slogo} alt = "slogo" className="fa-search"/>
                        <p>Search Chats</p>
                    </div>
                </div>
                <div className="line"></div> 
                
                <div className="sidebar2 scrollbar" id="style-4">
                 { this.state.users.map(user => <UserChat username={user.name} msg={user.msg} img={user.img}/>) }
                 </div>
            </div>
        </div>
    );
  }

}

function UserChat(props) {
    return (
        <div>
      <div className="rectangle-8">
        <div className="rectangle-5">
            <img src ={props.img} alt ="logo" className="oval-3-copy"/>
            {props.username}  
        </div>
        <div className="the-practice-of-ciga">
                <p>{props.msg}</p>  
        </div>
    </div>
    
    <div className="line"></div> 
    </div>
    
    );
  }

export default Sidebar;
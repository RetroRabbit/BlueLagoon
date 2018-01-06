import React from 'react';
import './index.css';
import logo from '../../../../assets/male1.png';
import logo1 from '../../../../assets/male2.png';
import logo2 from '../../../../assets/female1.png';
import logo3 from '../../../../assets/Male3.png';
import slogo from '../../../../assets/search.png';


class Sidebar extends React.Component {

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
                <div className="rectangle-8">
                    <div className="rectangle-5">
                        <img src ={logo} alt ="logo" className="oval-3-copy"/>
                        Lloyd Jimenez  
                    </div>
                    <div className="the-practice-of-ciga">
                            <p>The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due</p>  
                    </div>
                </div>
                <div className="line"></div>
                <div className="rectangle-8">
                    <div className="rectangle-5">
                        <img src ={logo1} alt ="logo1" className="oval-3-copy"/>
                        Jeffrey Thomas  
                    </div>
                    <div className="the-practice-of-ciga">
                            <p>When you type the website name on your address bar, a simple yet classy homepage of</p>  
                    </div>
                </div>
                <div className="line"></div>
                <div className="rectangle-8">
                    <div className="rectangle-5">
                        <img src ={logo2} alt ="logo2" className="oval-3-copy"/>
                        Catherine Sanders  
                    </div>
                    <div className="the-practice-of-ciga">
                            <p>It is not always possible to jet off half way around the world when you and your significant</p>  
                    </div>
                </div>
                <div className="line"></div> 
                <div className="rectangle-8">
                    <div className="rectangle-5">
                        <img src ={logo3} alt ="logo3" className="oval-3-copy"/>
                        Terry Gordon  
                    </div>
                    <div className="the-practice-of-ciga">
                            <p>Here, I focus on a range of items and features that we use in life without giving them a second</p>  
                    </div>
                </div>
                <div className="line"></div>   
            </div>
        </div>
    );
  }

}

export default Sidebar;
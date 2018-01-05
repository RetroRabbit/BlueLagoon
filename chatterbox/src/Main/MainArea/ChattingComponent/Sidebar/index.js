import React from 'react';
import './index.css';
import logo from '../../../../assets/img_avatar.png';

class Sidebar extends React.Component {

  render() {
    return (
        <div className="sidebar">
            <div className="rectangle-4">
                <div className="rectangle-7">
                </div>
                <div className="rectangle-8">
                    <div className="rectangle-5">
                        <img src ={logo} alt ="logo" className="oval-3-copy"/>  
                    </div>
                    <div className="the-practice-of-ciga">
                            The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due to a reputation as a glamorous alternative to cigarette smoking, the increase can also be tied to its popularity among celebrities, as well as to the social nature of its practice. But whatever the reason, it is clear that cigars are big business in the U.S. with higher sales of premium brands each and every year.
                            Magazines like Cigar Aficionado portray cigar smoking as alluring, and perhaps slightly risqu     
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Sidebar;
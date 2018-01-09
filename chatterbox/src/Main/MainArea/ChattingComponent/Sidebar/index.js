import React from 'react';
import './index.css';
import logo from '../../../../assets/male1.png';
import logo1 from '../../../../assets/male2.png';
import logo2 from '../../../../assets/female1.png';
import logo3 from '../../../../assets/Male3.png';
import slogo from '../../../../assets/search.png';
import UserChat from './userchat';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        //Users are placeholders
        this.state = {
            users: [
                {
                    name: 'Lloyd Jimenez',
                    msg:
                        'The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due',
                    img: logo
                },
                {
                    name: 'Jeffrey Thomas',
                    msg:
                        'When you type the website name on your address bar, a simple yet classy homepage of',
                    img: logo1
                },
                {
                    name: 'Catherine Sanders',
                    msg:
                        'It is not always possible to jet off half way around the world when you and your significant',
                    img: logo2
                },
                {
                    name: 'Siyabonga Gift Ndovela',
                    msg:
                        'Here, I focus on a range of items and features that we use in life without giving them a second',
                    img: logo3
                },
                {
                    name: 'Lloyd Jimenez',
                    msg:
                        'The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due',
                    img: logo
                },
                {
                    name: 'Jeffrey Thomas',
                    msg:
                        'When you type the website name on your address bar, a simple yet classy homepage of',
                    img: logo1
                },
                {
                    name: 'Catherine Sanders',
                    msg:
                        'It is not always possible to jet off half way around the world when you and your significant',
                    img: logo2
                },
                {
                    name: 'Terry Gordon',
                    msg:
                        'Here, I focus on a range of items and features that we use in life without giving them a second',
                    img: logo3
                }
            ]

      };
  }

    render() {
        return (
            <div className="sidebar">
                <div className="outerBox">
                    <div className="searchBox">
                        <div className="search">
                            <input class="searchInput" placeholder="Search Chats" />
                            <img src={slogo} alt="slogo" className="fa-search" />
                        </div>
                    </div>
                    <div className="line" />

                    <div className="sidebar2 scrollbar">
                        {this.state.users.map(user => (
                            <UserChat username={user.name} msg={user.msg} img={user.img} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Sidebar;

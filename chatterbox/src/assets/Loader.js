import React, { Component } from 'react';
import logo from './Icon.png';
let styleSheet = document.styleSheets[document.styleSheets.length - 1];
let animationName = `animation`;
let keyframs = `@-webkit-keyframes ${animationName} {
		0% { -webkit-transform: rotate(0deg);border-color:#f3f3f3;border-top-color:rgb(204,204,204);color:#fff}
		90% { -webkit-transform: rotate(360deg);color:#fff;}
		100% { -webkit-transform: rotate(360deg);}
	}`;
let keyframes = `
	@-webkit-keyframes ${animationName} {
      0% {opacity: 0.0;}
      12.5%{opacity: 0.50;}
      25%{opacity: 1.00;}
      37.5%{opacity: 0.50;}
      50% {opacity: 0.0;}
      62.5%{opacity: 0.50;}
      75%{opacity: 1.0;}
      87.5%{opacity: 0.50;}
      100%{opacity: 0.0;}
     }
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
const style = {
    loader: {
        position: 'absolute',
        zIndex: '1000',
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white'
    },
    image: {
        margin: 'auto',
        width: '85px',
        height: '85px',
        '-webkit-animation': `${animationName} 5s linear infinite`,
        '-moz-animation': `${animationName} 5s linear infinite`,
        '-o-animation': `${animationName} 5s linear infinite`,
        animation: `${animationName} 5s linear infinite`
    },
    imageHolder: {
        margin: 'auto'
    }
};
class Loader extends Component {
    render() {
        return (
            <div style={style.loader} className="Loader">
                <div style={style.imageHolder}>
                    <img style={style.image} alt="none" src={logo} />
                </div>
            </div>
        );
    }
}

export default Loader;

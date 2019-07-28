import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: "",
        };
    }

    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <li id="home-button" className="nav-bar-list-button">{this.renderButton("Home", (this.state.clicked === "Home"))}</li>
                    <li id="contact-button" className="nav-bar-list-button">{this.renderButton("Contact", (this.state.clicked === "Contact"))}</li>
                </ul>
            </div>
        );
    }

    renderButton(name, isClicked) {
        return(
            <NavBarButton
                name={name}
                onClick={() => this.handleClick(name)}
                isClicked = {isClicked}
            />
        );
    }

    handleClick(buttonName) {
        this.setState({
            clicked: buttonName,
        });
    }
}

function NavBarButton(props) {
    let classes = "nav-bar-button";
    if(props.isClicked) {
        classes += " nav-bar-button-active"
    }

    return (
    <button className={classes}  onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default NavBar;
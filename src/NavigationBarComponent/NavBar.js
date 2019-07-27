import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <li>{this.renderButton("Home")}</li>
                    <li>{this.renderButton("Contact")}</li>
                </ul>
            </div>
        );
    }

    renderButton(name) {
        return(
            <NavBarButton
                name={name}
                onClick={() => alert(name)}
            />
        );
    }
}

function NavBarButton(props) {
    return (
        <button className="nav-bar-button" onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default NavBar;
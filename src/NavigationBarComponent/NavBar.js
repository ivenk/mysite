import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                {this.renderButton("Home")}
                {this.renderButton("Contact")}
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
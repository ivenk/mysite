import React, { createRef } from 'react'
import Site from "./Site";

/**
 * SiteManager follows a singleton pattern as outlined here: https://hackernoon.com/managing-react-modals-with-singleton-component-design-5efdd317295b
 * There should always only be one top level SiteManager component with > 2 children of type site
 */
export default class SiteManager extends React.Component {
    constructor(props) {
        super(props);
        SiteManager.__singletonRef = this;

        // Currently active site, seen by the user
        this.state = {
            activeSiteIndex: 0, 
        };

        for (var child in this.props.children) {
            if (this.props.children[child].type !== Site){
                console.log("Please only use Site as child elements for SiteManager!")
            }
        }
    }

    static scrollDown() {
        SiteManager.__singletonRef.__scrollDown();
    }

    static scrollUp() {
        SiteManager.__singletonRef.__scrollUp();
    }

    __scrollDown() {
        console.log("scrollDown called ! Current index : " + this.state.activeSiteIndex);
        console.log("next id : " + this.state.activeSiteIndex);
        console.log("next child : " + this.props.children[1])
        
        console.log(Object.keys(this.props.children[1]))
        console.log(this.props.children[1].ref)
        


  //      let test = this.props.children[1].ref.current;
    }

    __scrollUp() {
        console.log("scrollUp called ! Current index : " + this.state.activeSiteIndex);
    }

    render() {
        return (
            <div className="SiteManager">
                {this.props.children}
            </div>
        )
    }
}
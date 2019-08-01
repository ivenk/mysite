import React from 'react'
import Site from "./Site";

export default class SiteManager extends React.Component {
    constructor(props) {
        super(props);

        for (var child in this.props.children) {
            if (this.props.children[child].type !== Site){
                console.log("Please only use Site as child elements for SiteManager!")
            }
        }
    }
    render() {


        return (
            <div className="SiteManager">
                {this.props.children}
            </div>
        )
    }
}
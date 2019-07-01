import React from 'react';
import './Workspace.css';

class Workspace extends React.Component{
    render(){
        return(
            <div className="Workspace">
             <h3>ACTION CLICK</h3>
             <p>
                <b>Filename</b> {this.props.Filename}
             </p>
             <p>
                <b>Created</b>{this.props.Created}
             </p>
             <p>
                <b>Access</b>{}
             </p>
             <p>
                <b>Modified</b>{}
             </p>
             <p>
                <b>Size</b>{}
             </p>
             <p>
                <b>Mode</b>{}
             </p>
            </div>
        );
    }
}

export default Workspace;
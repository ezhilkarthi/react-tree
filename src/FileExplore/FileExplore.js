import React from 'react';
import {Treebeard} from 'react-treebeard';

import workspace from '../Workspace/Workspace';

import './FileExplore.css';
import Workspace from '../Workspace/Workspace';

const data = { 
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' ,Filename: ' hia',Created: 'cr',Access: 'acc',Modified: 'mod',Size:'sz',Mode: 'mode' },
                { name: 'child2' }
            ]
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
    
};


class FileExplore extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            workspace: [
                {Filename: ""},
                {Created: ""},
                {Access: ""},
                {Modified: ""},
                {Size: ""},
                {Mode: ""}  
            ]
        };
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){
            this.state.cursor.active = false;
        }
        node.active = true;
        if(node.children){
             node.toggled = toggled; 
             
        }else{
            console.log(node.Modified);
            this.state = {
                workspace: [
                    {Filename: node.Filename},
                    {Created: node.Created},
                    {Access: node.Access},
                    {Modified: node.Modified},
                    {Size: node.Size},
                    {Mode: node.Mode}  
                ]
            }
            console.log(this.state);
        }
        
        this.setState({ cursor: node });
    }
    render(){
        return (
            <div className="body">
                <div className="Treebeard">
                    <Treebeard
                        data={data}
                        onToggle={this.onToggle}
                    />
                </div>
                <Workspace name={this.state.workspace[0].Filename}/>
            </div>
        );
    }
}

export default FileExplore;
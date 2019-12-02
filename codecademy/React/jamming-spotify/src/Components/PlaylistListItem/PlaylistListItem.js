import React from 'react';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    render() {
        return(
            <div className="PlaylistItem">
                <div className="PlaylistItem-information">
                    <h3>{this.props.playlist}</h3>
                </div>
            </div>          
        )
    }
}

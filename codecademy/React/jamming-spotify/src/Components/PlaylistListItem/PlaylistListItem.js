import React from 'react';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectPlaylist = this.handleSelectPlaylist.bind(this);
    }
    handleSelectPlaylist () {
        this.props.selectPlaylist(this.props.playlistId, this.props.playlistName);
    }
    render() {
        return(
            <div className="PlaylistItem">
                <div onClick={this.handleSelectPlaylist} className="PlaylistItem-information">
                    <h3 className="PlaylistItem-action">{this.props.playlistName}</h3>
                </div>
            </div>          
        )
    }
}

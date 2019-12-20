import React from 'react';
import PropTypes from 'prop-types';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectPlaylist = this.handleSelectPlaylist.bind(this);
        this.removePlaylist = this.removePlaylist.bind(this);
    }
    handleSelectPlaylist () {
        this.props.selectPlaylist(this.props.playlistId, this.props.playlistName);
    }
    removePlaylist() {
        this.props.onRemovepl(this.props.playlistId, this.playlistName);
    }
    render() {
        return(
            <div className="PlaylistItem">
                <div>
                    <img onClick={this.handleSelectPlaylist} className="PlaylistItem-image" src={this.props.playlistUrl} alt={this.props.playlistName} />
                </div>
                <div onClick={this.handleSelectPlaylist} className="PlaylistItem-information">
                    <h3 className="PlaylistItem-action">{this.props.playlistName}</h3>
                </div>
                <a className="PlaylistItem-action">
                    <div onClick={this.removePlaylist}>-</div>
                </a>
            </div>          
        )
    }
}

PlaylistListItem.propTypes = {
    playlistId: PropTypes.string.isRequired,
    playlistName: PropTypes.string.isRequired,
    playlistUrl: PropTypes.string.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
    onRemovepl: PropTypes.func.isRequired,
};
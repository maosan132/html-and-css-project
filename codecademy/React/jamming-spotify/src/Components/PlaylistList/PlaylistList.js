import React from 'react';
import PropTypes from 'prop-types';
import './PlaylistList.css';
import { PlaylistListItem } from '../PlaylistListItem/PlaylistListItem';

export class PlaylistList extends React.Component {
    render() {
        return (
            <div className="PlaylistList">
                <h2 className="PlaylistList-header">Local Playlists</h2>
                {this.props.playlists.map(playlist => 
                    <PlaylistListItem 
                        key={playlist.ID} 
                        playlistId={playlist.ID}
                        playlistName={playlist.Name}
                        playlistUrl={playlist.url}
                        selectPlaylist={this.props.selectPlaylist}
                        onRemovepl={this.props.onRemovepl}
                    />                    
                )}
            </div>               
        )
    } 
}

PlaylistList.propTypes = {
    playlists: PropTypes.array.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
    onRemovepl: PropTypes.func.isRequired,
};
import React from 'react';
import './PlaylistList.css';
import { PlaylistListItem } from '../PlaylistListItem/PlaylistListItem';
//import Spotify from '../../util/Spotify';

export class PlaylistList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {playlists: []};
    // }
    
    // componentWillMount() {
    //      Spotify.getUserPlaylists().then(playlists=> {
    //          this.setState({ playlists: playlists });
    //     });
    // }
    render() {
        return (
            <div className="PlaylistList">
                <h2 className="PlaylistList-header">Local Playlists</h2>
                {this.props.playlists.map(playlist => 
                    <PlaylistListItem 
                        key={playlist.ID} 
                        playlistId={playlist.ID}
                        playlistName={playlist.Name}
                        selectPlaylist={this.props.selectPlaylist}
                    />                    
                )}
            </div>               
        )
    } 
}
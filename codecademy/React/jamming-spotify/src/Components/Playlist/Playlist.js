import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './Playlist.css';
// import PropTypes from 'prop-types';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
            <TrackList 
                tracks={this.props.playlistTracks}
                onRemove={this.props.onRemove}
                isRemoval={true}
            />
            <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>            
        )
    }
}

// Playlist.propTypes = {
//     playlistTracks: PropTypes.object.isRequired,
//     onRemove:       PropTypes.func.isRequired,
//     onNameChange:   PropTypes.func.isRequired,
//     onSave:         PropTypes.func.isRequired
// }
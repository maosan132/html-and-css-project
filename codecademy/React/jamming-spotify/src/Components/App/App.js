import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import {PlaylistList} from '../PlaylistList/PlaylistList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = { playlistName: 'New playlist', playlistTracks: [], searchResults: [] };
  }

  addTrack (track) {
    if (this.state.playlistTracks.find(e => e.URI === track.URI)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: this.state.playlistTracks });
    }
  }

  removeTrack (track) {
    const updatedPlaylist = this.state.playlistTracks.filter(e => track.URI !== e.URI);
    this.setState({playlistTracks: updatedPlaylist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.URI);
    if (trackUris.length > 0) {
      Spotify.savePlaylist(this.state.playlistName, trackUris).then(results => {
        this.setState({ searchResults: [], playlistName: 'New Playlist', playlistTracks: [] });
      });
    } else {
      console.log('No tracks to add');
    }
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({ searchResults: tracks });
    });
  }

  render() {

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
              onAdd={this.addTrack} 
              searchResults={this.state.searchResults}
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
            <PlaylistList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './SearchResults.css';
// import PropTypes from 'prop-types';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2 className="SearchResults-header">Results</h2>
                <TrackList 
                    onAdd={this.props.onAdd} 
                    tracks={this.props.searchResults} 
                    isRemoval={false}
                />
            </div>        
        );
    }
}

// SearchResults.propTypes = {
//     searchResults:  PropTypes.object.isRequired,
//     addTrack:       PropTypes.func.isRequired
// }
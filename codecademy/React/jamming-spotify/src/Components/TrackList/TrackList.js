import React from 'react';
import {Track} from '../Track/Track';
import './TrackList.css';
import PropTypes from 'prop-types';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => 
                    <Track 
                        key={track.ID} 
                        track={track}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}
                    />                    
                )}
            </div>            
        )
    }
}

TrackList.propTypes = {
    tracks:     PropTypes.object.isRequired,
    onAdd:      PropTypes.func.isRequired,
    onRemove:   PropTypes.func.isRequired,
    isRemoval:  PropTypes.bool.isRequired
}
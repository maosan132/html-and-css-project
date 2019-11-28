import React from 'react';
import PropTypes from 'prop-types';
import{Link} from 'react-router-dom';
import '../App.css';

export class Thumbnail extends React.Component {
    render () {
        return(
            <div className="project">
                <Link to={this.props.thumbnail.link}>
                    <div className="project-image">
                        <img src={this.props.thumbnail.image} alt="Project Image"/>
                    </div>
                    <div className="project-title">{this.props.thumbnail.title}</div>
                    <div className="project-category">{this.props.thumbnail.category}</div>
                </Link>
            </div>
        );
    }
}

Thumbnail.propTypes = {
    thumbnail: PropTypes.object.isRequired
};

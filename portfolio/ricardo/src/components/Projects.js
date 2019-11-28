import React from 'react';
import {Thumbnail} from './Thumbnail';
import '../App.css';

const thumbnails = [
  {
    link: "/bigo",
    image: "../../public/bigO.png",
    title: "Performance Study",
    category: "Performance"
  },
  {
    link: "/airbnb",
    image: "https://assets.dockyard.com/images/shifting%20leaders.jpg",
    title: "Airbnb Experiences",
    category: "website"
  },
  {
    link: "/photoshop",
    image: "http://photoshop-image-url.jpg",
    title: "Photoshop Redesign",
    category: "Desktop App"
  }
]
 
export class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
          {
            thumbnails.map(thumbnail => {
                return <Thumbnail key={thumbnail.link} thumbnail={thumbnail}/>;
            })
          }      
      </div>
    );
  }
}

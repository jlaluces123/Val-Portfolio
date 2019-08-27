import React from 'react';
import "./home.css";

// Module imports
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    pictures: []
  };

  componentDidMount() {
    this.fetchImages();
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(this.state.pictures);
  };

  fetchImages = () => {
    fetch(`https://picsum.photos/v2/list?limit=8`)
      .then(res => res.json())
      .then(pictures => {
        console.log(pictures);
        this.setState({ pictures });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="home">
        <div className="image__wrapper">
          {this.state.pictures.map(pic => {
            return (
              <ScrollAnimation animateOnce = {true} duration = {0.6} className = "animation__image" key = {pic.id} animateIn = "fadeIn">
                <img className = "image" src = {pic.download_url} alt = "lorem picsum" />
                <Link to = "/">
                  <div className="home__overlay">
                    <span className = "overlay__text">Home</span>
                  </div>
                </Link>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    );
  }; // render
}; // class Home

export default Home;


import React from 'react';
import "./home.css";

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
    fetch(`https://picsum.photos/v2/list?limit=10`)
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
            return <img key = {pic.id} className = "image" src = {pic.download_url} alt = "lorem picsum" />
          })}
        </div>
      </div>
    );
  }; // render
}; // class Home

export default Home;


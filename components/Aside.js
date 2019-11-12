import React from 'react';
import logoSpotify from '../static/spotify_logo.png'
import { IoIosAlbums, IoIosSearch, IoMdHome } from 'react-icons/io'
import emptyIMG from '../static/null-logo.png'
import { connect } from "react-redux";

class Aside extends React.Component{
  render(){

    const musicIT = "{MusikIT}"

    return (
      <React.Fragment>
        <div className="sidenav">
          <div className="logo-container">
            <img src={logoSpotify} />
            <div className="logo-musikit">by {musicIT}</div>
          </div>
        <div className="nav-links">
          <ul>
            <li><IoMdHome /><span>Inicio</span></li>
            <li><IoIosSearch /><span>Buscar</span></li>
            <li><IoIosAlbums /><span>Tu Biblioteca</span></li>
          </ul>
        </div>
        <div className="playlists">
          <p>Playlists</p>
          <ul>
            {!this.props.playLists
              ? "Cargando..."
              : this.props.playLists.map((elem, index) => {
                  return <li key={index}>{elem.name}</li>;
                })}
          </ul>
        </div>
        <div className="user-data">
          
          <img
             src={this.props.userData && this.props.userData.images.length ? this.props.userData.images[0].uri : emptyIMG }
          />
          <span>{this.props.userData}</span>
        </div>
      </div>

      <style jsx>{`
      .sidenav {
        width: 230px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient(to right, #000000, #434343);
        overflow-x: hidden;
        color: lightgrey;
        display: flex;
        flex-direction: column;
      }

    .logo-container img {
      width: 60%;
      padding: 25px 0px 0px 25px;
    }
    .logo-musikit {
      text-align: center;
    }

    .nav-links ul li {
      margin-top: 25px;
      list-style-type: none;
      color: #b3b3b3;
    }

    .nav-links ul li:hover {
      color: #fff;
      transition: 0.5s;
      cursor: pointer;
    }

    .nav-links ul li span {
      font-weight: 900;
      font-size: 0.8em;
      padding-left: 22px;
    }

    .user-container {
      margin-top: 190px;
    }

    .playlists p {
      padding-left: 15px;
      font-size: 0.7em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .playlists ul li {
      list-style-type: none;
      padding: 10px 0px 10px 0px;
      font-size: 0.7em;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .user-data {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0px 10px 5px 10px;
      position: absolute;
      bottom: 110px;
    } 

    .user-data img {
      width: 15%;
      border-radius: 25px;
    }

    .user-data span {
      padding-left: 10px;
      color: #b3b3b3;
      font-weight: 900;
      font-size: 0.7em;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
        `}</style>
      </React.Fragment>
      );
    }

  }
  function  mapStateToProps(state){
    return {
      userData: state.userData,
      playLists: state.userPlaylists,
    };
  }
export default connect(mapStateToProps)(Aside);

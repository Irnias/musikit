import React from 'react';
import logoSpotify from '../static/spotify_logo.png'
import Link from 'next/link';

//Login details
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "f1dc5839f4bd4d5d8cd42a6868b8fd67";
const redirectUri = "http://localhost:3000/main";
const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-read",
  "playlist-read-private",
  "user-top-read"
];
//End login details

const musicIT = "{MusikIT}"

export class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="login-container">
        <div className="logo-container">
          <img src={logoSpotify} />
        </div>
        <h2>Log in to {musicIT} with your Spotify account.</h2>
        <div className="login-button">
          <Link href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`}>
            <a>Login</a>
          </Link>
        </div>

      </div>
         <style jsx>{`
         .logo-container img {
           max-width: 175px;
           padding: 10px 10px;;
         }
         .login-container {
           display: flex;
           align-items: center;
           justify-content: center;
           flex-direction: column;
           margin-top: 20vh;
           color:white;
         }
         .login-button a {
           text-decoration: none;
           font-size: 1.2em;
           color: black;
           font-weight: 400;
           letter-spacing: 2px;
           text-transform: uppercase;
           font-weight: bold;
           padding: 15px 50px 15px 50px;
           background: #52c234;
           border-radius: 5px;
           transition: box-shadow 0.4s ease 0s;
         }
         .login-button a:hover {
           box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
         }
       `}</style>
       </React.Fragment>
    );
  }
}

export default Login;

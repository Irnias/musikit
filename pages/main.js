import 'isomorphic-fetch'
import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import { setToken, setUserData, setCurrentlyPlaying, setUserPlaylists, setFeaturedPlaylists, setTopArtists } from "../store"
import Header from '../components/Header'
import Aside from '../components/Aside'
import Principal from '../components/Principal'


class Main extends React.Component {

  async componentDidMount() {

    const { dispatch } = this.props;

    const hash = window.location.hash
     .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {}
    );
    
    //Axiios fetch
    const nameRequest =               await axios.get("https://api.spotify.com/v1/me",                        { headers: { Authorization: "Bearer " + hash.access_token}})
    const userPlaylistsRequest =      await axios.get("https://api.spotify.com/v1/me/playlists",              { headers: { Authorization: "Bearer " + hash.access_token}})
    const currentlyPlayingRequest =   await axios.get("https://api.spotify.com/v1/me/player",                 { headers: { Authorization: "Bearer " + hash.access_token}})
    const featuredPlaylistsRequest =  await axios.get("https://api.spotify.com/v1/browse/featured-playlists", { headers: { Authorization: "Bearer " + hash.access_token}})
    const topArtistsRequest =         await axios.get("https://api.spotify.com/v1/me/top/artists",            { headers: { Authorization: "Bearer " + hash.access_token}})

    dispatch(setToken(hash.access_token));
    dispatch(setUserData(nameRequest.data));
    dispatch(setUserPlaylists(userPlaylistsRequest.data.items));
    dispatch(setCurrentlyPlaying(currentlyPlayingRequest.data));
    dispatch(setFeaturedPlaylists(featuredPlaylistsRequest.data));
    dispatch(setTopArtists(topArtistsRequest.data.items));

  }

  render(){
    return( 
      <React.Fragment>
          <Header title="MusikIT | Main" />
          <Aside />
          {/* <Principal /> */}
          {/* <Player /> */}
        </React.Fragment>
    )
  }
}

export default connect()(Main)
// import { topArtistsPlaylistsStyles } from "../../../styles/TopArtistsPlaylists";
import Artist from "./Artist";
import nullImage from "../../../static/null-logo.png"
import { connect } from "react-redux";

function TopArtistsPlaylists(props) {
  return (
    <React.Fragment>
      <div className="top-artists-container">
        <div className="playlist-name">
          <span>Top Artists</span>
        </div>
        <div className="playlist-carousel">
          {!props.topArtists ? (
            <Artist image={nullImage} />
          ) : (
            props.topArtists.slice(0, 6).map((elem, index) => {
              return (
                <Artist
                  key={index}
                  image={elem.images[0].url}
                  artistName={elem.name}
                  url={elem.id}
                />
              );
            })
          )}
        </div>
      </div>

      <style jsx>{`
      .top-artists-container {
        width: 100%;
        min-height: 250px;
        padding: 5px 25px 5px 25px;
      }
      
      .playlist-name {
        color: #fff;
        font-size: 2em;
        font-weight: bold;
      }

      .playlist-carousel {
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      
        `}</style>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    topArtists: state.topArtists
  };
}

export default connect(mapStateToProps)(TopArtistsPlaylists);

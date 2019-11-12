import Featured from "./Featured";
import emptyIMG from "../../../static/null-logo.png";
import { connect } from "react-redux";

function FeaturedPlaylist(props) {
  return (
    <React.Fragment>
      <div className="featured-playlists-container">
        <div className="playlist-name">
          {!props.featuredPlaylists ? (
            "Cargando..."
          ) : (
            <span>{props.featuredPlaylists.message}</span>
          )}
        </div>
        <div className="playlist-carousel">
          {!props.featuredPlaylists.playlists ? (
            <Featured image={emptyIMG} />
          ) : (
            props.featuredPlaylists.playlists.items
              .slice(0, 6)
              .map((elem, index) => {
                return (
                  <Featured
                    key={index}
                    image={elem.images[0].url}
                    playlistName={elem.name}
                    url={elem.id}
                  />
                );
              })
          )}
        </div>
      </div>

      <style jsx>{`
      .featured-playlists-container {
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
    featuredPlaylists: state.featuredPlaylists
  };
}

export default connect(mapStateToProps)(FeaturedPlaylist);

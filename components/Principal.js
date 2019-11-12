import Header from '../components/Principal/Header'
import FeaturedPlaylist from '../components/Principal/FeaturedPlaylists/FeaturedPlaylist'
import TopArtistsPlaylists from '../components/Principal/TopArtistsPlaylists/TopArtistsPlaylists'

class Principal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-content-container">
          <Header />
          <TopArtistsPlaylists />
          <FeaturedPlaylist />
        </div>

        <style jsx>{`
        .main-content-container {
          margin-left: 230px;
          height: 100vh;
          background-color: #232526;
          overflow-x: hidden;
        }
          `}</style>
      </React.Fragment>
    );
  }
}

export default Principal;

import Link from "next/link";

class Featured extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="featured-container">
          <Link
            href={`/playlist?id=${this.props.url}`}
            as={`/playlist/${this.props.url}`}
          >
            <a>
              <div>
                <img src={this.props.image} />
              </div>
              <div>
                <span>{this.props.playlistName}</span>
              </div>
            </a>
          </Link>
        </div>

        <style jsx>{`
        .featured-container {
          width: 175px;
          height: 175px;
          min-width: 175px;
          min-height: 175px;
          padding: 0px 15px 0px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .featured-container div img {
          width: 100%;
        }

        .featured-container div span {
          color: #b3b3b3;
          font-size: 0.8em;
          font-weight: 600;
        }

        .featured-container a {
          text-decoration: none;
        }  
        `}</style>
      </React.Fragment>
    );
  }
}

export default Featured;

// import { artistStyles } from "../../styles/Artist";
import Link from "next/link";

function Artist(props) {
  return (
    <React.Fragment>
      <div className="artist-container">
        <Link
          href={`/artist?id=${props.url}`}
          as={`/artist/${props.url}`}
        >
          <a>
            <div>
              <img src={props.image} />
            </div>
            <div>
              <span>{props.artistName}</span>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
      .artist-container {
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

      .artist-container div img {
        width: 100%;
      }

      .artist-container div span {
        color: #b3b3b3;
        font-size: 0.8em;
        font-weight: 600;
      }

      .artist-container a {
        text-decoration: none;
      }
        `}</style>
    </React.Fragment>
  );
}

export default Artist;

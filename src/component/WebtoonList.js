import React from 'react';
import { Link } from 'react-router-dom';
const WebtoonList = props => {
  return (
    <ul className="list_webtoon">
      {props.list.map((webtoon, index) => {
        return (
          <li key={index}>
            <Link to="/" className="link_webtoon">
              <img
                src={webtoon.thumbnail}
                className="img_webtoon"
                alt={webtoon.title}
              />
              <div className="info_webtoon">
                <strong className="tit_webtoon">{webtoon.title}</strong>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default WebtoonList;

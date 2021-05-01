import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { IEpisode } from '../models/interfaces';

const EpisodeList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favorites } = props;

  return (
    episodes &&
    episodes.map((item: IEpisode) => {
      return (
        <section key={item.id} className='episode-box'>
          <img
            className='custom-img'
            src={item?.image?.medium}
            alt={`img-${item?.name}`}
          />
          <p>{item?.name}</p>
          <section className='session-number'>
            <p>
              Session {item.season} - {item.number}
            </p>
            <button
              type='button'
              onClick={() => toggleFavAction(item)}
              style={{ background: 'none', border: 'none' }}
            >
              {favorites.find((fav: IEpisode) => fav.id === item.id) ? (
                <IoHeart color='red' style={{ fontSize: 18 }} />
              ) : (
                <IoHeartOutline color='red' style={{ fontSize: 18 }} />
              )}
            </button>
          </section>
        </section>
      );
    })
  );
};

export default EpisodeList;

import React, { useContext } from 'react';
import { Store } from '../Store';
import { IAction, IEpisode, IEpisodeProps } from '../models/interfaces';

const EpisodeList = React.lazy<any>(() => import('../components/EpisodeList'));

const Home = () => {
  const { state, dispatch } = useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );

      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading ....</div>}>
        <section className='episode-layout'>
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
};

export default Home;

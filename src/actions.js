import * as types from './actionTypes';
import { get } from './service';

export const setLoading = () => {
  return {
    type: types.LOADING
  }
}

export const unsetLoading = () => {
  return {
    type: types.UNSET_LOADING
  };
}

export const refine = (refine) => {
  return {
    type: types.REFINE_SEARCH,
    refine
  };
}

export const getRestaurants = (city) => {
  return dispatch => {
    setLoading();
    
    get(city).then(data => {
      const entries = data.restaurants.map(entry => {
        return {
          name: entry.name,
          address: entry.address,
          area: entry.area,
          price: entry.price,
          image_url: entry.image_url
        };
      });
      dispatch({
        type: types.GET_RESTAURANTS,
        city,
        entries: entries,
        totalEntries: data.total_entries,
        page: data.current_page
      });
    });
  }
}

export const getMoreRestaurants = (city, page) => {
  return dispatch => {
    setLoading();
    
    get(city, page).then(data => {
      const entries = data.restaurants.map(entry => {
        return {
          name: entry.name,
          address: entry.address,
          area: entry.area,
          price: entry.price,
          image_url: entry.image_url
        };
      });
      dispatch({
        type: types.LOAD_MORE,
        entries: entries,
        page: data.current_page
      });
    });
  }
}
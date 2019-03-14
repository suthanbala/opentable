import Immutable from 'immutable';
import * as types from './actionTypes';

const defaultState = Immutable.fromJS({
    loading: false,
    entries: [],
    refine: '',
    page: 1,
    totalEntries: 0,
    perPage: 25
});

const restaurantsReducer = (state = defaultState, action) => {
  switch(action.type) {
      case types.LOADING:
        return state.set('loading', true);
      case types.UNSET_LOADING:
        return state.set('loading', false);
      case types.REFINE_SEARCH:
        return state.set('refine', action.refine).set('loading', false);
      case types.GET_RESTAURANTS:
        return state.set('loading', false).set('entries', Immutable.fromJS(action.entries)).set('city', action.city).set('totalEntries', action.totalEntries).set('page', action.page);
      case types.LOAD_MORE:
        return state.set('loading', false).update('entries', entries => entries.merge(Immutable.fromJS(action.entries))).set('page', action.page);
      default:
        return state;
  }
};

export default restaurantsReducer;
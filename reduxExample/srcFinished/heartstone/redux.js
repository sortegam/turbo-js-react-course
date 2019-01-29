import { getBasicCards } from './api';

// #############################################################################
// ### CONSTANTS
// #############################################################################

const LOAD_CARDS_SUCCESS = 'heartstone/LOAD_CARDS_SUCCESS';
const SHOW_LOADING = 'heartstone/SHOW_LOADING';
const HIDE_LOADING = 'heartstone/HIDE_LOADING';

// #############################################################################
// ### ACTIONS CREATORS
// #############################################################################

export const showLoading = () => ({
  type: SHOW_LOADING
});

export const hideLoading = () => ({
  type: HIDE_LOADING
});

export const loadCardsSuccess = (cards) => ({
  type: LOAD_CARDS_SUCCESS,
  cards
});


// #############################################################################
// ### THUNKS
// #############################################################################

export const loadCards = () => async (dispatch) => {
  dispatch(showLoading());
  const responseCards = await getBasicCards();
  if (responseCards.status === 200) {
    const { data: cards } = responseCards;
    await dispatch(loadCardsSuccess(cards));
    return;
  }
  dispatch(hideLoading());
};

// #############################################################################
// ### REDUCER
// #############################################################################

const INITIAL_STATE = {
  loading: false,
  cards: [],
  error: null,
  selectedCard: null
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false
      };
    case LOAD_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cards: action.cards
      };
    // do reducer stuff
    default:
      return state;
  }
}

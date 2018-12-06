import { BASE_URL } from '../constants'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receivedItems = items => ({
  type: RECEIVE_ITEMS,
  items: items,
});

// // for local json
// export function fetchItems(userName) {
//   return function (dispatch) {
//     let data = require('../data.json');
//     dispatch(receivedItems(data.reel));
//   };
// }


//For API response

export function fetchItems(userName) {
  return function (dispatch) {
    return fetch(`${BASE_URL}/loadStories/${userName}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedItems(json));
      },
    );
  };
}

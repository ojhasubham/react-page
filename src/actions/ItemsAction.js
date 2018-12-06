import { BASE_URL } from '../constants'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receivedItems = json => ({
  type: RECEIVE_ITEMS,
  items: json && json.reel && json.reel.items ? json.reel.items : null,
  status: json && json.status ? json.status : null,
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
      response => {
        console.log(response);
        return response = response && response.status == 200 ? response.json(): response;
      },
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        console.log(json)
        dispatch(receivedItems(json));
      },
    );
  };
}

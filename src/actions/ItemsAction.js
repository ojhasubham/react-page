import { BASE_URL } from '../constants'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receivedItems = json => ({
  type: RECEIVE_ITEMS,
  items: json && json.reel && json.reel.items ? json.reel.items : null,
  status: json && json.status ? json.status : null,
});

export function fetchItems(userName) {
  return function (dispatch) {
    return fetch(`${BASE_URL}/loadStories/${userName}`)
      .then(
      response => {
        return response = response && response.status == 200 ? response.json(): response;
      },
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedItems(json));
      },
    );
  };
}

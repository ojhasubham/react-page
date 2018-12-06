import { BASE_URL } from '../constants'
export const RECEIVE_USER = 'RECEIVE_USER';

export const receivedUser = json => ({
  type: RECEIVE_USER,
  user: json && json.user ? json.user : null,
  status: json && json.status ? json.status : null,
});

export function fetchUser(userName) {
  return function (dispatch) {
    return fetch(`${BASE_URL}/loadCompteInsta/${userName}`)
      .then(
      response => {
        return response = response && response.status == 200 ? response.json(): response;
      },
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedUser(json));
      },
    );
  };
}

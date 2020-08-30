import * as APIUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const FIRST_SIGN_IN = 'FIRST_SIGN_IN';

// Action creators
const receiveCurrentUser = (user) => ({
  payload: user,
  type: RECEIVE_CURRENT_USER,
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  payload: errors,
  type: RECEIVE_SESSION_ERROR,
});

const receiveFirstSignin = (user) => ({
  type: FIRST_SIGN_IN,
  payload: { user },
});

// Thunk action creators
export const createNewUser = (formUser) => (dispatch) =>
  APIUtil.createUser(formUser)
    .then((user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(receiveFirstSignin(user));
    })
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const signinUser = (formUser) => (dispatch) =>
  APIUtil.postSession(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const signoutUser = () => (dispatch) =>
  APIUtil.deleteSession()
    .then(() => dispatch(signoutCurrentUser()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

const initialState = {
  fcmToken: null,
  accessToken: null,
  userId: null,
  isSignedIn: false,
  loading: false,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;

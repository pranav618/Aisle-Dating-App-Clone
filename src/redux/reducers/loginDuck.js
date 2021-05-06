import { persistReducer } from "redux-persist";
// import NetworkService from '../../service/NetworkService'

export const types = {
  SAVE_REQUEST_OTP: "SAVE_REQUEST_OTP",
  OTP_VERIFICATION_SUCCESS_RESPONSE: "OTP_VERIFICATION_SUCCESS_RESPONSE",
  USER_DETAILS_RESPONSE: "USER_DETAILS_RESPONSE",
};

export const initialState = {
  loginResponses: {
    otpGenerationResponse: null,
    otpVerificationResponse: null,
    userDetails: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_REQUEST_OTP:
      return {
        ...state,
        loginResponses: {
          ...state.loginResponses,
          otpGenerationResponse: action.payload,
        },
      };

    case types.OTP_VERIFICATION_SUCCESS_RESPONSE:
      return {
        ...state,
        loginResponses: {
          ...state.loginResponses,
          otpVerificationResponse: action.payload,
        },
      };
    case types.USER_DETAILS_RESPONSE:
      return {
        ...state,
        loginResponses: {
          ...state.loginResponses,
          userDetails: action.payload,
        },
      };

    default:
      return state;
  }
};

export const actions = {
  getOTP: (phoneNo) => (dispatch) => {
    fetch("https://testa2.aisle.co/V1/users/phone_number_login", {
      method: "POST",
      body: JSON.stringify({
        number: phoneNo,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: "__cfduiddf9b865983bd04a5de2cf5017994bbbc71618565720",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveGenerateOTPResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  verifyOTP: (otp, phoneNo) => (dispatch) => {
    fetch("https://testa2.aisle.co/V1/users/verify_otp", {
      method: "POST",
      body: JSON.stringify({
        number: "+91" + phoneNo,
        otp: otp,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: "__cfduiddf9b865983bd04a5de2cf5017994bbbc71618565720",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveVerifyOTPResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  getUser: (token) => (dispatch) => {
    fetch("https://testa2.aisle.co/V1/users/test_profile_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: "__cfduiddf9b865983bd04a5de2cf5017994bbbc71618565720",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        dispatch(actions.saveUserDetailsResponse(responseData));
      })
      .catch((err) => {
        alert(err);
      });
  },

  saveGenerateOTPResponse: (payload) => ({
    type: types.SAVE_REQUEST_OTP,
    payload: payload,
  }),

  saveVerifyOTPResponse: (payload) => ({
    type: types.OTP_VERIFICATION_SUCCESS_RESPONSE,
    payload: payload,
  }),

  saveUserDetailsResponse: (payload) => ({
    type: types.USER_DETAILS_RESPONSE,
    payload: payload,
  }),
};

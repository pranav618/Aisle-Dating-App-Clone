import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../responsiveScaling";
import R from "../../res/R";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: scale(30),
    marginTop: verticalScale(70),
    // paddingRight: scale(24),
  },
  getOtp: {
    width: scale(73),
    height: verticalScale(22),
    fontFamily: "Inter-Normal",
    color: "#000000",
    fontSize: scale(18),
    textAlign: "left",
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(8),
  },
  getNumber: {
    width: scale(147),
    height: verticalScale(22),
    fontFamily: "Inter-Normal",
    color: "#000000",
    fontSize: scale(18),
    textAlign: "left",
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(8),
  },
  enterPhoneNumber: {
    width: scale(220),
    height: verticalScale(72),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(30),
    textAlign: "left",
    lineHeight: verticalScale(36),
    marginBottom: verticalScale(12),
  },
  enterOtp: {
    width: scale(144),
    height: verticalScale(72),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(30),
    textAlign: "left",
    lineHeight: verticalScale(36),
    marginBottom: verticalScale(12),
  },
  countryInput: {
    width: scale(64),
    height: verticalScale(50),
    borderRadius: scale(8),
    borderColor: "#C4C4C4",
    borderWidth: scale(1),
    marginRight: scale(8),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(18),
    lineHeight: verticalScale(22),
    textAlign: "center",
  },
  phoneInput: {
    width: scale(147),
    height: verticalScale(50),
    borderRadius: scale(8),
    borderColor: "#C4C4C4",
    borderWidth: scale(1),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(18),
    lineHeight: verticalScale(22),
    textAlign: "center",
  },
  verifyOtpInput: {
    width: scale(78),
    height: verticalScale(50),
    borderRadius: scale(8),
    borderColor: "#C4C4C4",
    borderWidth: scale(1),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(18),
    lineHeight: verticalScale(22),
    textAlign: "center",
  },

  continue: {
    width: scale(96),
    height: verticalScale(40),
    backgroundColor: "#F9CB10",
    borderRadius: scale(20),
    marginTop: verticalScale(19),
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    width: scale(68),
    height: verticalScale(17),
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: scale(14),
    textAlign: "center",
    lineHeight: verticalScale(17),
  },

  phoneInputWrapper: {
    flexDirection: "row",
  },
  phoneInputBorder: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: R.dimens.button.borderRadius,
    borderColor: R.colors.border_color,
    height: R.dimens.textInput.height.large,
  },

  countrySelectorButton: {
    borderWidth: 0,
    width: R.dimens.textInput.height.large,
    lineHeight: R.dimens.textInput.height.large,
  },

  phoneNumberTextInput: {
    flex: 1,
    textAlign: "left",
    paddingLeft: scale(24),
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
  },

  sendOtpButton: {
    height: 56,
    marginTop: verticalScale(24),
  },

  otpGenerationMessageTextView: {
    flex: 1,
    marginTop: verticalScale(24),
  },
  edit: {
    width: scale(14),
    height: verticalScale(14),
  },
});

export default styles;

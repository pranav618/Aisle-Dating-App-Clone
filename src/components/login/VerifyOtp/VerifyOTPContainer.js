import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as loginActions } from "../../../redux/reducers/loginDuck";
import appRoutes from "../../../routing/appRoutes";
import R from "../../../res/R";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from "react-native";
import styles from "../loginStyles";

class VerifyOTPContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      phoneNumber: this.props.navigation.getParam("phoneNo"),
      resendButtonDisabledTime: 60,
    };
  }

  onChangePhoneNumberClick = () => {
    this.props.navigation.goBack();
  };

  enableVerifyOTPButton = () => {
    return this.state.otp && this.state.otp.length === 4;
  };

  trackOTPValueChange = (otp) => {
    this.setState({ otp });
  };

  triggerOTPVerificationCall(otp) {
    this.props.actions.loginActions.verifyOTP(
      otp,
      this.props.navigation.getParam("phoneNo")
    );
  }

  alertMessage = () => {
    Platform.OS == "ios"
      ? alert("Please enter a valid otp")
      : ToastAndroid.show("Please enter a valid otp", ToastAndroid.SHORT);
  };

  componentDidUpdate(prevProps, prevState) {
    const { otpVerificationResponse } = this.props;
    if (prevProps.otpVerificationResponse !== otpVerificationResponse) {
      otpVerificationResponse && otpVerificationResponse.token
        ? this.props.navigation.navigate(appRoutes.preLogin.messages, {
            token: otpVerificationResponse.token,
          })
        : this.alertMessage();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.phoneInputWrapper}>
          <Text style={styles.getNumber}>
            {"+91 " + this.state.phoneNumber}
          </Text>
          <TouchableOpacity onPress={this.onChangePhoneNumberClick}>
            <Image
              source={require("../../../assets/edit.png")}
              style={styles.edit}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.enterOtp}>{R.strings.enterOtp}</Text>

        <View style={styles.phoneInputWrapper}>
          <TextInput
            style={styles.verifyOtpInput}
            onChangeText={this.trackOTPValueChange}
            value={this.state.otp}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.phoneInputWrapper}>
          <TouchableOpacity
            onPress={() => {
              this.triggerOTPVerificationCall(this.state.otp);
            }}
            style={styles.continue}
            disabled={!this.enableVerifyOTPButton}
          >
            <Text style={styles.continueText}>{R.strings.continue}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    otpVerificationResponse: state.login.loginResponses.otpVerificationResponse,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginActions: bindActionCreators(loginActions, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTPContainer);

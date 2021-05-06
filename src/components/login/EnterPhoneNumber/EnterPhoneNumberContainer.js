import React from "react";
import { actions as loginActions } from "../../../redux/reducers/loginDuck";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EnterPhoneNumberView from "./EnterPhoneNumberView";
import appRoutes from "../../../routing/appRoutes";
import R from "../../../res/R";
import { Text, Image, ToastAndroid, Platform } from "react-native";

class EnterPhoneNumberContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      disableSubmitPhoneNumberButton: false,
      phoneNumber: "",
    };
  }

  validatePhoneNumberToEnableSubmission = (inputPhNum) => {
    const phoneNumber = `${Number(inputPhNum)}`;
    this.setState({
      phoneNumber,
      disableSubmitPhoneNumberButton: !(phoneNumber.length === 10),
    });
  };

  navigateToVerifyOtp = () => {
    this.props.navigation.navigate(appRoutes.preLogin.verifyOTP, {
      phoneNumber: this.state.phoneNumber,
    });
  };

  triggerOTPGenerationCall = (phoneNumber) => {
    this.props.actions.loginActions.getOTP("+91" + phoneNumber);
  };

  alertMessage = () => {
    Platform.OS == "ios"
      ? alert("Please enter a valid number")
      : ToastAndroid.show("Please enter a valid number", ToastAndroid.SHORT);
  };

  componentDidUpdate(prevProps, prevState) {
    const { otpGenerationResponse } = this.props;
    if (prevProps.otpGenerationResponse !== otpGenerationResponse) {
      otpGenerationResponse && otpGenerationResponse.status
        ? this.props.navigation.navigate(appRoutes.preLogin.verifyOTP, {
            phoneNo: this.state.phoneNumber,
          })
        : this.alertMessage();
    }
  }

  render() {
    return (
      <EnterPhoneNumberView
        phoneNumber={this.state.phoneNumber}
        otpGenerationResponse={this.props.otpGenerationResponse}
        disableSubmitPhoneNumberButton={
          this.state.disableSubmitPhoneNumberButton
        }
        validatePhoneNumberToEnableSubmission={
          this.validatePhoneNumberToEnableSubmission
        }
        triggerOTPGenerationCall={this.triggerOTPGenerationCall}
        navigateToVerifyOtp={this.navigateToVerifyOtp}
        onChangeNumber={this.onChangeNumber}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    otpGenerationResponse: state.login.loginResponses.otpGenerationResponse,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginActions: bindActionCreators(loginActions, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterPhoneNumberContainer);

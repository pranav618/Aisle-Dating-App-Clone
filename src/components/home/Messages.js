import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as loginActions } from "../../redux/reducers/loginDuck";
import { styles } from "./styles";
import R from "../../res/R";
export class Messages extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: null,
    };
  }

  componentDidMount() {
    const { userDetails, otpVerificationResponse } = this.props;
    otpVerificationResponse &&
      otpVerificationResponse.token &&
      this.props.actions.loginActions.getUser(otpVerificationResponse.token);
  }

  render() {
    const { userDetails } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.notesContainer}>
            <Text style={styles.notes}>{R.strings.notes}</Text>
            <Text style={styles.personal}>{R.strings.personal}</Text>
          </View>
          <ImageBackground
            style={styles.notesImage}
            source={{
              uri:
                userDetails &&
                userDetails.invites &&
                userDetails.invites.profiles[0].photos[0].photo,
            }}
            imageStyle={styles.notesImageStyle}
          >
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageText}>
                {userDetails &&
                  userDetails.invites &&
                  userDetails.invites.profiles[0].general_information
                    .first_name}
                {", "}
                {userDetails &&
                  userDetails.invites &&
                  userDetails.invites.profiles[0].general_information.age}
              </Text>
              <Text style={styles.imageSubText}>{R.strings.tap}</Text>
            </View>
          </ImageBackground>
          <View style={styles.interestedContainer}>
            <View style={styles.interestedSubContainer1}>
              <Text style={styles.interested}>{R.strings.interested}</Text>
              <Text style={styles.premiumText}>{R.strings.premiumText}</Text>
            </View>
            <View style={styles.interestedSubContainer2}>
              <TouchableOpacity style={styles.upgradeButton}>
                <Text style={styles.upgradeText}>{R.strings.upgrade}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.likesContainer}>
            <ImageBackground
              style={styles.likesImage}
              source={{
                uri:
                  userDetails &&
                  userDetails.invites &&
                  userDetails.likes.profiles[0].avatar,
              }}
              imageStyle={styles.notesImageStyle}
              blurRadius={
                userDetails &&
                userDetails.likes &&
                !userDetails.likes.can_see_profile
                  ? 10
                  : 0
              }
            >
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>
                  {userDetails &&
                    userDetails.likes &&
                    userDetails.likes.profiles[0].first_name}
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.likesImage}
              source={{
                uri:
                  userDetails &&
                  userDetails.invites &&
                  userDetails.likes.profiles[1].avatar,
              }}
              imageStyle={styles.notesImageStyle}
              blurRadius={
                userDetails &&
                userDetails.likes &&
                !userDetails.likes.can_see_profile
                  ? 10
                  : 0
              }
            >
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>
                  {userDetails &&
                    userDetails.likes &&
                    userDetails.likes.profiles[1].first_name}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.login.loginResponses.userDetails,
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

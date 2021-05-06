import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import R from "../../res/R";
export class Profile extends Component {
  render() {
    return (
      <View style={styles.notesContainer}>
        <Text style={styles.topic}>{R.strings.profile}</Text>
        <Text style={styles.genericMsg}>{R.strings.hire}</Text>
      </View>
    );
  }
}

export default Profile;

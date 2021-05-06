import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import R from "../../res/R";
export class Home extends Component {
  render() {
    return (
      <View style={styles.notesContainer}>
        <Text style={styles.topic}>{R.strings.home}</Text>
        <Text style={styles.genericMsg}>{R.strings.hire}</Text>
      </View>
    );
  }
}

export default Home;

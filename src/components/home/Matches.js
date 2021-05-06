import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import R from "../../res/R";
export class Matches extends Component {
  render() {
    return (
      <View style={styles.notesContainer}>
        <Text style={styles.topic}>{R.strings.match}</Text>
        <Text style={styles.genericMsg}>{R.strings.noMatch}</Text>
      </View>
    );
  }
}

export default Matches;

import {
  KeyboardAvoidingView,
  View,
  Platform,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import R from "../../../res/R";
import styles from "../loginStyles";

const EnterPhoneNumberView = ({
  phoneNumber,
  triggerOTPGenerationCall,
  otpGenerationResponse,
  disableSubmitPhoneNumberButton,
  validatePhoneNumberToEnableSubmission,
  onChangeNumber,
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View>
        <Text style={styles.getOtp}>{R.strings.getOtp}</Text>
        <Text style={styles.enterPhoneNumber}>
          {R.strings.enterPhoneNumber}
        </Text>
      </View>
      <View style={styles.phoneInputWrapper}>
        <TextInput style={styles.countryInput} value={"+91"} editable={false} />
        <TextInput
          style={styles.phoneInput}
          onChangeText={validatePhoneNumberToEnableSubmission}
          value={phoneNumber}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        onPress={() => triggerOTPGenerationCall(phoneNumber)}
        style={styles.continue}
        disabled={disableSubmitPhoneNumberButton}
      >
        <Text style={styles.continueText}>{R.strings.continue}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default EnterPhoneNumberView;

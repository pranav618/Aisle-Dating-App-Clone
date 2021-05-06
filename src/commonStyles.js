import { StyleSheet } from "react-native";
import R from "./res/R";
import { verticalScale, scale } from "./responsiveScaling";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  headerStyle: {
    borderBottomColor: R.colors.border_color,
    borderBottomWidth: verticalScale(1),
    elevation: 0,
  },
  headerBackImageStyle: {
    margin: R.dimens.margins.vertical.medium,
  },
  iconMenu: {
    fontFamily: "Inter-Bold",
    height: verticalScale(30),
    paddingBottom: verticalScale(8),
    paddingTop: verticalScale(5),
  },
  headerTitleStyle: {
    fontFamily: "Inter-Bold",
    color: "#2e343d",
    fontSize: scale(18),
    textAlign: "center",
    lineHeight: verticalScale(24),
  },
});

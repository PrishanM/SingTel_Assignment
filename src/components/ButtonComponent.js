import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { appColors } from "../styles/colors";
import dimensions from "../styles/dimensions";

/**
 * Common Button Component
 * @param title
 * @param isDisabled
 * @param isOutlined
 * @param onPressButton
 * @param width
 * @param testId
 * @param height
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
const ButtonComponent = ({
                           title,
                           isDisabled = false,
                           isOutlined = false,
                           onPressButton,
                           width = "65%",
                           testId = "",
                           height = dimensions.buttonHeight,
                           icon = ""
                         }) => {

  return (
    <TouchableOpacity testId={testId}
                      style={[buttonStyles.buttonParentView,
                        {
                          height: height,
                          width: width,
                          backgroundColor: isDisabled ? appColors.fontColor1 : isOutlined ? appColors.backgroundColor : appColors.primaryButtonColor,
                          borderWidth: isDisabled ? 0 : 1,
                        },
                      ]}
                      disabled={isDisabled}
                      onPress={() => {
                        if (!isDisabled) {
                          onPressButton(title);
                        }
                      }}>

      {
        icon &&
        <Image source={icon}
               style={{ height: dimensions.buttonIconSize, width: dimensions.buttonIconSize, marginRight: dimensions.margin4 }} />

      }


      <Text
        style={[buttonStyles.buttonTextStyle, { color: isDisabled ? appColors.colorWhite : isOutlined ? appColors.primaryButtonColor : appColors.colorWhite }]}>
        {title}
      </Text>

    </TouchableOpacity>
  );

};

export default ButtonComponent;

const buttonStyles = StyleSheet.create({
  buttonParentView: {
    borderRadius: dimensions.borderRadius,
    borderWidth: 1,
    borderColor: appColors.primaryButtonColor,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTextStyle: {
    fontSize: 14,
  },
});

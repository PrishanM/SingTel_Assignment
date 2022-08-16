import React  from "react";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import dimensions from "../styles/dimensions";
import { appColors } from "../styles/colors";

const NumberCard = (props) => {

  return (

    <View style={cardStyles.parentCardView}>

      {
        !props.isFlipped ?

          <Animatable.View style={cardStyles.cardStyle} animation={"flipInX"}>
            <TouchableOpacity style={cardStyles.innerViewStyle}
                              onPress={() => {
                                props.onPressNumber(props.number,props.index);
                              }}>

              <Image source={require("../assets/icon_question.png")}
                     style={{ height: 2 * (dimensions.buttonIconSize), width: 2 * (dimensions.buttonIconSize) }} />

            </TouchableOpacity>

          </Animatable.View>

          :

          <Animatable.View style={[cardStyles.cardStyle, { backgroundColor: appColors.colorWhite }]}
                           animation={"flipInY"}>
            <View style={[cardStyles.innerViewStyle, { borderColor: appColors.purpleVariant1 }]}>
              <Text style={cardStyles.textStyle}>
                {props.number}
              </Text>
            </View>

          </Animatable.View>


      }
    </View>

  );
};

export default NumberCard;

const cardStyles = StyleSheet.create({
  parentCardView: {
    height: dimensions.cardSize + 30,
    width: dimensions.cardSize,
    backgroundColor: "transparent",
    marginBottom: dimensions.margin4,
  },
  cardStyle: {
    height: dimensions.cardSize + 30,
    width: dimensions.cardSize,
    borderRadius: 8,
    backgroundColor: appColors.purpleVariant1,
    padding: dimensions.margin4,
  },
  innerViewStyle: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.colorWhite,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: appColors.purpleVariant1,
  },
});

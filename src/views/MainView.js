import React, { useEffect, useState } from "react";
import {View,Text, StyleSheet, FlatList, Alert} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import dimensions from "../styles/dimensions";
import { appColors } from "../styles/colors";
import NumberCard from "../components/NumberCard";
import { generateRandomNumbers, getListNumbers } from "../utils/utilities";
import { Actions } from "react-native-router-flux";

const NUMBER_OF_CARDS = 12;

const MainView = () => {

  const [stepsCount,setStepsCount] = useState(0);
  const [firstNumber,setFirstNumber] = useState(0);
  const [firstIndex,setFirstIndex] = useState(-1);
  const [numbersArray,setNumbersArray] = useState([]);
  const [successfulFlips,setSuccessfulFlips] = useState(0);

  useEffect(()=>{
    generateNumbers();
  },[]);

  useEffect(() => {
    if(successfulFlips === 6){
      showSuccessAlert();
    }
  }, [successfulFlips]);

  const onPressReset = () => {
    reset();
    generateNumbers();
  }

  const onPressNumber = (number,index) => {
    setStepsCount(stepsCount + 1);
    updateFlippedStatus([{ index : index, value :true }]);
    if(firstNumber === 0){
      setFirstNumber(number);
      setFirstIndex(index);
    } else {
      if(firstNumber === number){
        setSuccessfulFlips(successfulFlips + 1);
        setFirstNumber(0);
        setFirstIndex(-1);
      } else {
        setTimeout(()=>{
          updateFlippedStatus([{ index : firstIndex, value :false },{ index : index, value :false }]);
          setFirstNumber(0);
          setFirstIndex(-1);
        },1000)
      }

    }
  }

  const updateFlippedStatus = (dataArray=[]) => {
    let tempArray = numbersArray;
    dataArray.map((dataItem)=>{
      tempArray[dataItem.index]['isFlipped'] = dataItem.value;
    })
    setNumbersArray(tempArray);
  }

  const showSuccessAlert = () => {
    Alert.alert(
      "Congratulations !",
      "You win this game by "+stepsCount+" steps",
      [
        {
          text: "Try another round",
          onPress: onPressReset
        }
      ]
    );
  }

  function generateNumbers(){
    const CARD_PAIRS_VALUE = generateRandomNumbers(1,100,NUMBER_OF_CARDS/2);
    setNumbersArray(getListNumbers(CARD_PAIRS_VALUE));
  }

  function reset(){
    setStepsCount(0);
    setFirstNumber(0);
    setFirstIndex(-1);
    setNumbersArray([]);
    setSuccessfulFlips(0);
  }


  return(
    <View style={styles.mainViewStyle}>

      <View style={styles.contentRowStyle}>

        <ButtonComponent width={120}
                         title={'Reset'}
                         icon={require('../assets/icon_reset.png')}
                         onPressButton={onPressReset} />

        <View style={styles.stepsTextViewStyle}>

          <Text style={styles.stepsTextStyle}>
            Steps :
          </Text>

          <Text style={[styles.stepsTextStyle,{fontWeight:'bold',color: appColors.purpleVariant1}]}>
            {" "+stepsCount}
          </Text>

        </View>

      </View>

      <View style={{flex:1}}>

        <FlatList data={numbersArray}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item,index})=>(
                    <NumberCard number={item.number} index={index} onPressNumber={onPressNumber} isFlipped={item.isFlipped}/>
                  )}
                  numColumns={3}
                  keyExtractor={(item, index) => index} />

      </View>

    </View>
  )
}

export default MainView;

const styles = StyleSheet.create({
  mainViewStyle : {
    flex:1,
    padding : dimensions.viewPadding,
    backgroundColor:appColors.purpleVariant3Opacity
  },
  contentRowStyle : {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:dimensions.margin4
  },
  stepsTextViewStyle: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width:150
  },
  stepsTextStyle : {
    fontSize:18,
    color:appColors.primaryButtonColor
  }
});

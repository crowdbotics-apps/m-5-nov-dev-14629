import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Slider
        value={50}
        minimumValue={1}
        maximumValue={100}
        step={1}
        maximumTrackTintColor="#768b46"
        minimumTrackTintColor="#ff5c33"
        thumbTintColor="#f133ff"
        style={styles.Slider_2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Slider_2: {},
  View_1: {},
  Slider_2: {},
  View_1: {},
  Slider_2: { width: 100, height: 50, paddingLeft: 2, alignSelf: "flex-start" }
})

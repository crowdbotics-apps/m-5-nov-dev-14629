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
      <Button
        title="Press me!"
        color="#f59ee2"
        onPress={() => alert("Pressed!")}
      />
      <Text>Sample text content</Text>
      <Button
        title="Press me!"
        color="#1ccaad"
        onPress={() => alert("Pressed!")}
      />
      <Text>Sample text content</Text>
      <Button
        title="Press me!"
        color="#38e82c"
        onPress={() => alert("Pressed!")}
      />
      <Text>Sample text content</Text>
      <Button
        title="Press me!"
        color="#ac71f4"
        onPress={() => alert("Pressed!")}
      />
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: {},
  Text_3: {},
  Button_4: {},
  Text_5: {},
  Button_6: {},
  Text_7: {},
  Button_8: {},
  Text_9: {},
  View_1: {},
  Button_2: {},
  Text_3: {},
  Button_4: {},
  Text_5: {},
  Button_6: {},
  Text_7: {},
  Button_8: {},
  Text_9: {}
})

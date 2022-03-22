import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("pressesd");
  console.log(require("./assets/favicon.png"));
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        this is ranjitha
      </Text>
      <TouchableHighlight>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

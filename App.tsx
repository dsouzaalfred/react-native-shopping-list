import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Alert,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete?", [
      {
        text: "Yes",
        onPress: () => console.log("Ok, deleting."),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("No"),
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemFont}>Coffee</Text>
        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          activeOpacity={1}
          style={styles.button}
          onPressIn={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        {/* <Text>
          {PixelRatio.get()} - PixelRatio.get() - Return the device pixel
          density
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemFont: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import ShoppingListItem from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>
          {PixelRatio.get()} - PixelRatio.get() - Return the device pixel
          density
        </Text> */}
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
};

export default function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemFont}>{name}</Text>
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
  );
}

const styles = StyleSheet.create({
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

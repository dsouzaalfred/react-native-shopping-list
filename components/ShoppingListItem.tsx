import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity hitSlop={20} onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
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
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    marginLeft: 8,
    flex: 1,
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
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
});

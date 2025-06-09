import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-black text-white"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-white">
        Edit app/index.jsx to edit this screen.
      </Text>
    </View>
  );
}

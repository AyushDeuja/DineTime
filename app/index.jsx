import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.jsx to edit this screen.</Text>
      <TouchableOpacity onPress={() => router.push("/testing")}>
        <Text className="text-xl">Change route</Text>
      </TouchableOpacity>
    </View>
  );
}

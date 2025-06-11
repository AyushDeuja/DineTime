import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
// const logo = require("../assets/images/dinetimelogo.jpg");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-secondary`}>
      <StatusBar barStyle={"light-content"} className="bg-secondary" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-3/4">
          <Image source={logo} style={{ width: "300", height: "300" }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

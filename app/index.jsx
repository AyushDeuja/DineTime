import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.jpg";
// const logo = require("../assets/images/dinetimelogo.jpg");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-secondary`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image source={logo} style={{ width: "300", height: "300" }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

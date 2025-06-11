import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
// const logo = require("../assets/images/dinetimelogo.jpg");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-secondary`}>
      <StatusBar barStyle={"light-content"} className="bg-secondary" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <View className="w-3/4">
            <TouchableOpacity className="p-2 my-2 text-black rounded-lg bg-primary">
              <Text className="text-base font-semibold text-center">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

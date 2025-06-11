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
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-2 my-2 text-black rounded-lg bg-primary"
            >
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="p-2 my-2 text-black rounded-lg bg-secondary border border-primary max-w-fit"
            >
              <Text className="text-lg font-semibold text-primary text-center">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-lg font-semibold my-4 text-white">
              <View className="border-b-2 p-2 mb-1 w-24 border-primary" /> or{" "}
              <View className="border-b-2 p-2 mb-1 w-24 border-primary" />
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="flex items-center flex-row justify-center"
            >
              <Text className="font-semibold text-white">Already a User? </Text>
              <Text className="font-semibold text-base underline text-primary">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

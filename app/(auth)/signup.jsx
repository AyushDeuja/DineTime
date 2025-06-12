import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import entryImage from "../../assets/images/Frame.png";

const Signup = () => {
  return (
    <SafeAreaView className={`bg-secondary`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <Text className="font-bold text-center text-lg text-white mb-10">
            Let's get you started
          </Text>
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
            <View className="flex flex-row justify-center items-center">
              <Text className="font-semibold text-white">Already a User? </Text>
              <TouchableOpacity onPress={() => router.push("/signin")}>
                <Text className="font-semibold text-base underline text-primary">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={entryImage}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <StatusBar barStyle={"light-content"} className="bg-secondary" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

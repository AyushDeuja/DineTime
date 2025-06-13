import { Image, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";
import logo from "../../assets/images/dinetimelogo.png";

const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>
      <View className="flex items-center">
        <View className=" w-11/12 rounded-lg shadow-lg justify-center items-center flex flex-row p-2">
          <View className="flex flex-row ">
            <Text
              className={`text-base h-10 py-[${
                Platform.OS == "ios" ? 9 : 8
              }] align-middle text-white font-bold`}
            >
              Welcome to{" "}
            </Text>
            <Image resizeMode="cover" className="w-20 h-11 " source={logo} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

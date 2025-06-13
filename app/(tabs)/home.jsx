import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";
import logo from "../../assets/images/dinetimelogo.png";

const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>
      <View className="flex items-center">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text>Welcome to{""}</Text>
            <Image resizeMode="cover" className="w-20 h-12 " source={logo} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

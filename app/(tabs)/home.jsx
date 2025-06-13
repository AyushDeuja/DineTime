import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";

const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>
      <View className="flex items-center">
        <View className="bg-[#5f5f5f]">
          <View>
            <Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

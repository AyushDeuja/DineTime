import { useLocalSearchParams } from "expo-router";
import { Platform, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={[
        { backgroundColor: Colors.SECONDARY },
        Platform.OS == "android"
          ? { paddingBottom: 70 }
          : { paddingBottom: 30 },
      ]}
    >
      <Text>{restaurant}</Text>
    </SafeAreaView>
  );
};

export default Restaurant;

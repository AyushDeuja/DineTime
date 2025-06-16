import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();

  const [restaurantData, setRestaurantData] = useState({});
  const [carousel, setCacousel] = useState({});
  const [slots, setSlots] = useState({});

  return (
    <SafeAreaView
      style={[
        { backgroundColor: Colors.SECONDARY },
        Platform.OS == "android"
          ? { paddingBottom: 70 }
          : { paddingBottom: 30 },
      ]}
    >
      <ScrollView className="h-full">
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-primary mr-2 font-semibold">
            {restaurant}
          </Text>
          <View className="border-b border-primary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;

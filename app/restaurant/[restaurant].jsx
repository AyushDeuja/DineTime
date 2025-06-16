import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";
import { db } from "../../config/firebaseConfig";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();

  const [restaurantData, setRestaurantData] = useState({});
  const [carousel, setCacousel] = useState({});
  const [slots, setSlots] = useState({});

  const getRestaurantData = async () => {
    try {
      const restaurantQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurant)
      );
      const restaurantSnapshot = await getDocs(restaurantQuery);

      if (restaurantSnapshot.empty) {
        console.log("No matching restaurant found");
        return;
      }

      for (const doc of restaurantSnapshot.docs) {
        const restaurantData = doc.data();
        setRestaurantData(restaurantData);
      }
    } catch (err) {}
  };

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

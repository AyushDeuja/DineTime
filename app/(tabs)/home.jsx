import { BlurView } from "expo-blur";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Colors";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import uploadData from "../../config/bulkUpload";
import { restaurants } from "../../store/restaurants";

const home = () => {
  useEffect(() => {
    uploadData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-gray-200 max-w-xs rounded-2xl overflow-hidden mx-4 shadow-lg ">
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        className="h-36 w-full"
      />
      <View className="p-4">
        <Text className="text-black text-xl font-semibold mb-1">
          {item.name}
        </Text>
        <Text className="text-black text-sm mb-2">{item.address}</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-green-600 font-medium text-sm">
            Open: {item.opening}
          </Text>
          <Text className="text-red-600 font-medium text-sm">
            Close: {item.closing}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        { backgroundColor: Colors.SECONDARY },
        Platform.OS == "android"
          ? { paddingBottom: 70 }
          : { paddingBottom: 30 },
      ]}
    >
      <View className="flex items-center">
        <View className="w-11/12 bg-gray-500 rounded-lg shadow-lg justify-center items-center flex flex-row p-2 mb-5">
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
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          resizeMode="cover"
          className="mb-4 bg-secondary w-full h-52 items-center justify-center"
          source={banner}
        >
          <BlurView
            intensity={Platform.OS === "android" ? 50 : 25}
            tint="dark"
            className="shadow-lg w-full p-4"
          >
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>

        <View className="p-4 flex flex-row items-center">
          <Text className="text-3xl text-white mr-2 font-semibold">
            Special Discount %
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={Colors.PRIMARY} className="p-5" />
        )}

        <View className="p-4 flex flex-row items-center">
          <Text className="text-3xl text-primary mr-2 font-semibold">
            Our Restaurants
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={Colors.PRIMARY} className="p-5" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

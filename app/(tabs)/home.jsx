import { BlurView } from "expo-blur";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-web";
import { Colors } from "../../assets/Colors";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";

const home = () => {
  const restaurants = restaurants;
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>
      <View className="flex items-center">
        <View className="w-11/12 bg-secondary rounded-lg shadow-lg justify-center items-center flex flex-row p-2">
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
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          className="my-4 w-full h-52 items-center justify-center"
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
      </ScrollView>
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
        <ActivityIndicator animating color={Colors.PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default home;

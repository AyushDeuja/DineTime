import { Formik } from "formik";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import entryImage from "../../assets/images/Frame.png";

const Signup = () => {
  const handleSignup = () => {};

  return (
    <SafeAreaView className={`bg-secondary`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <Text className="font-bold text-center text-lg text-white mb-10">
            Let's get you started
          </Text>
        </View>

        <View className="w-5/6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={""}
            onSubmit={handleSignup}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View className="w-full">
                <Text>Email</Text>
                <TextInput
                  className="h-10 border border-white text-white rounded px-2"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                {touched.email && errors.email && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.email}
                  </Text>
                )}
                <Text>Password</Text>
                <TextInput
                  className="h-10 border border-white text-white rounded px-2"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />

                {touched.password && errors.password && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.password}
                  </Text>
                )}
              </View>
            )}
          </Formik>
        </View>

        <View className="flex-1">
          <Image
            source={entryImage}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="p-2 my-2 text-black rounded-lg bg-primary"
        >
          <Text className="text-lg font-semibold text-center">Sign Up</Text>
        </TouchableOpacity>
        <StatusBar barStyle={"light-content"} className="bg-secondary" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

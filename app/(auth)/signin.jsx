import { useRouter } from "expo-router";
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
import validationSchema from "../../utils/authSchema";

const Signin = () => {
  const router = useRouter();
  const handleSignin = () => {};

  return (
    <SafeAreaView className={`bg-secondary`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: "200", height: "100" }} />
          <Text className="font-bold text-center text-lg text-white mb-5">
            Sign In here
          </Text>

          <View className="w-5/6">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSignin}
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
                  <Text className="text-primary mt-4 mb-2">Email</Text>
                  <TextInput
                    className="h-12 border border-white text-white rounded px-2"
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

                  <Text className="text-primary mt-4 mb-2">Password</Text>
                  <TextInput
                    className="h-12 border border-white text-white rounded px-2"
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

                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="p-2 my-4 text-black rounded-lg bg-primary"
                  >
                    <Text className="text-lg font-semibold text-center">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View className="flex flex-row justify-center items-center ">
              <Text className="font-semibold text-white">New User? </Text>
              <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text className="font-semibold text-base underline text-primary ">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-center text-lg font-semibold my-4 text-white">
              <View className="border-b-2 p-2 mb-1 w-24 border-primary" /> or{" "}
              <View className="border-b-2 p-2 mb-1 w-24 border-primary" />
            </Text>
            <View className="flex flex-row justify-center items-center ">
              <Text className="font-semibold text-white">Be a </Text>
              <TouchableOpacity onPress={() => router.push("/home")}>
                <Text className="font-semibold text-base underline text-primary ">
                  {" "}
                  Guest User
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

export default Signin;

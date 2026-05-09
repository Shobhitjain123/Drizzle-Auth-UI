import React from "react";
import { Text, View, Image, TextInput, Pressable, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./style";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/icon.png")} />
        <View style={styles.content}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>
            Let's experience the joy of Telecare AI!
          </Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Email Address</Text>
          <View style={[styles.formInput, { justifyContent: "space-between" }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 10,
              }}
            >
              <FontAwesome name="envelope" color="#000" size={18} />
              <TextInput placeholder="Enter your Email Address" />
            </View>
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Password</Text>
          <View style={[styles.formInput, { justifyContent: "space-between" }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 10,
              }}
            >
              <FontAwesome name="lock" color="#000" size={18} />
              <TextInput
                placeholder="Enter your Password"
                secureTextEntry={!showPassword}
              />
            </View>
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                color="#CDCDCD"
                size={18}
              />
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.button} onPress={() => Alert.alert("Sign In")}>
          <Text style={styles.buttonText}>Sign In</Text>
          <FontAwesome name="long-arrow-right" color="white" size={24} />
        </Pressable>
      </View>

      <View style={styles.footer}>
        <View style={styles.socialLoginContainer}>
          <FontAwesome
            name="facebook"
            color="#000"
            size={24}
            style={styles.socialLoginIcon}
            onPress={() => Alert.alert("Facebook Login")}
          />
          <FontAwesome
            name="google"
            color="#000"
            size={24}
            style={styles.socialLoginIcon}
            onPress={() => Alert.alert("Google Login")}
          />
          <FontAwesome
            name="instagram"
            color="#000"
            size={24}
            style={styles.socialLoginIcon}
            onPress={() => Alert.alert("Instagram Login")}
          />
        </View>

        <View style={styles.footerLinksContainer}>
          <View style={styles.linkContainer}>
            <Text style={styles.subtitle}>Don't have an account?</Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text style={styles.linkText}>Sign Up</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => router.push("/forgotpassword")}>
            <Text style={styles.forgotPasswordLinkText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

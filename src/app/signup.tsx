import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "./style";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";

export default function Signin() {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [isPasswordConfirmationError, setIsPasswordConfirmationError] =
    React.useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordConfirmation = () => {
    if (password !== passwordConfirmation) {
      setIsPasswordConfirmationError(true);
    } else {
      setIsPasswordConfirmationError(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { gap: 20 }]}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/icon.png")} />
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up For Free</Text>
          <Text style={styles.subtitle}>Sign Up In one minute for free!</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Email Address</Text>
          <View style={styles.formInput}>
            <FontAwesome name="envelope" color="#000" size={18} />
            <TextInput placeholder="Enter your email" />
          </View>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Password</Text>
          <View
            style={[
              styles.formInput,
              { justifyContent: "space-between" },
              isPasswordConfirmationError
                ? { borderColor: "red" }
                : { borderColor: "#85CC18" },
            ]}
          >
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
                value={password}
                onChangeText={setPassword}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Password Confirmation</Text>
          <View
            style={[
              styles.formInput,
              { justifyContent: "space-between" },
              isPasswordConfirmationError
                ? { borderColor: "red" }
                : { borderColor: "#85CC18" },
            ]}
          >
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
                placeholder="Enter your Password again"
                secureTextEntry={!showPasswordConfirmation}
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              />
            </View>
            <Pressable
              onPress={() =>
                setShowPasswordConfirmation(!showPasswordConfirmation)
              }
            >
              <FontAwesome
                name={showPasswordConfirmation ? "eye-slash" : "eye"}
                color="#CDCDCD"
                size={18}
              />
            </Pressable>
          </View>
        </View>
        {isPasswordConfirmationError && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 10,
              backgroundColor: "#FEE5E7",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Foundation name="alert" color="red" size={18} />
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              ERROR:Password does not match
            </Text>
          </View>
        )}
        <Pressable style={styles.button} onPress={handlePasswordConfirmation}>
          <Text style={styles.buttonText}>Sign Up</Text>
          <FontAwesome name="long-arrow-right" color="white" size={24} />
        </Pressable>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLinksContainer}>
          <View style={styles.linkContainer}>
            <Text style={styles.subtitle}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/signin")}>
              <Text style={styles.linkText}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

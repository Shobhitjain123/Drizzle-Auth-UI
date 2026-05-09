import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ResetType from "@/components/ResetType";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const forgotpassword = () => {
  const resetType = [
    {
      id: 1,
      name: "Email Address",
      description: "Send via email address securily.",
      icon: "envelope",
      type: "email",
    },
    {
      id: 2,
      name: "2 Factor Authentication",
      description: "Send via 2FA Securely",
      icon: "shield",
      type: "2fa",
    },
    {
      id: 3,
      name: "Google Authenticator",
      description: "Send via Authenticator securily.",
      icon: "lock",
      type: "google",
    },
  ];
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            width: "85%",
            marginHorizontal: "auto",
            height: "100%",
          }}
        >
          <View style={{ gap: 10 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
            >
              Forgot Password
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#60646C",
                alignSelf: "flex-start",
              }}
            >
              Select which method you'd like to reset.
            </Text>
          </View>
          <View style={{ width: "100%", gap: 10 }}>
            {resetType.map((item) => (
              <ResetType
                key={item.id}
                name={item.name}
                description={item.description}
                icon={item.icon}
                type={item.type}
              />
            ))}
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
            <FontAwesome name="long-arrow-right" color="white" size={24} />
          </Pressable>
        </View>
      </SafeAreaView>
      <FontAwesome
        name="lock"
        color="#CDCDCD"
        size={250}
        style={styles.lockIcon}
      />
    </>
  );
};

export default forgotpassword;

const styles = StyleSheet.create({
  lockIcon: {
    position: "absolute",
    bottom: -70,
    left: 0,
  },
  button: {
    backgroundColor: "#85CC18",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

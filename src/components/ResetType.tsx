import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
interface ResetTypeProps {
  name: string;
  description: string;
  icon: string;
  type: string;
}
const ResetType = ({ name, description, icon }: ResetTypeProps) => {
  return (
    <Pressable>
      {({ pressed }) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            padding: 20,
            borderRadius: 40,
            borderWidth: pressed ? 2 : 0,
            borderColor: pressed ? "#78BA14" : "#fff",
            shadowColor: pressed ? "#78BA14" : "#000",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: pressed ? 0.5 : 0,
            shadowRadius: pressed ? 3.84 : 3.84,
            elevation: pressed ? 5 : 0,
            backgroundColor: "#FFFFFF",
          }}
        >
          <FontAwesome
            name={icon as keyof typeof FontAwesome.glyphMap}
            color={pressed ? "#80BD0F" : "#000"}
            size={24}
            style={{
              padding: 15,
              backgroundColor: pressed ? "#D6EABA" : "#F0F0F0",
              borderRadius: 20,
            }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 12, color: "#60646C" }}>
              {description}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default ResetType;

const styles = StyleSheet.create({});

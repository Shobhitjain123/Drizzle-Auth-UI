import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F6F6F6",
    paddingVertical: 50,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#60646C",
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#208AEF",
  },
  form: {
    width: "85%",
    gap: 25,
  },
  formItem: {
    gap: 8,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#85CC18",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  button: {
    backgroundColor: "#85CC18",
    padding: 10,
    borderRadius: 20,
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
  socialLoginContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    padding: 10,
  },
  socialLoginIcon: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#C9C9C9",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  footer: {
    flex: 1 / 2,
    gap: 20,
  },

  footerLinksContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    flexDirection: "row",
    gap: 6,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#85CC18",
    textDecorationLine: "underline",
  },
  forgotPasswordLinkText: {
    color: "#85CC18",
    fontSize: 14,
    fontWeight: "normal",
    textDecorationLine: "underline",
  },
});

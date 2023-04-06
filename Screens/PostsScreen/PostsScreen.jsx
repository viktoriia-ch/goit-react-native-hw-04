import { View, Image, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <Image source={require("../../assets/images/User.png")} />
        <View style={styles.textBlock}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },

  infoBlock: {
    flexDirection: "row",
    width: 230,
    height: 60,
    marginLeft: 16,
    marginTop: 32,
  },

  textBlock: {
    marginLeft: 8,
    alignSelf: "center",
  },

  name: {
    color: "#212121",
    fontWeight: 700,
  },
});

export default PostsScreen;

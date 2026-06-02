import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView
} from "react-native";

export default function NailsScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nails</Text>
      </View>

      <Text style={styles.title}>Nail Techs</Text>

      {/* Nail Tech 1 */}
      <View style={styles.card}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/nails1.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/nails2.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.business}>Nailsbyheavennn</Text>
        <Text style={styles.rating}>Rating: 4.9 / 5 ★★★★★</Text>

        <Text style={styles.services}>
          Services: Nails & Toe Tech (Stiletto specialist)
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://instagram.com/nailsbyheavennn")
          }
        >
          <Text style={styles.buttonText}>View Instagram</Text>
        </TouchableOpacity>
      </View>

      {/* Nail Tech 3 */}
      <View style={styles.card}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/nails5.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/nails6.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.business}>Nails_bynaymariee</Text>
        <Text style={styles.rating}>Rating: 4.9 / 5 ★★★★★</Text>

        <Text style={styles.services}>
          Services: Self Taught Nail Tech (Gel X ONLY)
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://instagram.com/nails_bynaymariee")
          }
        >
          <Text style={styles.buttonText}>View Instagram</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    backgroundColor: "#111",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  backArrow: {
    fontSize: 34,
    color: "white",
    marginRight: 15,
  },

  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    color: "#003C71"
  },

  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 20
  },

  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },

  image: {
    width: "49%",
    height: 350,
    borderRadius: 10
  },

  business: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },

  rating: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#444"
  },

  services: {
    fontSize: 15,
    marginBottom: 12
  },

  button: {
    backgroundColor: "#003C71",
    padding: 12,
    borderRadius: 8
  },

  buttonText: {
    color: "#FFD100",
    textAlign: "center",
    fontWeight: "bold"
  }
});
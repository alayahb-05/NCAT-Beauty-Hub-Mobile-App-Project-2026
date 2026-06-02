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

export default function BarbersScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Barbers</Text>
      </View>

      <Text style={styles.title}>Barbers</Text>

      {/* Barber 1 */}
      <View style={styles.card}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/barber1.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/barber2.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.business}>Precision.cutz_</Text>
        <Text style={styles.rating}>Rating: 4.8 / 5 ★★★★★</Text>

        <Text style={styles.services}>
          Services: Fade cuts, Line-up, Eyebrow Slit, Beard Shape-Up
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/precision.cutz__/")
          }
        >
          <Text style={styles.buttonText}>View Instagram</Text>
        </TouchableOpacity>
      </View>

      {/* Barber 2 */}
      <View style={styles.card}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/barber3.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/barber4.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.business}>Cutzzbymarq</Text>
        <Text style={styles.rating}>Rating: 4.9 / 5 ★★★★★</Text>

        <Text style={styles.services}>
          Services: Full Haircut, Line up
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://instagram.com/cutzzbymarq")
          }
        >
          <Text style={styles.buttonText}>View Instagram</Text>
        </TouchableOpacity>
      </View>

      {/* Barber 3 */}
      <View style={styles.card}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/barber5.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/barber6.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.business}>Ap.kutz</Text>
        <Text style={styles.rating}>Rating: 4.9 / 5 ★★★★★</Text>

        <Text style={styles.services}>
          Services: Haircut (In Dorm or Off Campus), Line Up & Enchancements
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL("https://instagram.com/ap.kutz")
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
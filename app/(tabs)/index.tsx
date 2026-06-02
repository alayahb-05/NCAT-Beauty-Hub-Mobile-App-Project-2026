import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NCAT Beauty Hub</Text>
      <Text style={styles.subtitle}>
        Find beauty and grooming services near NCAT
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/hair")}
      >
        <Text style={styles.buttonText}>Hair</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/barbers")}
      >
        <Text style={styles.buttonText}>Barbers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/nails")}
      >
        <Text style={styles.buttonText}>Nails</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/lashes")}
      >
        <Text style={styles.buttonText}>Lashes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003C71",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFD100",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    width: 220,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text, View } from "react-native";

export default function Activity({ activity }: { activity: ActivityType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {new Date(activity.date).toLocaleString()}
      </Text>
      <Text style={styles.steps}>
        Steps: {activity.steps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  date: {
    fontSize: 12,
    color: "#6B7280",
  },
  steps: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
  },
});

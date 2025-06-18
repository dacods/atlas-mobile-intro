import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { useActivities } from "@/hooks/useActivities";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { FlashList } from "@shopify/flash-list"
import Activity from "@/components/Activity";
import SwipeableActivity from "@/components/SwipeableActivity";

export default function Index() {
  const {activities, deleteAllActivities} = useActivitiesContext();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          renderItem={({ item }) => <SwipeableActivity activity={item} />}
          data={activities}
          estimatedItemSize={50}
        />
      </View>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add activity</Text>
      </Link>
      <Pressable
          style={[styles.deleteButton]}
          onPress={deleteAllActivities}
        >
          <Text style={styles.buttonText}>Delete All Activities</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF9E6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    flex: 1,
    paddingTop: 45,
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
});
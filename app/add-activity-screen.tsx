import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
    const [steps , setSteps] = useState<number>(0);
    const {insertActivity} = useActivitiesContext();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Activity</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter steps"
                placeholderTextColor="black"
                keyboardType="number-pad"
                onChangeText={(value) => setSteps(parseInt(value))}
            />
            <Pressable style={styles.addbutton} onPress={() => {
                insertActivity(steps, new Date());
                router.push("/")
            }}>
                <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            <Link style={styles.button} href={"/"} replace>
                <Text style={styles.buttonText}>Go back</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEF9E6"
    },
    addbutton: {
        backgroundColor: "#1ED2AF",
        padding: 16,
        width: "100%",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#D00414",
        padding: 16,
        width: "100%",
        textAlign: "center",
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        },
    input: {
        borderWidth: 2,
        borderColor: "black",
        width: "100%",
        padding: 12,
        fontSize: 16,
        marginBottom: 24,
        backgroundColor: "white",
        },
});
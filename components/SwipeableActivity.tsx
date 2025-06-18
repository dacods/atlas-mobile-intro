import { StyleSheet, Text, View } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { useActivitiesContext } from "./ActivitiesProvider";

export default function SwipeableActivity({ activity }: { activity: any}) {
    const { deleteActivity } = useActivitiesContext();
    return (
        <View key={activity.id} style={styles.view}>
            <Swipeable
                renderLeftActions={() => <Action text="Delete" />}
                renderRightActions={() => <Action text="Delete" />}
                onSwipeableOpen={() => {
                    deleteActivity(activity.id);
                }}
            >
                <Activity activity={activity} />
            </Swipeable>
        </View>
    );
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.actionView}>
            <Text style={styles.actionText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        borderWidth: 2,
        borderColor: "black",
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: "white",
    },
    actionView: {
        backgroundColor: "#D00414",
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        padding: 10,
    },
    actionText: {

    },
});
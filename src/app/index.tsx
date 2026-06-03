import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Total Habits: 3</Text>
            <TouchableOpacity onPress={() => router.navigate('/StatsScreen')}><Text>View Stats</Text></TouchableOpacity>

            <Text>Habit 1</Text>
            <Text>Habit 2</Text>
            <Text>Habit 3</Text>
            <TouchableOpacity onPress={() => router.navigate('/NewHabitScreen')}><Text>Add Habit</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
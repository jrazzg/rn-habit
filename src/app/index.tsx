import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text>Total Habits: 3</Text>
                <TouchableOpacity onPress={() => router.navigate('/StatsScreen')}><Text>View Stats</Text></TouchableOpacity>
            </View>

            <View style={styles.habits}>
                <View style={styles.habit}>
                    <Text>Habit 1</Text>
                </View>
                <View style={styles.habit}>
                    <Text>Habit 1</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.navigate('/NewHabitScreen')}><Text style={styles.btnAddHabit}>Add Habit</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
    },
    topContainer: {
        backgroundColor: '#bbbbbb',
        padding: 5,
        marginBottom: 20,
    },
    btnAddHabit: {
        backgroundColor: '#7a82f3',
        padding: 5,
        color: '#ffffff',
    },
    habit: {
        display: 'flex',
        backgroundColor: '#9b9b9b',
        minWidth: 120,
        minHeight: 120,
        borderRadius: 10,
        padding: 10,
    },
    habits: {
        gap: 10,
        marginBottom: 10,
    }
});
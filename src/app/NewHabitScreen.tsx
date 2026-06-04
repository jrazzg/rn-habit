import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NewHabitScreen() {
    const [habitName, setHabitName] = useState<string>('');
    const [test, setTest] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput onChangeText={val => setHabitName(val)}/>
            <Text>Category</Text>
            <TouchableOpacity><Text>Save</Text></TouchableOpacity>
            <Text>Value: {test}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
    }
});
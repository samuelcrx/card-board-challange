import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps {
    name: string;
    date: string;
    location: string;
    priority: string;
    onPress: () => void;
}

const Task: React.FC<TaskProps> = ({ name, date, location, priority, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.location}>{location}</Text>
            <View style={[styles.priority, { backgroundColor: getPriorityColor(priority) }]}>
                <Text style={styles.priorityText}>{priority}</Text>
            </View>
        </TouchableOpacity>
    );
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'baixa':
            return '#87ceeb';
        case 'alta':
            return '#ffa500';
        case 'crítica':
            return '#ff0000';
        default:
            return '#ccc';
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        marginBottom: 8,
    },
    priority: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    priorityText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Task;

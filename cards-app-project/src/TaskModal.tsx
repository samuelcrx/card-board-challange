import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskModalProps {
  task: {
    name: string;
    date: string;
    location: string;
    priority: string;
    description: string;
  };
  visible: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>{task.name}</Text>
        <Text style={styles.date}>{task.date}</Text>
        <Text style={styles.location}>{task.location}</Text>
        <View style={[styles.priority, { backgroundColor: getPriorityColor(task.priority) }]}>
          <Text style={styles.priorityText}>{task.priority}</Text>
        </View>
        <Text style={styles.description}>{task.description}</Text>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  priority: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  priorityText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  closeButton: {
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  closeButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TaskModal;

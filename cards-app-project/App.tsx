import { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Task from './src/Task';
import TaskModal from './src/TaskModal';
import { tasksData } from './src/mocks/tasks'

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filterTasks = (task: any) => {
    if (searchQuery === '') {
      return true;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      task.name.toLowerCase().includes(lowerCaseQuery) ||
      task.location.toLowerCase().includes(lowerCaseQuery) ||
      task.priority.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const openTaskModal = (task: any) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const closeTaskModal = () => {
    setSelectedTask(null);
    setModalVisible(false);
  };

  const renderTask = ({ item }: { item: any }) => (
    <Task
      name={item.name}
      date={item.date}
      location={item.location}
      priority={item.priority}
      onPress={() => openTaskModal(item)}
    />
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Pesquisar"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={tasksData.filter(filterTasks)}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
      {!!selectedTask && (
        <TaskModal task={selectedTask} visible={modalVisible} onClose={closeTaskModal} />
      )}
    </View>
  );
};

const RootStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={App} />
  </Stack.Navigator>
);

const AppContainer: React.FC = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default AppContainer;


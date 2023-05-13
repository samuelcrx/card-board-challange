import React, { useState } from 'react';
import KanbanColumn from '../KanbanColumn/index';
import './styles.css';

const initialTasks = [
    { id: 1, name: 'Tarefa 1', status: 'A fazer' },
    { id: 2, name: 'Tarefa 2', status: 'Em andamento' },
    { id: 3, name: 'Tarefa 3', status: 'Concluído' },
];

const KanbanBoard: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const moveTask = (taskId: number, newStatus: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, status: newStatus };
                }
                return task;
            })
        );
    };

    const tasksByStatus = (status: string) => {
        return tasks.filter(task => task.status === status);
    };

    const onMoveTask = (taskId: number, newStatus: string) => {
        moveTask(taskId, newStatus);
    };

    return (
        <div className="kanban-board">
            <KanbanColumn
                title="A fazer"
                tasks={tasksByStatus('A fazer')}
                onMoveTask={onMoveTask}
            />
            <KanbanColumn
                title="Em andamento"
                tasks={tasksByStatus('Em andamento')}
                onMoveTask={onMoveTask}
            />
            <KanbanColumn
                title="Concluído"
                tasks={tasksByStatus('Concluído')}
                onMoveTask={onMoveTask}
            />
        </div>
    );
};

export default KanbanBoard;

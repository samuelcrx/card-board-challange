import React from 'react';
import TaskCard from '../TaskCard';
import './styles.css'

interface KanbanColumnProps {
    title: string;
    tasks: {
        id: number;
        name: string;
        status: string;
    }[];
    onMoveTask: (taskId: number, newStatus: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
    title,
    tasks,
    onMoveTask,
}) => {
    return (
        <div className="kanban-column">
            <h2>{title}</h2>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    name={task.name}
                    status={task.status}
                    onMove={() => onMoveTask(task.id, getNextStatus(task.status))}
                />
            ))}
        </div>
    );
};

const getNextStatus = (currentStatus: string) => {
    switch (currentStatus) {
        case 'A fazer':
            return 'Em andamento';
        case 'Em andamento':
            return 'Concluído';
        case 'Concluído':
            return 'A fazer';
        default:
            return currentStatus;
    }
};

export default KanbanColumn;

import React from 'react';
import './styles.css';

interface TaskCardProps {
    name: string;
    status: string;
    onMove: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ name, status, onMove }) => {
    return (
        <div className="task-card">
            <div className="task-card-header">
                <h3>{name}</h3>
                <span className="task-card-status">{status}</span>
            </div>
            <button className="move-button" onClick={onMove}>
                Mover
            </button>
        </div>
    );
};

export default TaskCard;

import React from 'react';
import './TaskModal.css';

interface TaskModalProps {
    task: {
        name: string;
        date: string;
        location: string;
        priority: string;
    };
    onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose }) => {
    return (
        <div className="task-modal-overlay">
            <div className="task-modal">
                <div className="task-modal-header">
                    <h3>{task.name}</h3>
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="task-modal-body">
                    <p>Date: {task.date}</p>
                    <p>Location: {task.location}</p>
                    <p>Priority: {task.priority}</p>
                    {/* Add additional task details as needed */}
                </div>
            </div>
        </div>
    );
};

export default TaskModal;

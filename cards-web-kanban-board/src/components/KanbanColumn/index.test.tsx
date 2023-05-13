import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import KanbanColumn from './index';

const mockTasks = [
    { id: 1, name: 'Tarefa 1', status: 'A fazer' },
    { id: 2, name: 'Tarefa 2', status: 'Em andamento' },
];

test('renders kanban column correctly', () => {
    const { getByText } = render(
        <KanbanColumn
            title="A fazer"
            tasks={mockTasks}
            onMoveTask={() => { }}
        />
    );

    expect(getByText('A fazer')).toBeInTheDocument();
    expect(getByText('Tarefa 1')).toBeInTheDocument();
    expect(getByText('Tarefa 2')).toBeInTheDocument();
});

test('calls onMoveTask with correct parameters when task is moved', () => {
    const handleMoveTask = jest.fn();
    const { getByText } = render(
        <KanbanColumn
            title="A fazer"
            tasks={mockTasks}
            onMoveTask={handleMoveTask}
        />
    );

    fireEvent.click(getByText('Mover'));
    expect(handleMoveTask).toHaveBeenCalledTimes(1);
    expect(handleMoveTask).toHaveBeenCalledWith(1, 'Em andamento');
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import KanbanBoard from './index';

const mockTasks = [
    { id: 1, name: 'Tarefa 1', status: 'A fazer' },
    { id: 2, name: 'Tarefa 2', status: 'Em andamento' },
    { id: 3, name: 'Tarefa 3', status: 'Concluído' },
];

test('renders kanban board correctly', () => {
    const { getByText } = render(<KanbanBoard />);

    expect(getByText('A fazer')).toBeInTheDocument();
    expect(getByText('Em andamento')).toBeInTheDocument();
    expect(getByText('Concluído')).toBeInTheDocument();
});

test('moves task to the next status when "Mover" button is clicked', () => {
    const { getByText } = render(<KanbanBoard />);

    // Find the task card with the name "Tarefa 1" in the "A fazer" column
    const taskCard = getByText('Tarefa 1');

    fireEvent.click(taskCard); // Click the task card to move it

    // Check if the task card is moved to the next column ("Em andamento")
    expect(getByText('Em andamento')).toBeInTheDocument();
    expect(getByText('Tarefa 1')).toBeInTheDocument();
});

test('does not move task if already in the last column', () => {
    const { getByText } = render(<KanbanBoard />);

    // Find the task card with the name "Tarefa 3" in the "Concluído" column
    const taskCard = getByText('Tarefa 3');

    fireEvent.click(taskCard); // Click the task card to move it

    // Check if the task card remains in the "Concluído" column
    expect(getByText('Concluído')).toBeInTheDocument();
    expect(getByText('Tarefa 3')).toBeInTheDocument();
});

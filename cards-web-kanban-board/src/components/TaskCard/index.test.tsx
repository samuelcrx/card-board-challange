import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskCard from './index';

test('renders task card correctly', () => {
    const { getByText } = render(
        <TaskCard name="Tarefa 1" status="A fazer" onMove={() => { }} />
    );

    expect(getByText('Tarefa 1')).toBeInTheDocument();
    expect(getByText('A fazer')).toBeInTheDocument();
});

test('calls onMove when move button is clicked', () => {
    const handleMove = jest.fn();
    const { getByText } = render(
        <TaskCard name="Tarefa 1" status="A fazer" onMove={handleMove} />
    );

    fireEvent.click(getByText('Mover'));
    expect(handleMove).toHaveBeenCalledTimes(1);
});

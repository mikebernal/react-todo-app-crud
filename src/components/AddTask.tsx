// React
import React from 'react'

// Third-party libraries
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface AddTaskBtnProps {

}

export const AddTask: React.FC<AddTaskBtnProps> = ({}) => {
    return (
        <div className="addBtn">
            <Button variant="contained"><AddIcon /> Add Task</Button>
        </div>
    );
}

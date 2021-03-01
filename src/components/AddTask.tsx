// React
import React, { useState } from 'react';

// Third-party libraries
import Modal from '@material-ui/core/Modal';
import InputBase from '@material-ui/core/InputBase';
import { FormControl, InputLabel, Switch } from '@material-ui/core';

// Styles
import {
    createStyles,
    fade,
    Theme,
    withStyles,
} from '@material-ui/core/styles';
interface AddTaskBtnProps {

}

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '600px',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
)(InputBase);

export const AddTask: React.FC<AddTaskBtnProps> = ({}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (e: any) => {
        setShowModal((prevShowModal) => (!prevShowModal));
    }

    const save = () => {

    };

    const addForm = () => {
        return (
            <Modal open={showModal} onClose={toggleModal} className="modal">
                <div className="formContainer">
                    <div>
                        {/* Close button */}
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <form className="addForm">
                        <div>
                            {/* Task name */}
                            <FormControl>
                                <InputLabel shrink htmlFor="addtaskname">Task name</InputLabel>
                                <BootstrapInput name="addtaskname" />
                            </FormControl>
                        </div>

                        <div>
                            {/* User name */}
                            <FormControl>
                                <InputLabel shrink htmlFor="addusername">User name</InputLabel>
                                <BootstrapInput name="addusername" />
                            </FormControl>
                        </div>
                        <div>
                            {/* isCompleted */}
                            <FormControl>
                                <InputLabel shrink htmlFor="addiscompleted">Completed</InputLabel>
                                <br />
                                <Switch name="addiscompleted"/>
                            </FormControl>
                        </div>

                        {/* Save */}
                        <button name="save" onClick={save} className="btn">Save</button>
                    </form>
                </div>
            </Modal>
        );
    }

    return (
        <div className="addBtn">
            <button name="add" onClick={toggleModal} className="btn">Add Task</button>
            {addForm()}
        </div>
    );
}

import { useAppUpdate } from '../../AppContext';

// Third-party libraries
import { FormControl, InputLabel } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

// Styles
import {
    createStyles,
    fade,
    Theme,
    withStyles,
  } from '@material-ui/core/styles';

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

export const TaskFilter = () => {
  let { updateFormValues } = useAppUpdate();

    return (
      <>
        <FormControl>
          <InputLabel shrink htmlFor="task">Task name</InputLabel>
          <BootstrapInput name="task" onChange={updateFormValues}/>
        </FormControl>
      </>
    );
}

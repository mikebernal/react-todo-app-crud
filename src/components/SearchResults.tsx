// Context
import { useApp, useAppUpdate } from '../AppContext';

// Models
import { TodoModel } from '../models/TodoModel';

// Third-party libraries
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    maxWidth: 1230,
    margin: '1.2em auto',
  },
});

// Action icons
const renderBool = (isCompleted: boolean) => {
  if (!isCompleted) {
    return <NotInterestedIcon />
  }

  return <CheckCircleOutlineIcon />;
};

export const SearchResults = () => {
  let { todos, filterByName } = useApp();
  const { deleteTask } = useAppUpdate();

  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>To do</TableCell>
            <TableCell align="center">Completed</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {(todos)?.map((todo: TodoModel, i: number) => (
            <TableRow key={todo.id} className="rowResult">
              <TableCell component="th">
                {todo.name}
              </TableCell>
              <TableCell align="center">{renderBool(todo.isComplete)}</TableCell>
              <TableCell align="center"><span className="cta" ><EditIcon/></span></TableCell>
              <TableCell align="center"><span className="cta" onClick={() => deleteTask(todo)}><DeleteIcon/></span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

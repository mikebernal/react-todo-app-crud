// React
import { useEffect } from 'react';

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
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import axios from "axios";

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

// Todo: render user tasks relationship (`/user/:id/todos`)
export const SearchResults = () => {
  let { todos, todosFilterByName } = useApp();
  let results: any[] = [];

  const classes = useStyles();

  const deleteTask = async (todo: any) => (
    await axios.delete(`api/todo/${todo.id}/delete`).then((res) => (
      console.log(todo.name + ' has been deleted successfully!')
      // Todo: Update search results here
    ))
  );

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>To do</TableCell>
            <TableCell align="center">Completed</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(todosFilterByName||todos)?.map((todo: TodoModel, i: number) => (
            <TableRow key={todo.id} className="rowResult">
              <TableCell component="th">
                {todo.name}
              </TableCell>
              <TableCell align="center">{renderBool(todo.isComplete)}</TableCell>
              <TableCell align="center"><span className="cta" onClick={() => deleteTask(todo)}><DeleteIcon/></span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

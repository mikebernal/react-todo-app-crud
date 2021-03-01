// React
import React from 'react';

// Context
import { useAppUpdate } from '../../AppContext';

// Third-party libraries
import { Box, FormControl, InputLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

export const IsCompleteFilter: React.FC = () => {
  let { updateFormValues } = useAppUpdate();

  return (
    <Box pl={3} component="span">
      <FormControl>
        <InputLabel shrink htmlFor="completedSwitch">
          Completed
        </InputLabel>
        <br />
        <Switch
          onChange={updateFormValues}
          name="completed"
        />
      </FormControl>
    </Box>
  );
}

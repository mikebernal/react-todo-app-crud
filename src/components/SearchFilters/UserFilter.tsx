// Context
import { useApp, useAppUpdate } from '../../AppContext';

// Third-party libraries
import { FormControl, InputLabel } from '@material-ui/core';
import Select from 'react-select';

export const UserFilter = () => {
    let { users } = useApp();
    const handleChange = useAppUpdate();

    const onChange = (value: any, { action, removedValue }: any) => {
      const e = {
        target: {
          name: 'user',
          value: '',
        }
      };

      if (action === 'select-option') {
        e.target.value = value.label;
        handleChange(e);
      }
    }

    let options: any = [{
      value: 'all',
      label: 'All'
    }];

    {users?.map((user: any) => {
      options.push({
        value: user.firstName,
        label: user.firstName 
      })
    })}

    return (
      <FormControl>
        <InputLabel shrink htmlFor="userOptionList">
          User
        </InputLabel>
        <Select
          defaultValue={options[0]}
          defaultOptions
          name="user"
          options={options}
          className="selectComponent"
          isSearchable
          onChange={onChange}
        />
      </FormControl>
    );
};

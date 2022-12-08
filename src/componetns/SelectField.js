import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectField = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState("");

  return (
    <div>
      <Box width="100%" mt={4}>
        <FormControl size="small" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={(e)=>setValue(e.targrt.value)}>
            {options.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectField;

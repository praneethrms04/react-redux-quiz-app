import { FormControl, TextField } from "@mui/material"
import { Box } from "@mui/system"

const TextFieldComp= () => {
  const handleChange=()=>{}
  return (
    <div>
     <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
      
    </div>
  )
}

export default TextFieldComp

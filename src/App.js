import React, { useState } from "react";
import {
  Container,
  IconButton,
  TextField,
  Button,
  styled,
  Icon,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

const StyledForm = styled("form")(({ theme }) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
  "& .MuiButton-root": {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" },
  ]);
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("input fields",inputFields);
}
  const handleInputChange = (index, event) => {
    const values=[...inputFields];
    values[index][event.target.name]=event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveField = (index) => {
   const values=[...inputFields];
values.splice(index,1);
setInputFields(values); 
   };

  return (
    <Container>
      <div>Add New Number</div>
      <StyledForm onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
              onChange={(event) => handleInputChange(index, event)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleInputChange(index, event)}
            />
            <IconButton onClick={() => handleRemoveField(index)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddField}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendIcon>send</SendIcon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </StyledForm>
    </Container>
  );
};

export default App;

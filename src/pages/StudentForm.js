import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

function StudentForm() {

  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const history = useHistory();


  console.log('history: ', history);
  return (
    <form onSubmit={(event) => addStudent(event, name, age, history)}>
      <label htmlFor="name">Student Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter name here..."
        required 
        onChange={(event) => setName(event.target.value)}/>

      <label htmlFor="age">Student Name</label>
      <input
        type="number"
        id="age"
        placeholder="Enter age here..."
        required
        onChange={(event) => setAge(event.target.value)} />

        <button type="submit">Add</button>
    </form>
  )
}
export default StudentForm;
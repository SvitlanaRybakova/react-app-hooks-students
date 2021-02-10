import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

function Programming() {
  // что бы воспользоваться данными
  const { students, removeStudent } = useContext(StudentContext);
  console.log(students);
  return (
    <div>
      <h1>The programming course:</h1>
      <h3>Students: </h3>
      {students.map(student => {
        return (
          <div className="studentCard" key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <button className="remove-btn" onClick={() => {removeStudent(student)}}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
export default Programming;
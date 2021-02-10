import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

function Math(){
const { students } = useContext(StudentContext);

  return(
    <div>
      <h1>The math course:</h1>
      <h3>Students:</h3>
      {students.map(student => {
        return (
          <div className="studentCard" key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Math;
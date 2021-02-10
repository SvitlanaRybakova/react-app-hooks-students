import { createContext, useState } from 'react'

export const StudentContext = createContext();

// могу назвать как угодно, но принято называть также как переменную, которой присвоено createContext() + Provider
function StudentContextProvider(props) {
  console.log(props.children);
  const [students, setStudents] = useState([
  {
    id:2,
    name:'Bob',
    age: 23
  },
  {
    id:1,
    name:'Alicia',
    age: 32
  }
  ]);

  function removeStudent (studentToRemove){
    // console.log(studentToRemove);
    const updateStudents = students.filter(student => student.id !== studentToRemove.id);
    // console.log(updateStudents);
    setStudents(updateStudents)
  }

  return (
    <StudentContext.Provider value={{students, removeStudent}}>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider;
import { createContext, useEffect, useState } from 'react'

export const StudentContext = createContext();

// могу назвать как угодно, но принято называть также как переменную, которой присвоено createContext() + Provider
function StudentContextProvider(props) {
  console.log(props.children);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('studentsKey')) || [
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

  const [isStudentChange, setStudentsChanged] = useState(false);

  useEffect(() => {
    if(isStudentChange){
      localStorage.setItem('studentsKey', JSON.stringify(students))
    }
    setStudentsChanged(false);
  },[isStudentChange])

  function removeStudent (studentToRemove){
    // console.log(studentToRemove);
    const updateStudents = students.filter(student => student.id !== studentToRemove.id);
    // console.log(updateStudents);
    setStudents(updateStudents);
    setStudentsChanged(true)
  }

  function addStudent(event, name, age, history){
    event.preventDefault();
   const newStudent = {
     id: students[0].id+1,
     name,
     age
   }

   setStudents([newStudent, ...students]);
   setStudentsChanged(true)
   history.push('/');
  }

  return (
    <StudentContext.Provider value={{students, removeStudent, addStudent}}>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider;
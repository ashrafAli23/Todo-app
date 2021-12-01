import React,{useState} from "react";
import Form from "./components/form";
import Listes from "./components/Listes";

function App() {
  const [state , setState] = useState({
    course: [  ],
    current: "",
    });

    const updateCourse = (e) => {
      setState({...state , current: e.target.value });
    }

    const addCourse = (e) => {
      e.preventDefault();
      let current = state.current;
      let courses = state.course;
      if (!current) {
        alert("enter a task")
      }else{
        courses.push({name: current})
        setState({
          ...state ,
          courses: courses,
          current: "",
        })
      }
    }

    let deleteCourses = (index) => {
      let courses = state.course;
      courses.splice(index, 1);
      setState({
        ...state ,
        courses: courses,
      })
    }

  let listCourse = state.course.map((data , index) => {
    return <Listes data={data} key={index} index={index} delete={deleteCourses} />
  })

  return (
    <section>
      <div className="container">
        <h2 className="title">Todo List</h2>
        <Form updateCourse={updateCourse} addCourse={addCourse} space={state.current} />
        {
          state.course.length === 0 ?
          <h2 className="title">No Tasks Found</h2>
          :
          <ul>{listCourse}</ul>
        }
      </div>
    </section>
  );
}

export default App;

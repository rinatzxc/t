import Course from "./components/Course";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack Application Development",
      parts: [
        {
          topic: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          topic: "Using Props to Pass Data",
          exercises: 7,
          id: 2
        },
        {
          topic: "State of a Component",
          exercises: 14,
          id: 3
        },
        {
          topic: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          topic: "Routing",
          exercises: 3,
          id: 1
        },
        {
          topic: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      {course.map(c => <Course key={c.id} course={c}/>)}
    </div>
  );
}

export default App;

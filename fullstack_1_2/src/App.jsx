/* eslint-disable react/prop-types */
const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
            
        </div>
    )
}

const Part = (props) => {
    return(
    <div>
        <p>{props.part[props.index].name} {props.part[props.index].exercise}</p>
        </div>
    )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
          <Part part={props.parts} index={0} />
          <Part part={props.parts} index={1} />
          <Part part={props.parts} index={2} />
    </div>
  )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            { name: 'Fundamentals of React', exercise: 10 },
            { name: 'Using props to pass data', exercise: 7 },
            { name: 'State of component', exercise: 14 }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts } />
            <Total parts={course.parts} />
        </div>
    )
}

export default App
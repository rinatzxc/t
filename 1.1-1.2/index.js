import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Разработка приложения с помощью части стека'
  const parts = [
    {
      name: 'Основы React',
      exercises: 10
    },
    {
      name: 'Использование props для передачи данных',
      exercises: 7
    },
    {
      name: 'Состояние компонента',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}

const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

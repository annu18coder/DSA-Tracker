import Form from './components/ProblemForm'
import { useState } from 'react'
import ProblemCard from './components/ProblemCard'
import './index.css'


function App() {

  const [problems, setProblems] = useState([]);


  function addProblem(data) {
    setProblems([
      ...problems,
      data
    ]);
    console.log(data);
  }


  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        DSA Tracker
      </h1>


      <Form addProblem={addProblem} />


      <h3 className="text-2xl font-semibold text-center mt-10 mb-5">
        Added Problems:
      </h3>


      <div className="flex flex-col items-center gap-4">

        {
          problems.map((item) => (

            <ProblemCard
              key={item.id}
              data={item}
            />

          ))
        }

      </div>

      <footer className="mt-16 bg-gray-900 text-white p-8 text-center">

        <h2 className="text-2xl font-bold mb-2">
          DSA Tracker
        </h2>

        <p className="text-gray-400 mb-5">
          Track your coding journey 🚀
        </p>


        <a
          href="https://digitalheroesco.com"
          target="_blank"
          className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          Built for Digital Heroes
        </a>


        <div className="mt-6 border-t border-gray-700 pt-5">

          <p className="font-medium">
            Created by Ananya
          </p>

          <p className="text-gray-400 text-sm">
            ananya.dev@gmail.com
          </p>

        </div>


      </footer>
    </div>

  )
}

export default App
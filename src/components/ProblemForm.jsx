import { useState } from "react";

function Form({ addProblem }) {
    const [form, setForm] = useState({
        name: "",
        topic: "",
        difficulty: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        let oldData = JSON.parse(
            localStorage.getItem("userData")) || [];

        if (!Array.isArray(oldData)) {
            oldData = [];
        }

        const newProblem = {
            id: Date.now(),
            ...form
        };

        const updatedData = [
            ...oldData,
            newProblem
        ];

        localStorage.setItem(
            "userData",
            JSON.stringify(updatedData)
        );

        addProblem(newProblem);

        setForm({
            name: "",
            topic: "",
            difficulty: ""
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 w-[400px]"
            >

                <h1 className="text-2xl font-bold text-center mb-6">
                    DSA Tracker
                </h1>


                <label className="font-semibold">
                    Problem Name
                </label>

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter problem name"
                    className="w-full border rounded-lg p-2 mt-2 mb-4 outline-none focus:ring-2 focus:ring-blue-400"
                />


                <label className="font-semibold">
                    Topic
                </label>

                <input
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    placeholder="Array, DP, Graph..."
                    className="w-full border rounded-lg p-2 mt-2 mb-4 outline-none focus:ring-2 focus:ring-blue-400"
                />


                <label className="font-semibold">
                    Difficulty
                </label>

                <input
                    name="difficulty"
                    value={form.difficulty}
                    onChange={handleChange}
                    placeholder="Easy / Medium / Hard"
                    className="w-full border rounded-lg p-2 mt-2 mb-6 outline-none focus:ring-2 focus:ring-blue-400"
                />


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Problem
                </button>


            </form>

        </div>
    )
};

export default Form;
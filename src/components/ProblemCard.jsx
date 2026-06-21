function ProblemCard({ data }) {
    return (
        <div className="flex justify-center mt-6">

            <div className="bg-white w-87.5 p-6 rounded-xl shadow-lg border hover:shadow-xl transition">

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {data.name}
                </h2>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">
                        Topic:
                    </span> {data.topic}
                </p>

                <p className="text-gray-600">
                    <span className="font-semibold">
                        Difficulty:
                    </span> {data.difficulty}
                </p>

            </div>

        </div>
    );
};

export default ProblemCard;
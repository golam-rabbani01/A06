import Link from "next/link";

async function getWorkouts() {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export default async function Home() {
    const workouts = await getWorkouts();

    return (
        <main>
            {/* তোমার existing Home page-এর code এখানে থাকবে */}


            {/* Workout Cards */}
            <section className="mx-auto max-w-7xl px-6 py-10">
                <h2 className="mb-6 text-2xl font-bold text-white">
                    Workout Library
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout: any) => (
                        <div
                            key={workout.id}
                            className="overflow-hidden rounded-xl border border-white/10 bg-[#12151a]"
                        >
                            {/* Image */}
                            <img
                                src={workout.image}
                                alt={workout.name}
                                className="h-56 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">

                                <div className="mb-3 flex items-center justify-between">
                                    <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                                        {workout.difficulty}
                                    </span>

                                    <span className="text-sm text-yellow-400">
                                        ★ {workout.rating}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white">
                                    {workout.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    {workout.muscleGroups.join(" • ")}
                                </p>

                                <div className="mt-4 flex gap-4 text-xs text-gray-500">
                                    <span>{workout.sets} sets</span>
                                    <span>{workout.reps} reps</span>
                                    <span>{workout.duration} min</span>
                                </div>

                                <Link
                                    href={`/workouts/${workout.id}`}
                                    className="mt-5 block rounded-md bg-lime-400 px-4 py-3 text-center text-sm font-bold text-black hover:bg-lime-300"
                                >
                                    View Details →
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
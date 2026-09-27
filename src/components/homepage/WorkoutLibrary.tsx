import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
    const workouts = await getWorkouts();

    return (
        <section className="mx-auto max-w-7xl px-6 py-12">

            <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-400">
                    THE LIBRARY
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                    Choose your workout
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Pick a lift and add it to your training plan.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>

        </section>
    );
}
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/lib/api";

type Props = {
    workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#12151a] transition hover:border-lime-400/40">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-4">

                <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold uppercase text-black">
                        {workout.difficulty}
                    </span>

                    <span className="text-xs text-yellow-400">
                        ★ {workout.rating}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                    {workout.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    {workout.muscleGroups.join(" • ")}
                </p>

                <div className="mt-4 flex gap-4 text-xs text-gray-500">
                    <span>{workout.sets} sets</span>
                    <span>{workout.reps} reps</span>
                    <span>{workout.duration} min</span>
                </div>

                <Link
                    href={`/workouts/${workout.id}`}
                    className="mt-5 block rounded-md bg-lime-400 px-4 py-2.5 text-center text-sm font-bold text-black hover:bg-lime-300"
                >
                    View Details →
                </Link>

            </div>
        </div>
    );
}
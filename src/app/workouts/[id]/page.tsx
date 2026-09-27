// import Link from "next/link";
// import image from "@/assets/Banner.png"
// import Banner from "@/components/homepage/banner";
import Link from "next/link";
import Image from "next/image";

const workout = {
    name: "Barbell Bench Press",
    category: "Chest",
    level: "Intermediate",
    equipment: "Barbell",
    muscles: "Chest, Triceps",
    sets: 4,
    reps: "8-12",
    image: "/assets/bench-press.jpg",
};

export default function WorkoutDetails() {
    return (
        <main className="min-h-screen bg-[#0b0d10] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                <Link
                    href="/"
                    className="mb-6 inline-block text-sm text-gray-400 hover:text-white"
                >
                    ← Back to workouts
                </Link>

                <div className="grid gap-8 rounded-xl border border-white/10 bg-[#12151a] p-6 md:grid-cols-2">

                    {/* Image */}
                    <div className="overflow-hidden rounded-lg bg-black">



                        <Image
                            src="/banner.png"
                            alt="Workout"
                            width={1200}
                            height={800}
                            className="h-full min-h-100 w-full object-cover"
                        />
                        {/* <image
                            src={image}
                            alt={"Banner"}
                            className="h-full min-h-[400px] w-full object-cover"
                        /> */}
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center">

                        <div className="mb-4 flex gap-2">
                            <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                                {workout.category}
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                                {workout.level}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold">
                            {workout.name}
                        </h1>

                        <p className="mt-4 text-gray-400">
                            A compound upper-body movement focused on building
                            strength and muscle in the chest and triceps.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-3">

                            <div className="rounded-lg bg-[#0b0d10] p-4">
                                <p className="text-xs text-gray-500">Equipment</p>
                                <p className="mt-1 font-semibold">
                                    {workout.equipment}
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#0b0d10] p-4">
                                <p className="text-xs text-gray-500">Muscles</p>
                                <p className="mt-1 font-semibold">
                                    {workout.muscles}
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#0b0d10] p-4">
                                <p className="text-xs text-gray-500">Sets</p>
                                <p className="mt-1 font-semibold">
                                    {workout.sets}
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#0b0d10] p-4">
                                <p className="text-xs text-gray-500">Reps</p>
                                <p className="mt-1 font-semibold">
                                    {workout.reps}
                                </p>
                            </div>

                        </div>

                        <button className="mt-8 rounded-md bg-lime-400 px-5 py-3 font-bold text-black hover:bg-lime-300">
                            + Add to my plan
                        </button>

                    </div>
                </div>
            </div>
        </main>
    );
}
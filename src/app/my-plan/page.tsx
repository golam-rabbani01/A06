"use client";

import Link from "next/link";

export default function MyPlan() {
    return (
        <main className="min-h-screen bg-[#0b0d10] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold">MY PLAN</h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Build your training plan and track your weekly workload.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">

                    <div className="rounded-lg border border-white/10 bg-[#12151a] p-5">
                        <p className="text-xs text-gray-500">WORKOUTS</p>
                        <p className="mt-2 text-2xl font-bold text-lime-400">
                            0
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#12151a] p-5">
                        <p className="text-xs text-gray-500">SETS</p>
                        <p className="mt-2 text-2xl font-bold">0</p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#12151a] p-5">
                        <p className="text-xs text-gray-500">VOLUME</p>
                        <p className="mt-2 text-2xl font-bold">0</p>
                    </div>

                </div>

                {/* Empty state */}
                <div className="mt-8 flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#12151a]">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime-400/10 text-2xl">
                        +
                    </div>

                    <h2 className="text-xl font-bold">
                        YOUR PLAN IS EMPTY
                    </h2>

                    <p className="mt-2 max-w-md text-center text-sm text-gray-500">
                        Add exercises from the workout library to start
                        building today's plan.
                    </p>

                    <Link
                        href="/"
                        className="mt-6 rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-black"
                    >
                        Browse workouts
                    </Link>

                </div>

            </div>
        </main>
    );
}
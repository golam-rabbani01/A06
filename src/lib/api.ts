export type Workout = {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
};

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
    const response = await fetch(API_URL, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export async function getWorkout(id: string): Promise<Workout | undefined> {
    const workouts = await getWorkouts();

    return workouts.find(
        (workout) => workout.id.toString() === id
    );
}
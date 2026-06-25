import mongoose from "mongoose"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import Exercise from "./models/Exercise.js"

dotenv.config()

connectDB()

const exercisesPart12 = [
  {
    name: "Smith Machine Squat",
    category: "Legs",
    jointArea: "Knee",
    position: "Smith Machine",
    difficulty: "Beginner",
    duration: "45 sec",
    reps: "10-12 reps",
    gifUrl: "https://i.pinimg.com/originals/a1/bd/ba/a1bdba8ac8aafc90688526c2f67ae6fe.gif",
    description: "Machine-guided squat focusing on quadriceps, glutes and hamstrings.",
  },
  {
    name: "Snatch (Barbell)",
    category: "Olympic",
    jointArea: "Full Body",
    position: "Standing",
    difficulty: "Advanced",
    duration: "45 sec",
    reps: "5 reps",
    gifUrl: "https://i.pinimg.com/originals/b1/d1/9d/b1d19dc3b07cf95faf6bffff0f9aee58.gif",
    description: "Olympic lift developing explosive power, speed and coordination.",
  },
  {
    name: "Speed Skater",
    category: "Cardio",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "20 reps",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skater.gif",
    description: "Plyometric exercise improving agility, balance and cardiovascular endurance.",
  },
  {
    name: "Split Squat",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "10 reps each leg",
    gifUrl: "https://homeworkouts.org/wp-content/uploads/anim-split-squats.gif",
    description: "Lower-body exercise targeting the quadriceps, glutes and hamstrings.",
  },
  {
    name: "Squat (Barbell)",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "8-10 reps",
    gifUrl: "/gifs/barbell-squat.gif",
    description: "Fundamental compound movement for building total lower-body strength.",
  },
  {
    name: "Squat (Bodyweight)",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Beginner",
    duration: "40 sec",
    reps: "15-20 reps",
    gifUrl: "/gifs/bodyweight-squat.gif",
    description: "Basic squat exercise suitable for beginners and warm-ups.",
  },
  {
    name: "Squat (Dumbbell)",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Beginner",
    duration: "40 sec",
    reps: "12 reps",
    gifUrl: "/gifs/dumbbell-squat.gif",
    description: "Weighted squat using dumbbells to increase lower-body strength.",
  },
  {
    name: "Squat Jump",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "30 sec",
    reps: "15 reps",
    gifUrl: "/gifs/squat-jump.gif",
    description: "Explosive squat variation that develops leg power and athleticism.",
  },
  {
    name: "Standing Calf Raise",
    category: "Legs",
    jointArea: "Ankle",
    position: "Standing",
    difficulty: "Beginner",
    duration: "35 sec",
    reps: "15-20 reps",
    gifUrl: "/gifs/standing-calf-raise.gif",
    description: "Strengthens the gastrocnemius and soleus muscles.",
  },
  {
    name: "Standing Cable Crunch",
    category: "Core",
    jointArea: "Spine",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "35 sec",
    reps: "15 reps",
    gifUrl: "/gifs/standing-cable-crunch.gif",
    description: "Cable abdominal exercise performed while standing.",
  },
  {
    name: "Standing Leg Curl",
    category: "Legs",
    jointArea: "Knee",
    position: "Machine",
    difficulty: "Beginner",
    duration: "35 sec",
    reps: "12 reps each leg",
    gifUrl: "/gifs/standing-leg-curl.gif",
    description: "Machine isolation exercise targeting the hamstrings.",
  },
  {
    name: "Step Up (Dumbbell)",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "10 reps each leg",
    gifUrl: "/gifs/step-up-dumbbell.gif",
    description: "Functional lower-body exercise that improves balance and unilateral strength.",
  },
  {
    name: "Stiff Leg Deadlift",
    category: "Legs",
    jointArea: "Hip",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "8-10 reps",
    gifUrl: "/gifs/stiff-leg-deadlift.gif",
    description: "Deadlift variation emphasizing the hamstrings and glutes.",
  },
  {
    name: "Sumo Deadlift",
    category: "Legs",
    jointArea: "Hip",
    position: "Standing",
    difficulty: "Advanced",
    duration: "45 sec",
    reps: "6-8 reps",
    gifUrl: "/gifs/sumo-deadlift.gif",
    description: "Wide-stance deadlift targeting the glutes, hamstrings and inner thighs.",
  },
  {
    name: "Sumo Squat",
    category: "Legs",
    jointArea: "Hip",
    position: "Standing",
    difficulty: "Beginner",
    duration: "40 sec",
    reps: "12-15 reps",
    gifUrl: "/gifs/sumo-squat.gif",
    description: "Wide-stance squat focusing on the glutes and inner thighs.",
  },
];
const seedExercises = async () => {
  try {
    // await Exercise.deleteMany()

    await Exercise.insertMany(exercises)

    console.log("✅ Exercises Seeded Successfully")

    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedExercises()
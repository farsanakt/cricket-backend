import mongoose from "mongoose"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import Exercise from "./models/Exercise.js"

dotenv.config()

connectDB()

const exercises = [
  {
    name: "Hamstring Stretch",
    category: "Flexibility",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "3 sets",
    gifUrl:
      "https://hips.hearstapps.com/hmg-prod/images/dynamic-supine-hamstring-stretch-0001-6661ea51ee04a.gif",
    description: "Improves hamstring flexibility",
  },

  {
    name: "Shoulder Rotation",
    category: "Mobility",
    jointArea: "Shoulder",
    position: "Standing",
    difficulty: "Beginner",
    duration: "20 sec",
    reps: "15 reps",
    gifUrl:
      "https://cdn.jefit.com/assets/img/exercises/gifs/871.gif",
    description: "Improves shoulder mobility",
  },

  {
    name: "Squats",
    category: "Strength",
    jointArea: "Leg",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "12 reps",
    gifUrl:
      "https://wellnessed.com/wp-content/uploads/2022/12/how-to-do-squats.gif",
    description: "Builds lower body strength",
  },

  {
    name: "Push Ups",
    category: "Strength",
    jointArea: "Chest",
    position: "Floor",
    difficulty: "Intermediate",
    duration: "30 sec",
    reps: "15 reps",
    gifUrl:
      "https://i.pinimg.com/originals/fd/ea/01/fdea01bad94da6160033f9745e65f9ff.gif",
    description: "Upper body strengthening",
  },

  {
    name: "Lunges",
    category: "Strength",
    jointArea: "Leg",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "10 reps",
    gifUrl:
      "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyYjU2c24wa2djNHk2N29mazdhOW5ocmIwN2xudmZmN21vYTF0MTllbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/r0WOepedKqxNjS3zM0/giphy.gif",
    description: "Improves balance and leg strength",
  },

  {
    name: "Cat Camel Stretch",
    category: "Mobility",
    jointArea: "Back",
    position: "Floor",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "10 reps",
    gifUrl:
      "https://www.verywellfit.com/thmb/Jvwv8VPTLwd5gMATDAvuo8ief5M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fitness_Gif-1500x1000-catcow-5c5c85cac9e77c0001566641.gif",
    description: "Spinal mobility exercise",
  },

  {
    name: "Plank",
    category: "Core",
    jointArea: "Core",
    position: "Floor",
    difficulty: "Advanced",
    duration: "60 sec",
    reps: "3 sets",
    gifUrl:
      "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/plank.gif",
    description: "Core strengthening",
  },

  {
    name: "Ankle Mobility",
    category: "Mobility",
    jointArea: "Ankle",
    position: "Standing",
    difficulty: "Beginner",
    duration: "20 sec",
    reps: "12 reps",
    gifUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2023/08/MadUnpleasantKangaroo-size_restricted.gif",
    description: "Improves ankle movement",
  },

  {
    name: "Side Plank",
    category: "Core",
    jointArea: "Core",
    position: "Floor",
    difficulty: "Advanced",
    duration: "45 sec",
    reps: "2 sets",
    gifUrl:
      "https://burnfit.io/en/wp-content/uploads/sites/3/2026/01/SIDE_PLANK.gif",
    description: "Improves side core stability",
  },

  {
    name: "Neck Stretch",
    category: "Flexibility",
    jointArea: "Neck",
    position: "Sitting",
    difficulty: "Beginner",
    duration: "20 sec",
    reps: "5 reps",
    gifUrl:
      "https://post.healthline.com/wp-content/uploads/2019/03/400x400_Exercises_to_Relieve_Upper_Back_Pain_Neck_Side_Bend_and_Rotation.gif",
    description: "Relieves neck tightness",
  },
]

const seedExercises = async () => {
  try {
    await Exercise.deleteMany()

    await Exercise.insertMany(exercises)

    console.log("✅ Exercises Seeded Successfully")

    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedExercises()
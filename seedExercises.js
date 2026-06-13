import mongoose from "mongoose"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import Exercise from "./models/Exercise.js"

dotenv.config()

connectDB()

const exercises = [
  {
    name: "Ab Wheel",
    category: "Core",
    jointArea: "Core",
    position: "Kneeling",
    difficulty: "Advanced",
    duration: "30 sec",
    reps: "10-15 reps",
    gifUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-rollout.jpg",
    description: "Strengthens the entire core and improves stability.",
  },
  {
    name: "Aerobics",
    category: "Cardio",
    jointArea: "Full Body",
    position: "Standing",
    difficulty: "Beginner",
    duration: "5 min",
    reps: "Continuous",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP5MLNJHWTALe69ptY-kzd49OidYGIkoS9pi12KL7wg&s=10",
    description: "Improves cardiovascular fitness and endurance.",
  },
  {
    name: "Arnold Press (Dumbbell)",
    category: "Shoulders",
    jointArea: "Shoulder",
    position: "Seated",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "10-12 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61_d0z9ABhl_eetySLNExGG7ztVhomWJh9L9vTxDKaA&s=10",
    description: "Builds shoulder size and strength.",
  },
 

  {
    name: "Back Extension (Machine)",
    category: "Back",
    jointArea: "Spine",
    position: "Machine",
    difficulty: "Beginner",
    duration: "40 sec",
    reps: "12 reps",
    gifUrl: "https://www.strongermobileapp.com/gifs/close_neutral_grip_cable_row.gif",
    description: "Machine-assisted lower back strengthening exercise.",
  },
  {
    name: "Ball Slams",
    category: "Full Body",
    jointArea: "Full Body",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "30 sec",
    reps: "15 reps",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/06/Medicine-ball-Overhead-Slam-exercise.gif",
    description: "Explosive movement for power and conditioning.",
  },
  {
    name: "Battle Ropes",
    category: "Cardio",
    jointArea: "Shoulder",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "Continuous",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2015/07/Battle-Rope.gif",
    description: "Improves conditioning and shoulder endurance.",
  },
  {
    name: "Bench Dip",
    category: "Arms",
    jointArea: "Elbow",
    position: "Seated",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "12 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsEsLX-8SMIkBJCthG8ejZ0zXNKdPk_UQoyiPg8epkQ&s=10",
    description: "Bodyweight triceps exercise.",
  },
  {
    name: "Bench Press (Barbell)",
    category: "Chest",
    jointArea: "Shoulder",
    position: "Lying",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "8-12 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIY3puqy2ZRFzSaLqYt8PNNfW9KHUchPR0aUO0KS8LwQ&s=10",
    description: "Compound chest-building movement.",
  },
  {
    name: "Bench Press (Cable)",
    category: "Chest",
    jointArea: "Shoulder",
    position: "Bench",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "10 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j1kUBX9tBhJ5c_rPqvU329w0dGk_U_LGi1xZIa4M7A&s=10",
    description: "Provides constant tension for chest development.",
  },
  {
    name: "Bench Press (Dumbbell)",
    category: "Chest",
    jointArea: "Shoulder",
    position: "Lying",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "10 reps",
    gifUrl: "https://i.pinimg.com/originals/03/a1/38/03a138d1a2ee9923a7f050d734e6e1e1.gif",
    description: "Improves chest development and stability.",
  },
  {
    name: "Bench Press (Smith Machine)",
    category: "Chest",
    jointArea: "Shoulder",
    position: "Lying",
    difficulty: "Beginner",
    duration: "45 sec",
    reps: "10 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcOyGKYYWUQz_86jNnbajoPise3O5xdRN99lgCOnvTw&s=10",
    description: "Guided chest press movement.",
  },
  {
    name: "Bench Press - Close Grip (Barbell)",
    category: "Arms",
    jointArea: "Elbow",
    position: "Lying",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "10 reps",
    gifUrl: "https://app.aspira-fitness.com/api/media/80b1e3d7-9ce4-4e19-bdce-ddfcab0fb3d0",
    description: "Targets triceps and inner chest.",
  },
  {
    name: "Bench Press - Wide Grip (Barbell)",
    category: "Chest",
    jointArea: "Shoulder",
    position: "Lying",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "8 reps",
    gifUrl: "https://fitliferegime.com/wp-content/uploads/2024/01/Wide-Grip-Barbell-Bench-Press-Muscles-Worked.jpg",
    description: "Places greater emphasis on the chest.",
  },
  {
    name: "Bent Over One Arm Row (Dumbbell)",
    category: "Back",
    jointArea: "Shoulder",
    position: "Bent Over",
    difficulty: "Intermediate",
    duration: "40 sec",
    reps: "12 reps",
    gifUrl: "https://i.pinimg.com/originals/86/02/f6/8602f61f6089c5a01c042626176381f9.gif",
    description: "Builds upper back and lats.",
  },
  {
    name: "Bent Over Row (Band)",
    category: "Back",
    jointArea: "Shoulder",
    position: "Standing",
    difficulty: "Beginner",
    duration: "40 sec",
    reps: "15 reps",
    gifUrl: "https://liftmanual.com/wp-content/uploads/2023/04/band-kneeling-pulldown.jpg",
    description: "Resistance band rowing exercise.",
  },
  {
    name: "Bent Over Row (Barbell)",
    category: "Back",
    jointArea: "Shoulder",
    position: "Bent Over",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "10 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsaataNQcXZrZaAazljmHhg2goWQd1uGXZfhzK7BHCg&s=10",
    description: "Develops back thickness and strength.",
  },
  {
    name: "Bent Over Row (Dumbbell)",
    category: "Back",
    jointArea: "Shoulder",
    position: "Bent Over",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "12 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wSGWW1_A75OK79LwpcjVEUpvZQmsmOP4xulOoysvTA&s=10",
    description: "Strengthens upper and middle back.",
  },
 

  {
    name: "Bicep Curl (Barbell)",
    category: "Arms",
    jointArea: "Elbow",
    position: "Standing",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "12 reps",
    gifUrl: "https://s3assets.skimble.com/assets/2288369/image_iphone.jpg",
    description: "Classic biceps building exercise.",
  },

  {
    name: "Bicep Curl (Cable)",
    category: "Arms",
    jointArea: "Elbow",
    position: "Standing",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "12 reps",
    gifUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IAqw1flig1iCAITdGzaA0ePE_sdTLqN3352rwORp_g&s=10",
    description: "Provides constant tension on biceps.",
  },

  {
    name: "Bicep Curl (Dumbbell)",
    category: "Arms",
    jointArea: "Elbow",
    position: "Standing",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "12 reps",
    gifUrl: "https://i.pinimg.com/originals/88/3d/06/883d061da85cd5b7bc90b59ec8e35194.gif",
    description: "Basic dumbbell biceps curl.",
  },

  {
    name: "Bicep Curl (Machine)",
    category: "Arms",
    jointArea: "Elbow",
    position: "Machine",
    difficulty: "Beginner",
    duration: "30 sec",
    reps: "12 reps",
    gifUrl: "https://app.aspira-fitness.com/api/media/daa103cd-c593-45c1-a254-bbd750d5404f",
    description: "Machine-assisted biceps curl.",
  },

  {
    name: "Bicycle Crunch",
    category: "Core",
    jointArea: "Core",
    position: "Floor",
    difficulty: "Intermediate",
    duration: "30 sec",
    reps: "20 reps",
    gifUrl: "https://newlife.com.cy/wp-content/uploads/2019/02/00031301-air-bike-m_waist_FIX_360.gif",
    description: "Targets upper abs and obliques.",
  },

  {
    name: "Box Jump",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Advanced",
    duration: "30 sec",
    reps: "10 reps",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2015/07/The-Box-Jump.gif",
    description: "Develops explosive lower body power.",
  },

  {
    name: "Box Squat (Barbell)",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "8 reps",
    gifUrl: "https://newlife.com.cy/wp-content/uploads/2019/12/00241301-Barbell-Bench-Front-Squat_thighs_360.gif",
    description: "Builds squat strength and technique.",
  },

  {
    name: "Bulgarian Split Squat",
    category: "Legs",
    jointArea: "Knee",
    position: "Standing",
    difficulty: "Intermediate",
    duration: "45 sec",
    reps: "10 reps",
    gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif",
    description: "Single-leg strength and balance exercise.",
  },

  {
    name: "Burpee",
    category: "Full Body",
    jointArea: "Full Body",
    position: "Standing",
    difficulty: "Advanced",
    duration: "30 sec",
    reps: "15 reps",
    gifUrl: "https://gymfitclub.ir/public/images/articles/upload/half-burpee.gif",
    description: "High-intensity full body conditioning exercise.",
  }
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
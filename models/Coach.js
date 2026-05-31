import mongoose from "mongoose";

const coachSchema =
  new mongoose.Schema({

    // auth user connection
    userId: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,

      unique: true,

    },

    // coach name
    name: {

      type: String,

      required: true,

    },

    // academy name
    academyName: {

      type: String,

      required: true,

    },

    // academy GPS
    academyLatitude: {

      type: Number,

      required: true,

    },

    academyLongitude: {

      type: Number,

      required: true,

    },

    // allowed radius in meters
    allowedRadius: {

      type: Number,

      default: 100,

    },

    // live coach GPS
    currentLatitude: {

      type: Number,

      default: null,

    },

    currentLongitude: {

      type: Number,

      default: null,

    },

    // online status
    isOnline: {

      type: Boolean,

      default: false,

    },

    // geofence status
    insideAcademy: {

      type: Boolean,

      default: false,

    },

    // last seen
    lastSeen: {

      type: Date,

      default: null,

    },

  },

  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Coach",
  coachSchema
);
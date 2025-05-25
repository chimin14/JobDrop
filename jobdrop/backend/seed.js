require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/JobPosting");

const jobs = [
  {
    PostingID: "J001",
    Pay: 25,
    JobTitle: "Grocery Delivery",
    Description: "Deliver groceries to Nana.",
    Time: "ASAP",
    Location: "Sarajevo",
    WorkFromLocation: "No",
    Category: "Delivery"
  }
];

async function seedJobs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // <--- fixed here
    await Job.deleteMany();
    await Job.insertMany(jobs);
    console.log("✅ Jobs seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
}

seedJobs();

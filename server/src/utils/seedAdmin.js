require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const { USER_ROLES } = require("../constants");

/**
 * Seed Admin User
 * Run this script once to create an admin user
 * Usage: node src/utils/seedAdmin.js
 */

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    // Check if admin already exists
    const adminExists = await User.findOne({
      role: USER_ROLES.ADMIN,
    });

    if (adminExists) {
      console.log("⚠️  Admin user already exists");
      console.log("Email:", adminExists.email);
      process.exit(0);
    }

    // Create admin user
    const adminData = {
      name: "Admin",
      email: process.env.ADMIN_EMAIL || "admin@portfolio.com",
      password: process.env.ADMIN_PASSWORD || "Admin@123",
      role: USER_ROLES.ADMIN,
      isActive: true,
    };

    const admin = await User.create(adminData);

    console.log("✅ Admin user created successfully!");
    console.log("=================================");
    console.log("Email:", admin.email);
    console.log("Password:", adminData.password);
    console.log("=================================");
    console.log("⚠️  Please change the password after first login!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

// Run the seed function
seedAdmin();

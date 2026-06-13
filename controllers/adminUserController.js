import AdminUser from "../models/AdminUser.js";
import bcrypt from "bcryptjs";

export const createAdminUser = async (
  req,
  res
) => {
  try {
    const {
      name,
      age,
      email,
      password,
      contact,
      district,
      proficiency,
      role,
    } = req.body;

    const exists =
      await AdminUser.findOne({
        email,
      });

    if (exists) {
      return res.status(400).json({
        message:
          "Email already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await AdminUser.create({
        name,
        age,
        email,
        password:
          hashedPassword,
        contact,
        district,
        proficiency,
        role,
      });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

export const getAdminUsers =
  async (req, res) => {
    try {
      const users =
        await AdminUser.find();

      res.json(users);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const updateAdminUser =
  async (req, res) => {
    try {
      const { id } = req.params;

      const updated =
        await AdminUser.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
          }
        );

      res.json(updated);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const deleteAdminUser =
  async (req, res) => {
    try {
      const { id } = req.params;

      await AdminUser.findByIdAndDelete(
        id
      );

      res.json({
        message:
          "User deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
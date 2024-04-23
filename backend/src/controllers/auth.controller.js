import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const passwordHash = await bcrypt.hash(newUser.password, 10);
    newUser.password = passwordHash;
    const userSaved = await newUser.save();
    const token = await createAccessToken({id: userSaved._id});
    res.cookie('token', token);
    res.json({
        message: "Usuario creado correctamente"
    })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }
    const token = await createAccessToken({id: user._id});
    res.cookie('token', token);
    res.status(200).json({
        message: "Usuario logueado correctamente",
        user,
    })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    message: "Se cerró sesión correctamente"
  })
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if(!userFound)
  return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(userFound);
}
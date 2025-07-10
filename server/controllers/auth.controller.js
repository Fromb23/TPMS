import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


export const register = async (req, res) => {
  const { username, email, password, fullName, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ error: 'Username, email, password, and role are required' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        fullName,
        role,
        password: hashedPassword,
      },
    });

    // Role-specific creation
    if (role === 'STUDENT') {
      await prisma.student.create({
        data: {
          userId: user.id,
        },
      });
    } else if (role === 'LECTURER') {
      await prisma.lecturer.create({
        data: {
          userId: user.id,
          department: '',
        },
      });
    } else if (role === 'ADMIN') {
      await prisma.admin.create({
        data: {
          userId: user.id,
        },
      });
    }

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

// Verify Email
export const verifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while verifying the email' });
  }
};

export const resetPassword = async (req, res) => {
  const userId  = req.user.userId;
  const { password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: {  id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while resetting the password' });
  }
}

// Confirm Has Agreed Terms
export const confirmHasAgreedTerms = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      console.error('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { hasAgreedTerms: true },
    });

    res.status(200).json({ message: 'Terms agreed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while confirming terms agreement' });
  }
}

// Logout
export const logout = (req, res) => {
  // In a real application, you would invalidate the JWT token here
  // For this example, we will just send a success message
  res.status(200).json({ message: 'Logout successful' });
};


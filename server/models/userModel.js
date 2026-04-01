// User DB queries will go here
const pool = require('../config/db');

const createUser = async (name, email, phone, role, ward, city) => {
  // INSERT INTO users ...
};

const findUserByEmail = async (email) => {
  // SELECT * FROM users WHERE email = ...
};

module.exports = { createUser, findUserByEmail };
import * as DTO from '@/services/auth/auth.dto';

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

async function loginUser(loginDTO: DTO.LoginDTO) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(loginDTO)
  };
  return await fetch(`${BASE_URL}/auth/local/login`, opt)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((err) => err.message);
}

async function registerUser(registerDTO: DTO.RegisterDTO) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(registerDTO)
  };

  return await fetch(`${BASE_URL}/auth/local/register`, opt)
    .then((response) => response.json())
    .then((result) => result.data);
}

export const authService = {
  loginUser,
  registerUser
};

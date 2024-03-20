import * as DTO from '@/services/auth/auth.dto';

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

async function login(loginDTO: DTO.LoginDTO) {
  return await fetch(`${BASE_URL}/auth/local/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(loginDTO)
  })
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((err) => err.message);
}

async function register(registerDTO: DTO.RegisterDTO) {
  return await fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(registerDTO)
  })
    .then((response) => response.json())
    .then((result) => result.data);
}

export const authService = {
  login,
  register
};

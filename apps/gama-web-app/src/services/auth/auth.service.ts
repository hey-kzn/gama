import * as DTO from '@/services/auth/auth.dto';

export async function loginUser(loginDTO: DTO.LoginDTO) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(loginDTO)
  };
  return await fetch('http://localhost:3001/auth/local/login', opt)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((err) => err.message);
}

export async function registerUser(registerDTO: DTO.RegisterDTO) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(registerDTO)
  };

  return await fetch('http://localhost:3001/auth/local/register', opt)
    .then((response) => response.json())
    .then((result) => result.data);
}

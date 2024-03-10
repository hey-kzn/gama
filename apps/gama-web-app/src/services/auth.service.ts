import { LoginDTO, RegisterDTO } from '@/services/auth.dto';

export async function loginService(loginDTO: LoginDTO) {
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
    .then((result) => result.data);
}

export async function registerServivce(registerDTO: RegisterDTO) {
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

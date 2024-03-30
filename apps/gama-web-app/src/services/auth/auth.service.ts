import { LoginResponseDTO, LoginRequestDTO, RegisterRequestDTO } from '@/services/auth/auth.dto';

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

/**
 * @param loginDTO
 * @description Appel API pour connecter l'utilisateur
 * @return LoginResponseDTO
 */
async function login(loginDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
  try {
    const response = await fetch(`${BASE_URL}/auth/local/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(loginDTO)
    });
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Une erreur inattendue s'est produite."
    );
  }
}

/// TODO: refacto
async function register(registerDTO: RegisterRequestDTO) {
  return await fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(registerDTO)
  })
    .then((response) => response.json())
    .catch((err) => err.message);
}

export const authService = {
  login,
  register
};

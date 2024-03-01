const baseUrl: string = 'http://localhost:3000/';
export async function login(parameter: { email: stirng; password: string }) {
  const resp = await fetch(baseUrl + 'auth/local/login', {
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' },
    method: 'GET'
  });
}
export async function register() {}

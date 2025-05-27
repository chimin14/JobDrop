// app/lib/auth.ts

interface LoginResponse {
  message: string;
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role?: string;
  };
}

interface LoginError {
  error: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch('http://localhost:5001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as LoginError).error || 'Login failed');
  }

  // Store token in localStorage
  const loginData = data as LoginResponse;
  localStorage.setItem('token', loginData.token);
  localStorage.setItem('user', JSON.stringify(loginData.user));

  return loginData;
}

export function logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}

export function getUser(): any | null {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
}

export function isAuthenticated(): boolean {
  return !!getToken();
}
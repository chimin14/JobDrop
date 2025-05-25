export const login = async (email: string, password: string) => {
    const res = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  
  export const isAuthenticated = (): boolean => {
    return Boolean(localStorage.getItem('token'));
  };
  
  export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
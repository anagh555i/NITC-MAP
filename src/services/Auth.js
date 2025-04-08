import { jwtDecode } from "jwt-decode";


class Auth {
  login = async (email, password) => {
    if (!email) throw new Error('Email was not provided');
    if (!password) throw new Error('Password was not provided');

    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    const response = await fetch('https://291ddecd-c59b-4c24-9fe2-a8a155c48112-00-2kv201iop7lfh.pike.replit.dev:3000/auth/login', {
      method: 'POST',
      body: formData,
    });

    if (response.status === 500) throw new Error('Internal server error');

    const data = await response.json();

    if (response.status >= 400) throw new Error(data.detail || 'Login failed');

    if ('access_token' in data) {
      //const decodedToken = decodeJwt(data.access_token);
      const decodedToken = jwtDecode(data.access_token); 
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('permissions', decodedToken.role || 'user');
    }

    return data;
  };

  // register = async (email, password, rollno, username, role) => {
  //   if (!email || !password || !rollno || !username || !role) {
  //     throw new Error('All fields are required');
  //   }

  //   const formData = {
  //     email,
  //     password,
  //     rollno,
  //     username,
  //     role,
  //   };

  //   const response = await fetch('https://291ddecd-c59b-4c24-9fe2-a8a155c48112-00-2kv201iop7lfh.pike.replit.dev:3000/auth/register', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.status === 500) throw new Error('Internal server error');

  //   const data = await response.json();

  //   if (response.status >= 400) throw new Error(data.detail || 'Registration failed');

  //   if ('access_token' in data) {
  //     const decodedToken = decodeJwt(data.access_token);
  //     localStorage.setItem('token', data.access_token);
  //     localStorage.setItem('permissions', decodedToken.role || 'user');
  //   }

  //   return data;
  // };
  register = async (email, password, rollno, username) => {
    const role = "student"; 
  
    if (!email || !password || !rollno || !username) {
      throw new Error('All fields are required');
    }
  
    const formData = {
      email,
      password,
      rollno,
      username,
      role,
    };
  
    const response = await fetch('https://291ddecd-c59b-4c24-9fe2-a8a155c48112-00-2kv201iop7lfh.pike.replit.dev:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (response.status === 500) throw new Error('Internal server error');
  
    const data = await response.json();
  
    if (response.status >= 400) throw new Error(data.detail || 'Registration failed');
  
    if ('access_token' in data) {
      const decodedToken = decodeJwt(data.access_token);
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('permissions', decodedToken.role || 'user');
    }
  
    return data;
  };
  

  logout = (callback) => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    callback();
  };

  getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('https://291ddecd-c59b-4c24-9fe2-a8a155c48112-00-2kv201iop7lfh.pike.replit.dev:3000/users/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  };

  isAuthenticated = () => {
    const permissions = localStorage.getItem('permissions');
    return permissions === 'user';
  };
}

export default new Auth();

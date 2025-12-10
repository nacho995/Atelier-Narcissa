const BASE_URL = import.meta.env.VITE_API_URL || '';
const API_URL = BASE_URL ? `${BASE_URL}/api` : '/api';

class ApiService {
  constructor() {
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) headers.Authorization = `Bearer ${this.token}`;

    let res;
    try {
      res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    } catch (error) {
      throw new Error('No se puede conectar con el servidor. Verifica tu conexión a internet.');
    }

    let text;
    try {
      text = await res.text();
    } catch {
      throw new Error('Error al leer la respuesta del servidor.');
    }

    let data;
    try {
      data = text && text.trim() ? JSON.parse(text) : {};
    } catch (parseError) {
      if (res.status === 401) {
        throw new Error('Usuario o contraseña incorrectos. Verifica tus datos.');
      }
      if (res.status === 404) {
        throw new Error('El servidor no está disponible. Contacta al administrador.');
      }
      if (res.status >= 500) {
        throw new Error('El servidor tiene un problema. Intenta de nuevo en unos minutos.');
      }
      throw new Error('No se puede conectar con el servidor. Asegúrate de que esté activo.');
    }
    
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error('Usuario o contraseña incorrectos');
      }
      throw new Error(data.error || data.message || 'Error del servidor');
    }
    
    return data;
  }

  login(email, password) {
    return this.request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  }

  getMe() {
    return this.request('/auth/me');
  }

  getDashboard(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/dashboard${query ? '?' + query : ''}`);
  }

  getChartData(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/dashboard/chart-data${query ? '?' + query : ''}`);
  }

  getIncomes(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/incomes${query ? '?' + query : ''}`);
  }

  createIncome(data) {
    return this.request('/incomes', { method: 'POST', body: JSON.stringify(data) });
  }

  updateIncome(id, data) {
    return this.request(`/incomes/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteIncome(id) {
    return this.request(`/incomes/${id}`, { method: 'DELETE' });
  }

  getExpenses(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/expenses${query ? '?' + query : ''}`);
  }

  createExpense(data) {
    return this.request('/expenses', { method: 'POST', body: JSON.stringify(data) });
  }

  updateExpense(id, data) {
    return this.request(`/expenses/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteExpense(id) {
    return this.request(`/expenses/${id}`, { method: 'DELETE' });
  }
}

export const api = new ApiService();

const API_URL = '/api';

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

    const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    const data = await res.json();
    
    if (!res.ok) throw new Error(data.error || 'Error de servidor');
    return data;
  }

  // Auth
  login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  getMe() {
    return this.request('/auth/me');
  }

  // Dashboard
  getDashboard(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/dashboard${query ? '?' + query : ''}`);
  }

  getChartData(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/dashboard/chart-data${query ? '?' + query : ''}`);
  }

  // Incomes
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

  // Expenses
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


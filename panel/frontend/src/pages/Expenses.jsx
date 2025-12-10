import { useState, useEffect } from 'react';
import { api } from '../services/api';
import DataTable from '../components/DataTable';
import ExpenseForm from '../components/ExpenseForm';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [filters, setFilters] = useState({});

  const loadExpenses = async () => {
    setLoading(true);
    try {
      const res = await api.getExpenses(filters);
      setExpenses(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadExpenses(); }, [filters]);

  const handleSave = async (data) => {
    try {
      if (editItem) {
        await api.updateExpense(editItem.id, data);
      } else {
        await api.createExpense(data);
      }
      setShowForm(false);
      setEditItem(null);
      loadExpenses();
    } catch (error) {
      alert('Error al guardar: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Eliminar este gasto?')) {
      await api.deleteExpense(id);
      loadExpenses();
    }
  };

  const columns = [
    { key: 'createdAt', label: 'Fecha', render: (v) => new Date(v).toLocaleDateString('es-ES') },
    { key: 'amount', label: 'Importe', render: (v) => `${v.toLocaleString('es-ES')} €` },
    { key: 'category', label: 'Categoría' },
    { key: 'notes', label: 'Notas' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-brand-800">Gastos</h2>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          + Nuevo Gasto
        </button>
      </div>

      {/* Filters */}
      <div className="card flex flex-wrap gap-4 items-end">
        <div>
          <label className="label">Desde</label>
          <input
            type="date"
            className="input w-auto"
            onChange={(e) => setFilters(f => ({ ...f, startDate: e.target.value }))}
          />
        </div>
        <div>
          <label className="label">Hasta</label>
          <input
            type="date"
            className="input w-auto"
            onChange={(e) => setFilters(f => ({ ...f, endDate: e.target.value }))}
          />
        </div>
        <div>
          <label className="label">Categoría</label>
          <select
            className="input w-auto"
            onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
          >
            <option value="">Todas</option>
            <option value="telas">Telas</option>
            <option value="arreglos">Arreglos</option>
            <option value="alquiler">Alquiler</option>
            <option value="publicidad">Publicidad</option>
            <option value="suministros">Suministros</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Cargando...</div>
      ) : (
        <DataTable
          data={expenses}
          columns={columns}
          onEdit={(item) => { setEditItem(item); setShowForm(true); }}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <ExpenseForm
          item={editItem}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditItem(null); }}
        />
      )}
    </div>
  );
}


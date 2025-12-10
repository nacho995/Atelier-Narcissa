import { useState, useEffect } from 'react';
import { api } from '../services/api';
import DataTable from '../components/DataTable';
import IncomeForm from '../components/IncomeForm';

export default function Incomes() {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [filters, setFilters] = useState({});

  const loadIncomes = async () => {
    setLoading(true);
    try {
      const res = await api.getIncomes(filters);
      setIncomes(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadIncomes(); }, [filters]);

  const handleSave = async (data) => {
    try {
      if (editItem) {
        await api.updateIncome(editItem.id, data);
      } else {
        await api.createIncome(data);
      }
      setShowForm(false);
      setEditItem(null);
      loadIncomes();
    } catch (error) {
      alert('Error al guardar: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Eliminar este ingreso?')) {
      await api.deleteIncome(id);
      loadIncomes();
    }
  };

  const columns = [
    { key: 'createdAt', label: 'Fecha', render: (v) => new Date(v).toLocaleDateString('es-ES') },
    { key: 'amount', label: 'Importe', render: (v) => `${v.toLocaleString('es-ES')} €` },
    { key: 'paymentMethod', label: 'Método' },
    { key: 'concept', label: 'Concepto' },
    { key: 'isAutomatic', label: 'Origen', render: (v) => v ? '🌐 Web' : '✋ Manual' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-brand-800">Ingresos</h2>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          + Nuevo Ingreso
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
          <label className="label">Método de pago</label>
          <select
            className="input w-auto"
            onChange={(e) => setFilters(f => ({ ...f, paymentMethod: e.target.value }))}
          >
            <option value="">Todos</option>
            <option value="efectivo">Efectivo</option>
            <option value="bizum">Bizum</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Cargando...</div>
      ) : (
        <DataTable
          data={incomes}
          columns={columns}
          onEdit={(item) => { setEditItem(item); setShowForm(true); }}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <IncomeForm
          item={editItem}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditItem(null); }}
        />
      )}
    </div>
  );
}


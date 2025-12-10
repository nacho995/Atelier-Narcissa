import { useState } from 'react';

export default function ExpenseForm({ item, onSave, onClose }) {
  const today = new Date().toISOString().split('T')[0];
  const initialDate = item?.createdAt ? item.createdAt.split('T')[0] : today;
  
  const [formData, setFormData] = useState({
    amount: item?.amount || '',
    category: item?.category || 'otros',
    notes: item?.notes || '',
    date: initialDate
  });
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData(prev => ({ ...prev, date: newDate }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave({ ...formData, amount: parseFloat(formData.amount) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="card max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-serif text-brand-800 mb-6">
          {item ? 'Editar Gasto' : 'Nuevo Gasto'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Fecha</label>
            <input
              type="date"
              value={formData.date}
              onChange={handleDateChange}
              className="input"
              required
            />
          </div>

          <div>
            <label className="label">Importe (€)</label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData(f => ({ ...f, amount: e.target.value }))}
              className="input"
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label className="label">Categoría</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(f => ({ ...f, category: e.target.value }))}
              className="input"
            >
              <option value="telas">Telas</option>
              <option value="arreglos">Arreglos</option>
              <option value="alquiler">Alquiler</option>
              <option value="publicidad">Publicidad</option>
              <option value="suministros">Suministros</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div>
            <label className="label">Notas (opcional)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(f => ({ ...f, notes: e.target.value }))}
              className="input"
              rows="3"
              placeholder="Detalles adicionales..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="btn-primary flex-1" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

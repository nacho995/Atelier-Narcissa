import { useState } from 'react';

export default function IncomeForm({ item, onSave, onClose }) {
  const today = new Date().toISOString().split('T')[0];
  const initialDate = item?.createdAt ? item.createdAt.split('T')[0] : today;
  
  const [formData, setFormData] = useState({
    amount: item?.amount || '',
    paymentMethod: item?.paymentMethod || 'efectivo',
    concept: item?.concept || '',
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
          {item ? 'Editar Ingreso' : 'Nuevo Ingreso'}
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
            <label className="label">Método de pago</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData(f => ({ ...f, paymentMethod: e.target.value }))}
              className="input"
            >
              <option value="efectivo">Efectivo</option>
              <option value="bizum">Bizum</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </div>

          <div>
            <label className="label">Concepto</label>
            <input
              type="text"
              value={formData.concept}
              onChange={(e) => setFormData(f => ({ ...f, concept: e.target.value }))}
              className="input"
              placeholder="Ej: Vestido modelo A"
              required
            />
          </div>

          <div>
            <label className="label">Notas (opcional)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(f => ({ ...f, notes: e.target.value }))}
              className="input"
              rows="2"
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

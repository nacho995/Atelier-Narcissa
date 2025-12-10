import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { 
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, 
  Tooltip, ResponsiveContainer, Legend, Line, ComposedChart
} from 'recharts';

const COLORS_EXPENSE = ['#ef4444', '#f87171', '#fca5a5', '#fecaca'];
const COLORS_METHODS = ['#c86f4d', '#e8b49e', '#8c4133', '#db8e72'];

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [period, setPeriod] = useState('month');
  const [customRange, setCustomRange] = useState({ start: '', end: '' });
  const [showTrend, setShowTrend] = useState(false);
  const [loading, setLoading] = useState(true);

  const getDateRange = () => {
    if (period === 'custom' && customRange.start && customRange.end) {
      return { startDate: customRange.start, endDate: customRange.end };
    }
    const end = new Date();
    const start = new Date();
    if (period === 'week') start.setDate(end.getDate() - 7);
    else if (period === 'month') start.setMonth(end.getMonth() - 1);
    else if (period === 'quarter') start.setMonth(end.getMonth() - 3);
    else if (period === 'year') start.setFullYear(end.getFullYear() - 1);
    return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
  };

  useEffect(() => {
    if (period === 'custom' && (!customRange.start || !customRange.end)) return;
    setLoading(true);
    const range = getDateRange();
    // Siempre usar 'day' para ver cada fecha individual
    Promise.all([
      api.getDashboard(range),
      api.getChartData({ ...range, groupBy: period === 'year' ? 'month' : 'day' })
    ]).then(([dash, chart]) => {
      setData(dash);
      setChartData(chart);
    }).finally(() => setLoading(false));
  }, [period, customRange]);

  const formatDateLabel = (dateStr) => {
    if (!dateStr) return '';
    if (dateStr.includes('-W')) return `Sem ${dateStr.split('-W')[1]}`;
    const parts = dateStr.split('-');
    if (parts.length === 2) {
      const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      return meses[parseInt(parts[1]) - 1];
    }
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}`;
    }
    return dateStr;
  };

  const formatFullDate = (dateStr) => {
    if (!dateStr) return '';
    if (dateStr.includes('-W')) return `Semana ${dateStr.split('-W')[1]}`;
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    } catch { return dateStr; }
  };

  if (loading) return <div className="text-center py-12 text-brand-600">Cargando...</div>;

  const comparisonData = chartData ? (() => {
    const allDates = new Set([
      ...Object.keys(chartData.incomeOverTime || {}),
      ...Object.keys(chartData.expenseOverTime || {})
    ]);
    let cumIncome = 0, cumExpense = 0;
    return Array.from(allDates).sort().map(date => {
      const ing = chartData.incomeOverTime?.[date] || 0;
      const gas = chartData.expenseOverTime?.[date] || 0;
      cumIncome += ing;
      cumExpense += gas;
      return {
        dateRaw: date,
        date: formatDateLabel(date),
        ingresos: ing,
        gastos: gas,
        balance: ing - gas,
        tendenciaIng: cumIncome,
        tendenciaGas: cumExpense
      };
    });
  })() : [];

  const totalIngresos = comparisonData.reduce((s, d) => s + d.ingresos, 0);
  const totalGastos = comparisonData.reduce((s, d) => s + d.gastos, 0);
  const profitPercent = data?.totalIncome > 0 ? ((data.profit / data.totalIncome) * 100).toFixed(1) : 0;

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const item = payload[0]?.payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg border text-sm">
        <p className="font-semibold text-brand-800 mb-2">{formatFullDate(item?.dateRaw)}</p>
        <p className="text-green-600">Ingresos: {item?.ingresos?.toLocaleString('es-ES')} €</p>
        <p className="text-red-500">Gastos: {item?.gastos?.toLocaleString('es-ES')} €</p>
        <p className={`font-semibold mt-1 ${item?.balance >= 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
          Balance: {item?.balance >= 0 ? '+' : ''}{item?.balance?.toLocaleString('es-ES')} €
        </p>
      </div>
    );
  };

  const paymentMethodData = data?.incomeByMethod ? 
    Object.entries(data.incomeByMethod).map(([name, value]) => ({ 
      name: name.charAt(0).toUpperCase() + name.slice(1), value 
    })) : [];

  const expenseCategoryData = data?.expenseByCategory ? 
    Object.entries(data.expenseByCategory).map(([name, value]) => ({ 
      name: name.charAt(0).toUpperCase() + name.slice(1), value 
    })) : [];

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="card">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-brand-600 font-medium mr-2">Período:</span>
          {[
            { key: 'week', label: 'Semana' },
            { key: 'month', label: 'Mes' },
            { key: 'quarter', label: 'Trimestre' },
            { key: 'year', label: 'Año' },
            { key: 'custom', label: 'Personalizado' }
          ].map(p => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                period === p.key ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 hover:bg-brand-100'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        {period === 'custom' && (
          <div className="flex gap-4 mt-4 flex-wrap">
            <div>
              <label className="text-xs text-brand-500">Desde</label>
              <input type="date" value={customRange.start} onChange={e => setCustomRange(r => ({ ...r, start: e.target.value }))} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs text-brand-500">Hasta</label>
              <input type="date" value={customRange.end} onChange={e => setCustomRange(r => ({ ...r, end: e.target.value }))} className="input mt-1" />
            </div>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <p className="text-green-600 text-xs sm:text-sm mb-1">💰 Ingresos</p>
          <p className="text-xl sm:text-2xl font-bold text-green-700">{data?.totalIncome?.toLocaleString('es-ES')} €</p>
          <p className="text-xs text-green-500 mt-1">{data?.incomeCount || 0} operaciones</p>
        </div>
        <div className="card bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <p className="text-red-600 text-xs sm:text-sm mb-1">📉 Gastos</p>
          <p className="text-xl sm:text-2xl font-bold text-red-700">{data?.totalExpense?.toLocaleString('es-ES')} €</p>
          <p className="text-xs text-red-500 mt-1">{data?.expenseCount || 0} operaciones</p>
        </div>
        <div className={`card bg-gradient-to-br ${data?.profit >= 0 ? 'from-emerald-50 to-emerald-100 border-emerald-200' : 'from-orange-50 to-orange-100 border-orange-200'}`}>
          <p className={`text-xs sm:text-sm mb-1 ${data?.profit >= 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
            {data?.profit >= 0 ? '✨ Beneficio' : '⚠️ Pérdida'}
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${data?.profit >= 0 ? 'text-emerald-700' : 'text-orange-700'}`}>
            {data?.profit >= 0 ? '+' : ''}{data?.profit?.toLocaleString('es-ES')} €
          </p>
        </div>
        <div className="card bg-gradient-to-br from-brand-50 to-brand-100 border-brand-200">
          <p className="text-brand-600 text-xs sm:text-sm mb-1">📊 Margen</p>
          <p className="text-xl sm:text-2xl font-bold text-brand-700">{profitPercent}%</p>
          <p className="text-xs text-brand-500 mt-1">del total</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <h3 className="text-lg sm:text-xl font-serif text-brand-800">📈 Ingresos vs Gastos</h3>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-600 font-medium">Total: {totalIngresos.toLocaleString('es-ES')} €</span>
            <span className="text-red-500 font-medium">Total: {totalGastos.toLocaleString('es-ES')} €</span>
            <label className="flex items-center gap-1 text-brand-500 cursor-pointer">
              <input type="checkbox" checked={showTrend} onChange={e => setShowTrend(e.target.checked)} />
              Tendencia
            </label>
          </div>
        </div>
        {comparisonData.length === 0 ? (
          <p className="text-center py-12 text-brand-400">No hay datos para mostrar en este período</p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={comparisonData}>
              <XAxis dataKey="date" fontSize={11} angle={comparisonData.length > 7 ? -45 : 0} textAnchor={comparisonData.length > 7 ? 'end' : 'middle'} height={comparisonData.length > 7 ? 60 : 30} />
              <YAxis fontSize={11} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k€` : `${v}€`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="ingresos" fill="#22c55e" radius={[4, 4, 0, 0]} name="Ingresos" />
              <Bar dataKey="gastos" fill="#ef4444" radius={[4, 4, 0, 0]} name="Gastos" />
              {showTrend && (
                <>
                  <Line type="monotone" dataKey="tendenciaIng" stroke="#16a34a" strokeWidth={2} dot={false} name="Acum. Ing." />
                  <Line type="monotone" dataKey="tendenciaGas" stroke="#dc2626" strokeWidth={2} dot={false} name="Acum. Gas." />
                </>
              )}
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-serif text-brand-800 mb-4">💳 Ingresos por método</h3>
          {paymentMethodData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={paymentMethodData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={35}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {paymentMethodData.map((_, i) => <Cell key={i} fill={COLORS_METHODS[i % COLORS_METHODS.length]} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v.toLocaleString('es-ES')} €`} />
              </PieChart>
            </ResponsiveContainer>
          ) : <p className="text-center text-brand-400 py-8">Sin datos</p>}
        </div>
        <div className="card">
          <h3 className="text-lg font-serif text-brand-800 mb-4">🏷️ Gastos por categoría</h3>
          {expenseCategoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={expenseCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={35}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {expenseCategoryData.map((_, i) => <Cell key={i} fill={COLORS_EXPENSE[i % COLORS_EXPENSE.length]} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v.toLocaleString('es-ES')} €`} />
              </PieChart>
            </ResponsiveContainer>
          ) : <p className="text-center text-brand-400 py-8">Sin datos</p>}
        </div>
      </div>
    </div>
  );
}

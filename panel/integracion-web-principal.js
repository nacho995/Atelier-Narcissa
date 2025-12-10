/**
 * INTEGRACIÓN CON LA WEB PRINCIPAL
 * 
 * Este archivo muestra cómo registrar pagos automáticamente
 * desde la web principal hacia el panel de control.
 * 
 * INSTRUCCIONES:
 * 1. Configurar la API_KEY en las variables de entorno de la web principal
 * 2. Llamar a registerPayment() cuando se confirme un pago
 */

const PANEL_API_URL = process.env.PANEL_URL || 'https://panel.tudominio.com';
const API_KEY = process.env.PANEL_API_KEY;

/**
 * Registra un pago en el panel de control
 * @param {Object} payment - Datos del pago
 * @param {number} payment.amount - Importe en euros
 * @param {string} payment.paymentMethod - 'bizum' | 'tarjeta' | 'transferencia'
 * @param {string} payment.concept - Descripción del pago
 * @param {string} [payment.notes] - Notas adicionales
 */
export async function registerPayment({ amount, paymentMethod, concept, notes }) {
  try {
    const res = await fetch(`${PANEL_API_URL}/api/webhook/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify({ amount, paymentMethod, concept, notes })
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Error registrando pago:', error);
      return false;
    }

    console.log('Pago registrado en el panel');
    return true;
  } catch (error) {
    console.error('Error conectando con el panel:', error);
    return false;
  }
}

// EJEMPLO DE USO con Stripe
// En tu webhook de Stripe:
/*
app.post('/webhook/stripe', async (req, res) => {
  const event = req.body;
  
  if (event.type === 'payment_intent.succeeded') {
    const payment = event.data.object;
    
    await registerPayment({
      amount: payment.amount / 100, // Stripe usa centimos
      paymentMethod: 'tarjeta',
      concept: payment.description || 'Pago con tarjeta',
      notes: `Stripe ID: ${payment.id}`
    });
  }
  
  res.json({ received: true });
});
*/

// EJEMPLO DE USO manual (para Bizum/transferencias confirmadas)
/*
// Cuando confirmes manualmente que ha llegado un Bizum o transferencia:
await registerPayment({
  amount: 1500,
  paymentMethod: 'bizum',
  concept: 'Vestido de novia modelo A',
  notes: 'Cliente: María García'
});
*/


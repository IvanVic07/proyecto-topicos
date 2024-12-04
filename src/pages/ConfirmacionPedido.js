import { useRouter } from 'next/router';

export default function ConfirmacionPedido() {
  const router = useRouter();
  const { amount } = router.query;  // Obtener el monto del pago desde la URL

  return (
    <div className="confirmacion-container">
      <div className="confirmacion-card">
        <div className="icono-exito">
          <img src="/awe.png" alt="Icono de éxito" />
        </div>
        <h1 className="titulo">¡Tu pedido ha sido confirmado!</h1>
        <p className="mensaje">Gracias por tu compra, te enviaremos un correo con los detalles de tu pedido.</p>
        <div className="detalles">
          <p><strong>Monto pagado:</strong> ${amount}</p>
          <p><strong>Fecha de compra:</strong> {new Date().toLocaleDateString()}</p>
        </div>
        <div className="acciones">
          <button onClick={() => router.push('/')} className="btn-home">
            Volver al inicio
          </button>
          <button onClick={() => router.push('/order-history')} className="btn-order-history">
            Ver mi pedido
          </button>
        </div>
      </div>
    </div>
  );
}

import carrito from '../cartWidget/assetsCart/carrito2.png'
import estilos from '../cartWidget/cartWidget.module.css'
function cartWidget() {
  return (
    <div>
       
      <img className={estilos.carritoNav} src={carrito} alt="Esta es la imagen de un carrito" />
      <p className={estilos.numeroFijo}>1</p>
    </div>
  )
}

export default cartWidget
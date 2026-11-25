// funcion que muestra el detalle de cada queque
function verDetalle(nombre) {
    if (nombre == "volcan") {
        alert(`🌋 Volcán: sírvelo tibio para que el chocolate se derrita.`);
    }
    else if (nombre == "chocolate") {
        alert(`🍫 Chocolate: ideal para cumpleaños y reuniones.`);
    }
    else if (nombre == "marmoleado") {
        alert(`🤎 Marmoleado: perfecto para acompañar un café o un té.`);
    }
    else if (nombre == "vainilla") {
        alert(`🤍 Vainilla: suave y rico para toda la familia.`);
    }
    else if (nombre == "naranja") {
        alert(`🍊 Naranja: fresco y con un aroma delicioso.`);
    }
    else if (nombre == "coco") {
        alert(`🥥 Coco: dulce y con coco rallado por encima.`);
    }
}

const NUMERO_WHATSAPP = "59167644072"; // 591 + tu número

function pedir(producto) {
  const mensaje = "Hola \u{1F44B}, quiero hacer un pedido de: " + producto + ". \u00BFEst\u00E1 disponible?";
  const url = "https://api.whatsapp.com/send?phone=" + NUMERO_WHATSAPP + "&text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}
function pedirGeneral() {
  const mensaje = "Hola \u{1F44B}, quiero hacer un pedido de queques. \u00BFQu\u00E9 sabores tienen disponibles hoy?";
  const url = "https://api.whatsapp.com/send?phone=" + NUMERO_WHATSAPP + "&text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

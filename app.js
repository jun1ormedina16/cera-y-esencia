// Número de WhatsApp de Cera & Esencia (con indicativo 57 de Colombia)
const PHONE_NUMBER = "573000000000"; 

// Catálogo completo con los 9 moldes actualizados para los combos de velones
const productos = [
  // --- COMBOS DE VELONES PRINCIPALES (Con opción para armar moldes por WhatsApp) ---
  {
    id: 1,
    nombre: "Combo Trío de Velones Surtidos (Pack x3)",
    categoria: "combos",
    descripcion: "Elige entre nuestros 9 moldes disponibles (Sagrada Familia grande/pequeña, Virgen María, Guadalupe, etc.) para armar tu pack de 3.",
    precio: 20000,
    imagen: "img/IMG_0911.jpeg",
    esComboPersonalizable: true
  },
  {
    id: 2,
    nombre: "Combo Set Mediano de Velones (Pack x6)",
    categoria: "combos",
    descripcion: "Arma tu set de 6 velones seleccionando tus moldes y colores favoritos por WhatsApp.",
    precio: 40000,
    imagen: "img/IMG_0912.jpeg",
    esComboPersonalizable: true
  },
  {
    id: 3,
    nombre: "Combo Gran Set de Velones (Pack x9)",
    categoria: "combos",
    descripcion: "Lleva el combo completo de 9 velones combinando todos los moldes artesanales disponibles.",
    precio: 64000,
    imagen: "img/IMG_0910.jpeg",
    esComboPersonalizable: true
  },

  // --- VELAS POR UNIDAD (Con las 2 Sagradas Familias y las 2 Vírgenes) ---
  {
    id: 101,
    nombre: "Vela Sagrada Familia (Grande)",
    categoria: "unidad",
    descripcion: "Hermosa vela artesanal en relieve con la figura grande de la Sagrada Familia.",
    precio: 25000,
    imagen: "img/IMG_0905.jpeg"
  },
  {
    id: 102,
    nombre: "Vela Sagrada Familia (Pequeña)",
    categoria: "unidad",
    descripcion: "Versión compacta de la vela artesanal de la Sagrada Familia.",
    precio: 5000,
    imagen: "img/IMG_0914.jpeg"
  },
  {
    id: 103,
    nombre: "Vela Virgen María",
    categoria: "unidad",
    descripcion: "Vela moldeada con la advocación de la Virgen María.",
    precio: 5000,
    imagen: "img/IMG_0915.jpeg"
  },
  {
    id: 104,
    nombre: "Vela Virgen de Guadalupe",
    categoria: "unidad",
    descripcion: "Vela artesanal en relieve con la imagen de la Virgen de Guadalupe.",
    precio: 5000,
    imagen: "img/IMG_0916.jpeg"
  },
  {
    id: 105,
    nombre: "Vela Grinch",
    categoria: "unidad",
    descripcion: "Vela decorativa con forma de sombrero festivo o temático.",
    precio: 15000,
    imagen: "img/IMG_0917.jpeg"
  },
  {
    id: 106,
    nombre: "Vela Osito tierno",
    categoria: "unidad",
    descripcion: "Tierna figura en cera con forma de osito sentado, ideal para detalles.",
    precio: 5000,
    imagen: "img/IMG_0908.jpeg"
  },
  {
    id: 107,
    nombre: "Vela Cilindro Texturizado",
    categoria: "unidad",
    descripcion: "Vela cilíndrica con textura en relieve y acabado translúcido.",
    precio: 8000,
    imagen: "img/IMG_0911_1.jpeg"
  },
  {
    id: 108,
    nombre: "Vela Arbol de navidad",
    categoria: "unidad",
    descripcion: "Vela En forma de arbol  de pino especial para navidad.",
    precio: 4000,
    imagen: "img/IMG_0919.jpeg"
  },

  // --- DEMÁS COMBOS Y SETS ---
  {
    id: 4,
    nombre: "Set Intención Prosperidad (Pack x5)",
    categoria: "intencion",
    descripcion: "Pack x5 rectangulares con grabados: Perseverancia, Abundancia, Viajes, Paciencia y Dinero. Bolsita de tul.",
    precio: 8000,
    imagen: "img/IMG_0906.jpeg"
  },
  {
    id: 5,
    nombre: "Combo Sagrada Familia & virgenes",
    categoria: "religioso",
    descripcion: "Vela central moldeada de la Sagrada Familia acompañada de velas decorativas artesanales.",
    precio: 12000,
    imagen: "img/IMG_0905_2.jpeg"
  },
  {
    id: 7,
    nombre: "Combo Relicario & Cilindro Estriado",
    categoria: "religioso",
    descripcion: "Figura devocional acompañada de ángel blanco y cilindro texturizado de alta calidad.",
    precio: 30000,
    imagen: "img/IMG_0916_2.jpeg"
  },
  {
    id: 8,
    nombre: "Set de Intención 'Sweet & Smile'",
    categoria: "intencion",
    descripcion: "Velas planas con grabados inspiradores (Lovely, Kindly, Sweet, Smile). Pack x4 en tul.",
    precio: 24000,
    imagen: "img/IMG_0908_2.jpeg"
  },
  {
    id: 9,
    nombre: "Set Estrellas de los Deseos (Set x5)",
    categoria: "intencion",
    descripcion: "Velas en forma de estrella con grabados: Vivir, Bendición, Dinero, Creer y Amor. Presentación en tul.",
    precio: 26000,
    imagen: "img/IMG_0907.jpeg"
  },
    {
    id: 10,
    nombre: "Set Arboles de navidad (Set x4)",
    categoria: "intencion",
    descripcion: "Velas en forma dearbol de navidad de diferentes tamaños",
    precio: 12000,
    imagen: "img/IMG_0920.jpeg"
  }
];

// Carrito persistente en localStorage
let carrito = JSON.parse(localStorage.getItem('cart_cera_esencia')) || [];
let categoriaActual = 'todos';

function renderProductos() {
  const container = document.getElementById('productos-grid');
  container.innerHTML = '';

  const filtrados = categoriaActual === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActual);

  filtrados.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';

    let botonExtraHTML = '';
    if (prod.esComboPersonalizable) {
      botonExtraHTML = `<button class="btn-wsp-combo" onclick="armarComboWhatsApp('${prod.nombre}')">💬 Armar moldes por WhatsApp</button>`;
    }

    card.innerHTML = `
      <div class="card-img-container">
        <span class="badge-tag">${prod.esComboPersonalizable ? 'Combo Velones' : (prod.categoria === 'unidad' ? 'Unidad' : prod.categoria)}</span>
        <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80'">
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${prod.nombre}</h3>
          <p class="card-desc">${prod.descripcion}</p>
        </div>
        <div class="card-footer">
          <span class="card-price">$${prod.precio.toLocaleString('es-CO')}</span>
          <div>
            <button class="btn-add" onclick="agregarAlCarrito(${prod.id})">+ Agregar</button>
            ${botonExtraHTML}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  actualizarBarraCarrito();
}

function filtrar(cat) {
  categoriaActual = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  renderProductos();
}

function armarComboWhatsApp(nombreCombo) {
  let mensaje = `¡Hola *Cera & Esencia*! 🕯️✨ Me interesa el *${nombreCombo}* y quiero elegir mis moldes entre los 9 disponibles (Sagrada Familia grande/pequeña, Virgen María, Virgen de Guadalupe, etc.) y los colores. ¿Me ayudan a armarlo?`;
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  carrito.push({
    ...producto,
    nombreKey: producto.nombre
  });

  localStorage.setItem('cart_cera_esencia', JSON.stringify(carrito));
  actualizarBarraCarrito();
}

function actualizarBarraCarrito() {
  const countSpan = document.getElementById('cart-count');
  const totalSpan = document.getElementById('cart-total');
  
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  countSpan.textContent = `${carrito.length} producto(s) en tu lista`;
  totalSpan.textContent = `$${total.toLocaleString('es-CO')} COP`;
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("Selecciona al menos un producto para enviar el pedido por WhatsApp.");
    return;
  }

  let mensaje = "¡Hola *Cera & Esencia*! 🕯️✨ Me gustaría realizar el siguiente pedido:\n\n";
  let total = 0;

  const conteo = {};
  carrito.forEach(p => {
    const key = p.nombreKey || p.nombre;
    if (conteo[key]) {
      conteo[key].cantidad++;
      conteo[key].subtotal += p.precio;
    } else {
      conteo[key] = { cantidad: 1, precio: p.precio, subtotal: p.precio };
    }
  });

  for (const [nombre, datos] of Object.entries(conteo)) {
    mensaje += `• *${nombre}* (x${datos.cantidad}) - $${datos.subtotal.toLocaleString('es-CO')}\n`;
    total += datos.subtotal;
  }

  mensaje += `\n*Total a pagar:* $${total.toLocaleString('es-CO')} COP\n\n¿Me confirman disponibilidad y los datos bancarios para realizar el pago?`;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Cargar catálogo inicial
renderProductos();
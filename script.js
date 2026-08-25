/* Sonrisa Imperial — interacciones mínimas */

function iniciar() {

  /* Año dinámico en el footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Borde de la barra al hacer scroll */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Revelado escalonado del presupuesto.
     Los atributos se ponen desde aquí a propósito: si no hay JS,
     el documento se ve completo en vez de quedarse invisible. */
  var doc = document.getElementById('doc');
  if (doc && 'IntersectionObserver' in window) {
    var piezas = doc.querySelectorAll('.doc__case, .doc__item, .doc__total, .doc__foot');
    var paso = 90;

    Array.prototype.forEach.call(piezas, function (pieza, i) {
      pieza.setAttribute('data-reveal', '');
      pieza.style.setProperty('--d', (i * paso) + 'ms');
    });

    var sello = doc.querySelector('.doc__stamp');
    if (sello) sello.style.setProperty('--d', (piezas.length * paso + 220) + 'ms');

    doc.classList.add('is-armed');

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        doc.classList.add('is-revealed');
        observador.disconnect();
      });
    }, { threshold: 0.25 });

    observador.observe(doc);
  }

  /* Fecha mínima = hoy */
  var fecha = document.getElementById('fecha');
  if (fecha) {
    var hoy = new Date();
    hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());
    fecha.min = hoy.toISOString().slice(0, 10);
  }

  /* Validación del formulario */
  var form = document.getElementById('form-cita');
  if (!form) return;

  var reglas = {
    nombre: function (v) {
      if (!v.trim()) return 'Escribe tu nombre.';
      if (v.trim().length < 3) return 'El nombre es demasiado corto.';
      return '';
    },
    telefono: function (v) {
      var digitos = v.replace(/\D/g, '');
      if (!digitos) return 'Necesitamos un teléfono para confirmar.';
      if (digitos.length < 8) return 'Revisa el número, parece incompleto.';
      return '';
    },
    email: function (v) {
      if (!v.trim()) return '';
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Ese correo no parece válido.';
    },
    motivo: function (v) {
      return v ? '' : 'Elige el motivo de tu consulta.';
    },
    fecha: function (v) {
      return v ? '' : 'Indica una fecha preferida.';
    }
  };

  var mostrarError = function (campo, mensaje) {
    var slot = form.querySelector('[data-error-for="' + campo.id + '"]');
    if (slot) slot.textContent = mensaje;
    campo.classList.toggle('is-invalid', Boolean(mensaje));
  };

  var validarCampo = function (campo) {
    var regla = reglas[campo.id];
    if (!regla) return true;
    var mensaje = regla(campo.value);
    mostrarError(campo, mensaje);
    return !mensaje;
  };

  Object.keys(reglas).forEach(function (id) {
    var campo = document.getElementById(id);
    if (!campo) return;
    campo.addEventListener('blur', function () { validarCampo(campo); });
    campo.addEventListener('input', function () {
      if (campo.classList.contains('is-invalid')) validarCampo(campo);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var primerError = null;
    Object.keys(reglas).forEach(function (id) {
      var campo = document.getElementById(id);
      if (campo && !validarCampo(campo) && !primerError) primerError = campo;
    });

    if (primerError) {
      primerError.focus();
      return;
    }

    /* Sin backend: aquí iría el envío real (fetch a tu API, Formspree, etc.) */
    var datos = Object.fromEntries(new FormData(form).entries());
    console.log('Solicitud de cita:', datos);

    var nombre = datos.nombre.trim().split(' ')[0];
    document.getElementById('success-nombre').textContent = nombre;
    document.getElementById('form-success').hidden = false;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}

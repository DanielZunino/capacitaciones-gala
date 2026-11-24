// ===== Maestranza Gala · portal de capacitación (motor común de los portales de Daniel; una sola razón social). Se carga después de gala_base.js y de las charlas =====
// Con el RUT, el servidor dice la empresa de la persona (persona.emp) y el portal muestra:
//   logo, colores, vestimenta de los dibujos, secciones y charlas de SU empresa, inducción de SU empresa y su Reglamento Interno.
(function () {
  if (window.__siExtra) return; window.__siExtra = true;

  // ---------- 1) La empresa (una sola razón social)
  const EMPRESAS = window.SI_EMPRESAS = {
    gala: { k: 'gala', n: 'Maestranza Gala Ltda.', corto: 'Maestranza Gala', rut: '', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMTIwIj48cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjEyMCIgcng9IjE0IiBmaWxsPSIjNDU1QTY0Ii8+PHRleHQgeD0iMjQwIiB5PSI1MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIiBmb250LXNpemU9IjM0IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjRkZGRkZGIiBsZXR0ZXItc3BhY2luZz0iMyI+TUFFU1RSQU5aQTwvdGV4dD48dGV4dCB4PSIyNDAiIHk9IjkyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzgiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNDRkQ4REMiIGxldHRlci1zcGFjaW5nPSI4Ij5HQUxBPC90ZXh0Pjwvc3ZnPg==', ar: 1.38,
      c1: '#455A64', c2: '#90A4AE', head: 'MAESTRANZA GALA', voz: 'Maestranza Gala' }
  };
  const ORDEN_EMP = ['gala'];
  const GRUPO = { n: 'Maestranza Gala', c1: '#455A64', c2: '#90A4AE', head: 'MAESTRANZA GALA' };
  const sinT = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  const empDeNombre = s => 'gala';
  const empDe = p => (p ? 'gala' : '');
  window.siEmpDeNombre = empDeNombre;

  // Razón social y RUT en diplomas y certificados
  try { Object.keys(RAZONES).forEach(k => delete RAZONES[k]); ORDEN_EMP.forEach(k => { RAZONES[EMPRESAS[k].n] = EMPRESAS[k].rut; }); } catch (e) {}

  // ---------- 2) Secciones (cada una dice para qué empresas existe)
  const SI_SECS = [
    { id: 'todos', t: 'Para todos', ic: '⭐', c: '#455A64', d: 'Lo que todo el equipo de la maestranza debe saber', emp: ORDEN_EMP },
    { id: 'taller', t: 'Taller', ic: '🏭', c: '#455A64', d: 'Esmeril, grúa horquilla, izaje, altura, bloqueo y faenas de clientes', emp: ORDEN_EMP },
    { id: 'maquinas', t: 'Máquinas y herramientas', ic: '⚙️', c: '#1565C0', d: 'Torno, fresa, taladro, sierra, guillotina, plegadora y mesa de corte', emp: ORDEN_EMP },
    { id: 'soldadura', t: 'Soldadura y calderería', ic: '🔥', c: '#E65100', d: 'Arco, MIG y TIG, humos, oxicorte, cilindros y trabajos en caliente', emp: ORDEN_EMP },
    { id: 'granallado', t: 'Granallado y pintura', ic: '🎨', c: '#6A1B9A', d: 'Granallado y pintura con pistola', emp: ORDEN_EMP },
    { id: 'mantencion', t: 'Mecánica de mantención', ic: '🔧', c: '#2E7D32', d: 'Mantención segura y operación de grúa horquilla', emp: ORDEN_EMP },
    { id: 'oficina', t: 'Oficina y bodega', ic: '🗂️', c: '#6D4C41', d: 'Computador, bodega y entrar al taller', emp: ORDEN_EMP }
  ];
  const ORDEN_SEC = SI_SECS.map(s => s.id);

  // ---------- 3) Normas que respaldan cada charla (van en el registro de la capacitación)
  const N = {
    l16744: 'Ley 16.744: seguro social contra accidentes del trabajo y enfermedades profesionales; art. 68, obligación de implantar medidas de prevención y proporcionar los EPP.',
    ds44: 'DS 44/2023 MINTRAB: gestión preventiva de los riesgos laborales; art. 15, deber de informar los riesgos laborales; art. 16, capacitación en seguridad y salud en el trabajo.',
    ds594: 'DS 594/1999 MINSAL: condiciones sanitarias y ambientales básicas en los lugares de trabajo.',
    ds57: 'DS 57/2019 MINSAL: clasificación, etiquetado y fichas de datos de seguridad (HDS) de sustancias químicas.',
    l20949: 'Código del Trabajo, arts. 211-F a 211-J (Ley 20.949): 25 kg como máximo sin ayuda mecánica; 20 kg para menores de 18 años y mujeres.',
    l20096: 'Ley 20.096 y DS 594 (arts. 109 a, b y c): protección de trabajadores expuestos a radiación ultravioleta de origen solar.',
    l21643: 'Ley 21.643 (Ley Karin): prevención, investigación y sanción del acoso laboral, sexual y la violencia en el trabajo.',
    prexor: 'Protocolo de Exposición Ocupacional a Ruido (PREXOR), MINSAL.',
    tmert: 'Protocolo de Vigilancia para Trabajadores Expuestos a Factores de Riesgo de Trastornos Musculoesqueléticos de Extremidades Superiores (TMERT), MINSAL.',
    psico: 'Protocolo de Vigilancia de Riesgos Psicosociales en el Trabajo (cuestionario CEAL-SM/SUSESO), MINSAL.',
    res156: 'Circular SUSESO (Res. Ex. 156): procedimiento ante accidentes graves y fatales.',
    l18290: 'Ley 18.290 de Tránsito: licencias de conducir y normas de circulación.',
    ds40: 'DS 40/1969 MINTRAB: reglamento sobre prevención de riesgos profesionales; deber de informar los riesgos.',
    dec158: 'DS 158/2014 y Res. 2.196 SAG: uso de plaguicidas, periodo de carencia y de reingreso.',
    ds10: 'DS 10/2012 MINSAL: reglamento de calderas, autoclaves y equipos que utilizan vapor de agua (referencia para la operación segura de generadores de calor).'
  };
  const NORMAS_SI = {
    induccion: [N.ds44, N.l16744, N.ds40, N.ds594],
    autocuidado: [N.l16744, N.ds44], peligros: [N.ds44, N.ds40], epp: [N.l16744, N.ds594], orden: [N.ds594], caidas: [N.ds594], cargas: [N.l20949, N.ds594],
    accidente: [N.l16744, N.res156], incendios: [N.ds594], emergencias: [N.ds594, N.ds44], senaletica: [N.ds594], quimicos: [N.ds57, N.ds594], electrico: [N.ds594],
    ruido: [N.prexor, N.ds594], uv: [N.l20096], calor: [N.ds594], tmert: [N.tmert], psicosocial: [N.psico, N.ds44], karin: [N.l21643], trayecto: [N.l16744, N.l18290], celular: [N.ds44, N.l18290],
    ta_esmeril: [N.ds594, N.prexor], ta_horquilla: [N.ds594], ta_izaje: [N.ds594], ta_altura: [N.ds594], ta_bloqueo: [N.ds594], ta_atrapamiento: [N.ds594], ta_faenas: [N.ds44, N.ds594], ta_herramientas: [N.ds594],
    mq_torno: [N.ds594], mq_fresa: [N.ds594], mq_taladro_sierra: [N.ds594], mq_guillotina_plegadora: [N.ds594], mq_mesa_corte: [N.ds594],
    so_arco: [N.ds594], so_mig_tig: [N.ds594], so_humos: [N.ds594], so_oxicorte: [N.ds594], so_cilindros: [N.ds594], so_caliente: [N.ds594],
    gr_granallado: [N.ds594, N.prexor], gr_pintura: [N.ds57, N.ds594],
    mt_mantencion: [N.ds594], mt_horquilla: [N.ds594, N.l18290],
    of_pvd: [N.ds594, N.tmert], of_bodega: [N.ds594, N.l20949], of_taller: [N.ds594]
  };

  // ---------- 4) Construir las charlas de una empresa (textos con [[L:..|X:..|A:..|I:..]] resueltos)
  const C = window.SI_CONT || { temas: [] };
  const deep = (o, f) => Array.isArray(o) ? o.map(x => deep(x, f)) : (o && typeof o === 'object') ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, deep(v, f)])) : f(o);
  const cvQ = (q, e) => { const r = s => window.siTxt(s, e); const one = x => x.vf !== undefined ? { q: r(x.q), vf: x.vf, w: r(x.w) } : { q: r(x.q), o: (x.o || []).map(r), a: 0, w: r(x.w) };
    const vs = q.v || []; return Object.assign({ s: q.s }, one(vs[0]), { v: vs.slice(1).map(one) }); };
  let EMP_HECHA = '';
  function construir(e) {
    if (!EMPRESAS[e]) e = 'gala';
    if (EMP_HECHA === e && TOPICS.length) { window.SI_EMP = e; if (M_ACT !== EMPRESAS[e]) marca(e); try { window.__siAjInd && window.__siAjInd(e); } catch (er) {} return; }
    window.SI_EMP = e;
    const temas = C.temas.filter(t => (t.emp || []).indexOf(e) >= 0);
    const nuevos = temas.map(t => {
      const r = s => window.siTxt(s, e);
      const o = { id: t.id, sec: t.sec === 'induccion' ? 'todos' : t.sec, title: r(t.title), thumb: t.thumb, mins: t.mins, dur: t.mins,
        learn: (t.learn || []).map(l => { const x = { s: l.s, t: r(l.t), x: r(l.x) }; if (l.k) x.k = r(l.k); if (l.puesto) x.puesto = true; return x; }),
        quiz: (t.quiz || []).map(q => cvQ(q, e)).concat(window.__siActsDe ? window.__siActsDe(t.id, e) : []) };
      return o;
    });
    nuevos.sort((a, b) => (a.id === 'induccion' ? -1 : b.id === 'induccion' ? 1 : 0) || (ORDEN_SEC.indexOf(a.sec) - ORDEN_SEC.indexOf(b.sec)));
    TOPICS.splice(0, TOPICS.length, ...nuevos);
    Object.keys(NORMAS).forEach(k => delete NORMAS[k]);
    nuevos.forEach(t => { NORMAS[t.id] = { obj: 'Que la persona trabajadora conozca los peligros, riesgos y medidas de control de: ' + t.title.replace(/\s*\(IRL\)\s*$/, '') + '.', n: (NORMAS_SI[t.id] || [N.ds44, N.ds594]).slice() }; });
    // secciones de la empresa (solo las que tienen charlas)
    const secs = SI_SECS.filter(s => s.emp.indexOf(e) >= 0 && nuevos.some(t => t.sec === s.id)).map(s => ({ id: s.id, t: s.t, ic: s.ic, c: s.c, d: s.d }));
    SECCIONES.splice(0, SECCIONES.length, ...secs);
    // plan personal: primero lo crítico de cada sección
    try {
      PLAN_CFG.ordenSec = secs.map(s => s.id);
      PLAN_CFG.critico = { taller: ['ta_atrapamiento', 'ta_esmeril', 'ta_izaje', 'ta_horquilla', 'ta_bloqueo', 'ta_altura', 'ta_herramientas', 'ta_faenas'],
        maquinas: ['mq_torno', 'mq_guillotina_plegadora', 'mq_taladro_sierra', 'mq_fresa', 'mq_mesa_corte'],
        soldadura: ['so_humos', 'so_arco', 'so_cilindros', 'so_caliente', 'so_oxicorte', 'so_mig_tig'], granallado: ['gr_granallado', 'gr_pintura'],
        mantencion: ['mt_mantencion', 'mt_horquilla'], oficina: ['of_taller', 'of_pvd', 'of_bodega'] };
      PLAN_CFG.base = ['peligros', 'epp', 'accidente', 'orden', 'caidas', 'cargas', 'incendios', 'emergencias', 'senaletica', 'ruido', 'quimicos', 'electrico', 'trayecto', 'celular', 'karin', 'psicosocial', 'tmert', 'uv', 'calor'];
      PLAN_TEMPORADA.calor = [10, 11, 0, 1]; PLAN_TEMPORADA.uv = [8, 9, 10, 11, 0, 1];
      delete PLAN_TEMPORADA.transito; delete PLAN_TEMPORADA.hanta;
      INICIO_PROGRAMA = '16-11-2026';
    } catch (er) {}
    // inducción: riesgos del puesto y reglamento interno de su empresa
    try {
      IND_PUESTO = Object.assign({}, window.SI_IND_PUESTO || {});
      IND_TRANSV = (window.SI_IND_TRANSV || {})[e] || '';
      IND_REGLAMENTOS = {}; IND_REGLAMENTOS[EMPRESAS[e].n] = SCRIPT_URL + '?riohs=1&e=' + e;
      IND_FORMULARIO = '#inscribirme';
    } catch (er) {}
    EMP_HECHA = e;
    try { window.__siAjInd && window.__siAjInd(e); } catch (er) {}
    marca(e);
  }
  window.siConstruir = construir;

  // ---------- 5) Marca de la empresa: logo, colores, nombre en diplomas, camiones y grúas
  const mix = (hex, k) => { const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255; r = Math.round(r * k); g = Math.round(g * k); b = Math.round(b * k); return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join(''); };
  const imgs = {};
  const imgDe = src => { if (!src) return null; if (!imgs[src]) { const i = new Image(); i.src = src; imgs[src] = i; } return imgs[src]; };
  let M_ACT = null;
  window.SI_C1 = () => (M_ACT || GRUPO).c1;
  window.SI_C2 = () => (M_ACT || GRUPO).c2;
  window.SI_HEAD = () => (M_ACT || GRUPO).head;
  // carita del nivel: cofia (planta y packing), legionario (campo) o pelo (oficina / sin ingresar)
  window.SI_GORRO = c => `<path d="M20,52 Q16,22 50,20 Q84,22 80,52 Q74,34 50,34 Q26,34 20,52 Z" fill="#4E342E"/>`;
  window.SI_LOGO = () => (M_ACT && M_ACT.logo) ? imgDe(M_ACT.logo) : null;
  function marca(e) {
    const E = EMPRESAS[e]; M_ACT = E;
    const r = document.documentElement.style, dark = mix(E.c1, .62), dark2 = mix(E.c1, .8), line = mix(E.c1, 1.05);
    r.setProperty('--dark', dark); r.setProperty('--dark2', dark2); r.setProperty('--line', line); r.setProperty('--acc', E.c2); r.setProperty('--c1', E.c1);
    try { if (window.MARCA) Object.assign(window.MARCA, { nombre: E.corto, c1: E.c1, c2: E.c2, fachada: E.corto.toUpperCase(), corto: E.corto.split(' ')[0].toUpperCase() }); } catch (er) {}
    try { const L = window.__mjLOGO; if (L) { L.src = E.logo || ''; L.ar = E.ar || 2; } } catch (er) {}
    const bar = document.querySelector('.logoBar');
    if (bar) bar.classList.remove('siGrupo');
    if (bar) bar.innerHTML = `<img alt="${E.corto}" src="${E.logo}"><span>${E.head}<br>PROGRAMA DE CAPACITACIÓN</span>`;
    document.title = 'Capacitaciones ' + E.corto;
    document.body.classList.add('siIn');
  }
  function marcaGrupo() { marca('gala'); }
  const css = document.createElement('style');
  css.textContent = `.logoBar { border-bottom-color:var(--acc) !important; min-height:64px; } .ruta { border-left-color:var(--acc) !important; }
.logoBar img { height:52px !important; width:auto !important; max-width:40% !important; object-fit:contain; }
.logoBar .siLogos { display:flex; align-items:center; gap:10px; flex:none; } .logoBar .siLogos img { height:38px !important; max-width:none !important; }
.logoBar.siGrupo { display:block !important; text-align:center; padding:14px 12px 12px !important; }
.logoBar .siG1 { font-size:11px; font-weight:bold; letter-spacing:3px; color:#6B7A90; } .logoBar .siG2 { font-size:21px; font-weight:800; color:#12357F; margin-top:2px; line-height:1.15; }
.logoBar .siGl { width:46px; height:3px; border-radius:2px; background:#F2B33D; margin:9px auto 11px; }
.logoBar .siGg { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.logoBar .siGt { background:#fff; border:1px solid #E3E8F1; box-shadow:0 2px 6px rgba(18,53,127,.08); border-radius:14px; padding:10px 6px 9px; display:flex; flex-direction:column; align-items:center; gap:7px; }
.logoBar .siGm { height:42px; display:flex; align-items:center; justify-content:center; width:100%; }
.logoBar .siGm img { height:42px !important; width:auto !important; max-width:92% !important; object-fit:contain; }
.logoBar .siGi { width:42px; height:42px; border-radius:50%; background:#1F3A5F; display:flex; align-items:center; justify-content:center; font-size:22px; box-shadow:0 0 0 3px #F2B33D55; }
.logoBar .siGn { font-size:12.5px; font-weight:bold; color:#1F3A5F; line-height:1.2; }
.logoBar .siNom { color:var(--c1); font-weight:bold; font-size:15px; letter-spacing:1px; line-height:1.2; max-width:52%; }
.siEmpBtns { display:grid; grid-template-columns:1fr 1fr; gap:10px; } .siEmpBtns a { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; min-height:96px;
  background:#F7F8FA; border:2px solid #E2E3E8; border-radius:14px; padding:10px; text-decoration:none; color:#1F2937; font-weight:bold; font-size:14px; text-align:center; }
.siEmpBtns a img { height:40px; width:auto; max-width:90%; object-fit:contain; } .siEmpBtns a span.n { font-size:15px; color:#1F3A5F; }`;
  document.head.appendChild(css);

  // ---------- 6) Empresa de la persona: se arma todo al ingresar (y al volver con la sesión guardada)
  const empSesion = () => { try { return empDe(RUTA && RUTA.persona); } catch (e) { return ''; } };
  const R0 = renderHome;
  renderHome = function () {
    const e = window.__siVista ? window.__siVista() : empSesion();
    construir('gala');
    return R0.apply(this, arguments);
  };
  // texto de la cabecera de secciones
  try { const s = document.querySelector('#s-home .sec'); if (s) s.textContent = 'TUS CHARLAS POR SECCIÓN'; } catch (e) {}

  // ---------- 7) Validación de un diploma: se arma la empresa del diploma antes de mostrar su registro
  const V0 = validar;
  validar = async function (code) {
    try { const d = await fetch(SCRIPT_URL + '?codigo=' + encodeURIComponent(code)).then(r => r.json()); const e = d && d.ok ? empDeNombre(d.empresa) : ''; if (e) construir(e); } catch (er) {}
    return V0.apply(this, arguments);
  };
  esAntiguo = function () { return false; };

  // ---------- 8) Inscripción: si el sistema no reconoce el RUT, elige su empresa y completa la ficha guiada
  const INSC = 'https://danielzunino.github.io/inscripcion-san-ignacio/?e=gala';
  const botonesEmp = () => `<div class="siEmpBtns" style="grid-template-columns:1fr"><a href="${INSC}" target="_blank" rel="noopener"><img alt="" src="${EMPRESAS.gala.logo}"><span class="n">Ficha de inscripción · Maestranza Gala</span></a></div>`;
  alertaNomina = function (tipo, rut) {
    let m = document.getElementById('nomModal'); if (!m) { m = document.createElement('div'); m.id = 'nomModal'; document.body.appendChild(m); }
    const pend = tipo === 'pendiente';
    m.innerHTML = `<div class="nmbox"><div class="nmic">${pend ? '⏳' : '⚠️'}</div>
      <h3>${pend ? 'Tu inscripción está en revisión' : 'El sistema no te reconoce'}</h3>
      ${pend ? `<p>Ya recibimos tu inscripción${rut ? ' (RUT ' + rut + ')' : ''}, pero <b>el prevencionista aún no la acepta</b>.</p><p>Apenas la acepte podrás entrar con tu RUT y tu clave. Si ya pasó más de un día, avisa a tu jefatura.</p>`
        : `<p>${rut ? 'El RUT <b>' + rut + '</b> no está en la nómina.' : 'Tu RUT no está en la nómina.'}</p>
        <p class="nmalert">Si el sistema no te reconoce, <b>debes inscribirte en la nómina de la maestranza</b>. El prevencionista aceptará la inscripción.</p>
        <p><b>Toca el botón</b> y completa la ficha de inscripción:</p>${botonesEmp()}`}
      <button class="${pend ? 'btn' : 'lnk'}" id="nmX">${pend ? 'Entendido' : 'Revisar mi RUT'}</button></div>`;
    m.className = 'on';
    document.getElementById('nmX').onclick = () => { m.className = ''; const r = document.getElementById('rutHome'); if (r && !pend) { r.focus(); r.select && r.select(); } };
    try { SFX.play('bad'); } catch (e) {}
    try { VOZ.say(pend ? 'Tu inscripción está en revisión. Apenas el prevencionista la acepte, podrás entrar.' : 'El sistema no te reconoce. Debes inscribirte en la nómina de la maestranza. Toca el botón y completa la ficha.'); } catch (e) {}
  };
  inscripcionPerello = function () { alertaNomina('noreg', ''); };

  // ---------- 9) Repaso rápido: si el tema ya está aprobado, se reconoce aunque en este teléfono no esté guardada la clave
  try {
    if (typeof temaAprobado === 'function' && !temaAprobado.__si) {
      const vigente = ap => ap && (st.topic.id === 'induccion' ? venceInduccion(ap.fecha) - Date.now() >= 30 * 864e5 : venceAprob(ap.tema_id || st.topic.id, ap.fecha) > Date.now());
      const rk = r => String(r || '').replace(/[^0-9kK]/g, '').toUpperCase();
      const local = () => {
        try { const R = JSON.parse(localStorage.getItem('hsl_cap_ruta') || 'null'); if (R && rk(R.rut) === rk(st.rut) && R.aprob && vigente(R.aprob[st.topic.id])) return R.aprob[st.topic.id]; } catch (e) {}
        try { const ci = JSON.parse(localStorage.getItem('hsl_cap_ind') || 'null'); if (st.topic.id === 'induccion' && ci && rk(ci.rut) === rk(st.rut) && vigente(ci)) return ci; } catch (e) {}
        return null;
      };
      const consulta = async k => { st.hash = await rutHash(st.rut); const ctl = new AbortController(); setTimeout(() => ctl.abort(), 25000);
        return fetch(SCRIPT_URL + '?historial=' + st.hash + '&k=' + encodeURIComponent(k || ''), { signal: ctl.signal }).then(r => r.json()); };
      const desde = d => { if (d.persona) st.persona = d.persona; const ap = (d.temas || []).find(t => t.tema_id === st.topic.id) || null; return vigente(ap) ? ap : null; };
      const pedirClave = () => new Promise(res => {
        const b = document.getElementById('zBody'); if (!b) return res(null);
        b.innerHTML = `<h2>¿Ya aprobaste este tema?</h2><p>Escribe tu clave para revisar tu registro. Si ya lo aprobaste, podrás repasarlo rápido, sin esperar en cada lámina.</p>
          <input type="password" id="siClave" autocomplete="current-password" placeholder="Tu clave (ej: juan1985)" style="width:100%;box-sizing:border-box">
          <p id="siErr" style="display:none;color:#FF8A80;font-size:14px"></p><button class="btn" id="siOk">Revisar mi registro</button><button class="btn ghost" id="siNo">Seguir sin clave</button>`;
        const go = async () => {
          const k = document.getElementById('siClave').value.trim(), er = document.getElementById('siErr'), ok = document.getElementById('siOk');
          if (!k) { er.textContent = 'Escribe tu clave o toca "Seguir sin clave".'; er.style.display = 'block'; return; }
          ok.disabled = true; ok.textContent = 'Revisando…';
          try { const d = await consulta(k);
            if (!d.ok && (d.error === 'clave' || d.error === 'sinnac')) { ok.disabled = false; ok.textContent = 'Revisar mi registro'; er.textContent = d.error === 'sinnac' ? 'Tu ficha no tiene fecha de nacimiento. Contacta al área de RR.HH.' : 'Clave incorrecta. Intenta de nuevo.'; er.style.display = 'block'; return; }
            if (d.ok) { try { const ps = JSON.parse(localStorage.getItem('hsl_cap_persona') || '{}') || {}; localStorage.setItem('hsl_cap_persona', JSON.stringify(Object.assign(ps, { name: st.name, rut: st.rut, k }))); } catch (e2) {} }
            res(d.ok ? desde(d) : null);
          } catch (e2) { res(null); } };
        document.getElementById('siOk').onclick = go;
        document.getElementById('siClave').onkeydown = ev => { if (ev.key === 'Enter') go(); };
        document.getElementById('siNo').onclick = () => res(null);
      });
      temaAprobado = async function () {
        let d = null; try { d = await consulta((sesion() || {}).k || ''); } catch (e) {}
        if (d && d.ok) return desde(d) || local();
        const l = local(); if (l) return l;
        if (d && d.error === 'clave') return pedirClave();
        return null;
      };
      temaAprobado.__si = true;
    }
  } catch (e) {}

  // ---------- 9b) Revisores: en ALI no aplica (una sola empresa). Se deja apagado.
  //      Arriba de las secciones eligen la empresa; el portal dice siempre a qué empresa corresponde lo que están viendo.
  //      El resto de los trabajadores ve solo lo de su empresa.
  const REV_RUT = ['166756243', '16529176K'];
  const REV_NOM = [/DANIEL\s+(FELIPE\s+)?ZUNINO/, /[GJ]IULIANO.*TA[SZ]+ARA|JULIANO.*TA[SZ]+ARA/, /CARLA\s+(ANDREA\s+)?MORENO/];
  const rkR = r => String(r || '').replace(/[^0-9kK]/g, '').toUpperCase();
  const esRevisor = () => false; const esRevisor0 = () => { try { if (!RUTA || !RUTA.persona) return false; if (REV_RUT.indexOf(rkR(RUTA.rut)) >= 0) return true; const n = sinT(RUTA.persona.nombre); return REV_NOM.some(r => r.test(n)); } catch (e) { return false; } };
  window.siEsRevisor = esRevisor;
  let VER = ''; try { VER = localStorage.getItem('hsl_cap_ver') || ''; } catch (e) {}
  // cada vez que alguien ingresa con su RUT, parte viendo su propia empresa
  try { const bR = () => { VER = ''; try { localStorage.removeItem('hsl_cap_ver'); } catch (e) {} };
    document.addEventListener('click', ev => { if (ev.target && (ev.target.id === 'bRuta' || ev.target.id === 'bNoSoy')) bR(); }, true);
    document.addEventListener('keydown', ev => { if (ev.key === 'Enter' && ev.target && (ev.target.id === 'rutHome' || ev.target.id === 'claveHome')) bR(); }, true); } catch (e) {}
  const empVista = () => { const e = empSesion(); return esRevisor() && EMPRESAS[VER] ? VER : e; };
  window.__siVista = empVista;
  const barraRevisor = () => {
    const old = document.getElementById('siRev'); if (old) old.remove();
    if (!esRevisor()) return;
    const v = empVista(), mia = empSesion(), E = EMPRESAS[v] || EMPRESAS.lacteos, sec = document.getElementById('secciones'); if (!sec) return;
    const d = document.createElement('div'); d.id = 'siRev';
    d.innerHTML = `<div class="srT">👁️ MODO REVISIÓN · GRUPO SAN IGNACIO</div>
      <div class="srM">Según tu inscripción, <b>te corresponden las charlas de ${(EMPRESAS[mia] || E).n}</b></div>
      <div class="srS">Además, como revisor, puedes ver las charlas de las otras empresas. Toca una empresa:</div>
      <div class="srB">${ORDEN_EMP.map(k => { const X = EMPRESAS[k]; return `<button data-e="${k}" class="${k === v ? 'on' : ''}" style="--ec:${X.c1}">${X.logo ? `<img alt="" src="${X.logo}">` : '<span class="srI">INVERSIONES</span>'}<b>${X.corto}</b>${k === mia ? '<i class="srTu">TU EMPRESA</i>' : ''}</button>`; }).join('')}</div>
      <div class="srV" style="background:${E.c1}">${v === mia ? `Estás viendo las charlas de <b>tu empresa</b>: ${E.n}` : `Estás revisando las charlas de <b>${E.n}</b> (no es tu empresa)`}</div>`;
    sec.parentNode.insertBefore(d, sec);
    d.querySelectorAll('button').forEach(b => b.onclick = () => {
      const y = window.scrollY; VER = b.dataset.e; try { localStorage.setItem('hsl_cap_ver', VER); } catch (e) {}
      renderHome(); window.scrollTo(0, y);
    });
  };
  // Inducción de OTRA empresa (revisores): es un curso aparte. Su título lleva el nombre de la empresa (así queda en el registro)
  // y se muestra aprobada solo si el revisor aprobó ESA inducción, no la de su propia empresa.
  const otraEmp = () => { if (!esRevisor()) return ''; const v = empVista(), m = empSesion(); return v && m && v !== m ? v : ''; };
  const indDe = k => { const E = EMPRESAS[k]; if (!E) return null; const H = ((RUTA && RUTA.hist) || []).filter(h => h.id === 'induccion' && sinT(h.t).indexOf(sinT(E.corto)) >= 0);
    if (!H.length) return null; const h = H[0], n = parseFloat(String(h.n).replace(',', '.')); return { tema_id: 'induccion', n, nota: h.n, fecha: h.f, codigo: h.c }; };
  // la PROPIA del revisor: un registro de inducción que no lleve el nombre de otra empresa
  const indPropia = m => { const otras = Object.keys(EMPRESAS).filter(k => k !== m).map(k => sinT(EMPRESAS[k].corto));
    const H = ((RUTA && RUTA.hist) || []).filter(h => h.id === 'induccion' && !otras.some(o => sinT(h.t).indexOf(o) >= 0));
    if (!H.length) return null; const h = H[0], n = parseFloat(String(h.n).replace(',', '.')); return { tema_id: 'induccion', n, nota: h.n, fecha: h.f, codigo: h.c }; };
  const indVista = () => { if (!esRevisor()) return undefined; const o = otraEmp(); if (o) return indDe(o); const m = empSesion(); return m ? indPropia(m) : undefined; };
  window.__siAjInd = e => { const t = TOPICS.find(x => x.id === 'induccion'); if (!t) return; if (t.__t0 === undefined) t.__t0 = t.title;
    const o = otraEmp(); t.title = o && o === e ? t.__t0 + ' · ' + EMPRESAS[e].corto : t.__t0; };
  const R1 = renderHome;
  renderHome = function () {
    let real = null;
    try { const ap = indVista(); if (ap !== undefined && RUTA && RUTA.aprob) { real = RUTA.aprob; const vis = Object.assign({}, real); if (ap) vis.induccion = ap; else delete vis.induccion; RUTA.aprob = vis; } } catch (e) {}
    let r; try { r = R1.apply(this, arguments); } finally { if (real) RUTA.aprob = real; }
    try { if (real && otraEmp()) { const z = document.getElementById('ruta'); if (z) z.querySelectorAll('*').forEach(el => { if (el.childNodes.length === 1 && el.firstChild.nodeType === 3 && /Sin ella no puedes hacer charlas/.test(el.textContent))
      el.textContent = 'Inducción de esta empresa, pendiente. Como revisor igual puedes ver sus charlas.'; }); } } catch (e) {}
    try { window.__siAjInd(EMP_HECHA); } catch (e) {}
    try { barraRevisor(); } catch (e) {}
    return r;
  };
  if (typeof temaAprobado === 'function') { const TA = temaAprobado;
    temaAprobado = async function () { try { if (st.topic && st.topic.id === 'induccion') { const ap = indVista(); if (ap !== undefined) return ap; } } catch (e) {} return TA.apply(this, arguments); }; }
  if (typeof indInfo === 'function') { const II = indInfo;
    indInfo = function () { try { const ap = indVista(); if (ap !== undefined) { if (!ap) return { ok: false }; const vence = venceInduccion(ap.fecha), now = Date.now();
      return { ok: vence > now, vence, renovar: vence - now < 30 * 864e5, nota: ap.nota }; } } catch (e) {} return II.apply(this, arguments); }; }
  // en cada charla, el revisor ve a qué empresa corresponde
  if (typeof startLearn === 'function') { const SL = startLearn; startLearn = function () { const r = SL.apply(this, arguments); try { if (esRevisor() && EMPRESAS[EMP_HECHA]) { const t = document.getElementById('lTag'); if (t && t.textContent.indexOf(EMPRESAS[EMP_HECHA].corto.toUpperCase()) < 0) t.textContent = EMPRESAS[EMP_HECHA].corto.toUpperCase() + ' · ' + t.textContent; } } catch (e) {} return r; }; }
  if (typeof pickTopic === 'function') { const PT = pickTopic; pickTopic = function () { const r = PT.apply(this, arguments); try { if (esRevisor() && EMPRESAS[EMP_HECHA]) { const t = document.getElementById('dTag'); if (t && t.textContent.trim() && t.textContent.indexOf(' · ') < 0) t.textContent = EMPRESAS[EMP_HECHA].corto.toUpperCase() + ' · ' + t.textContent; } } catch (e) {} return r; }; }
  const cssR = document.createElement('style');
  cssR.textContent = `#siRev{background:#fff;border-radius:16px;padding:14px;margin:0 0 14px;box-shadow:0 4px 14px rgba(0,0,0,.18);color:#1F2937}
#siRev .srT{font-weight:bold;font-size:13px;letter-spacing:1px;color:#12357F}#siRev .srM{font-size:15px;margin:6px 0 2px;color:#1F2937;background:#FFF6DA;border-left:5px solid #F2B33D;border-radius:8px;padding:8px 10px}
#siRev .srTu{font-style:normal;font-size:10px;font-weight:bold;letter-spacing:.5px;background:#F2B33D;color:#0B2457;border-radius:6px;padding:2px 6px}
#siRev .srS{font-size:14px;margin:4px 0 10px;color:#4A5664}
#siRev .srB{display:grid;grid-template-columns:1fr 1fr;gap:8px}#siRev .srB button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:78px;background:#F7F8FA;border:2px solid #E2E3E8;border-radius:12px;padding:8px;cursor:pointer;font:inherit;color:#1F2937}
#siRev .srB button img{height:32px;width:auto;max-width:90%;object-fit:contain}#siRev .srB button b{font-size:13px}
#siRev .srB button.on{border-color:var(--ec);background:#fff;box-shadow:0 0 0 3px color-mix(in srgb,var(--ec) 25%,transparent)}
#siRev .srI{font-weight:bold;font-size:12px;letter-spacing:1px;color:#1F3A5F;height:32px;display:flex;align-items:center}
#siRev .srV{margin-top:10px;color:#fff;border-radius:10px;padding:9px 12px;font-size:14px;text-align:center}`;
  document.head.appendChild(cssR);

  // ---------- 9c) Actividades dentro de algunas pruebas (no en todas): ordenar pasos, clasificar y marcar lo correcto.
  //      Cada actividad cuenta como una pregunta más de la prueba (se registra en la prueba respondida en PDF).
  const TODAS = ORDEN_EMP;
  // Íconos propios (planos, mismo estilo del portal) para la actividad "vestir al trabajador"
  const OLi = '#22303A';
  const ICO = {
    cofia: `<path d="M8,30 Q6,12 24,11 Q42,12 40,30 Z" fill="#fff" stroke="${OLi}" stroke-width="2"/><path d="M7,29 H41" stroke="${OLi}" stroke-width="2"/><path d="M8,29 q4,5 8,0 q4,5 8,0 q4,5 8,0 q4,5 8,0" fill="none" stroke="#B0BEC5" stroke-width="2"/><circle cx="17" cy="20" r="1.3" fill="#B0BEC5"/><circle cx="24" cy="17" r="1.3" fill="#B0BEC5"/><circle cx="31" cy="20" r="1.3" fill="#B0BEC5"/>`,
    mascarilla: `<path d="M10,18 h28 v12 q-14,9 -28,0 z" fill="#fff" stroke="${OLi}" stroke-width="2"/><path d="M12,22 h24 M12,26 h24" stroke="#90A4AE" stroke-width="1.6"/><path d="M10,19 q-7,2 -5,9 q2,3 5,2 M38,19 q7,2 5,9 q-2,3 -5,2" fill="none" stroke="${OLi}" stroke-width="1.8"/>`,
    mascarilla_tela: `<path d="M10,18 h28 v12 q-14,9 -28,0 z" fill="#E57373" stroke="${OLi}" stroke-width="2"/><circle cx="16" cy="23" r="1.6" fill="#fff"/><circle cx="24" cy="25" r="1.6" fill="#fff"/><circle cx="32" cy="23" r="1.6" fill="#fff"/><circle cx="20" cy="29" r="1.4" fill="#fff"/><circle cx="28" cy="29" r="1.4" fill="#fff"/><path d="M10,19 q-7,2 -5,9 q2,3 5,2 M38,19 q7,2 5,9 q-2,3 -5,2" fill="none" stroke="${OLi}" stroke-width="1.8"/>`,
    respirador: `<path d="M14,16 q10,-6 20,0 l2,12 q-12,10 -24,0 z" fill="#ECEFF1" stroke="${OLi}" stroke-width="2"/><circle cx="12" cy="28" r="6" fill="#E53935" stroke="${OLi}" stroke-width="2"/><circle cx="36" cy="28" r="6" fill="#E53935" stroke="${OLi}" stroke-width="2"/><circle cx="12" cy="28" r="2.2" fill="#B71C1C"/><circle cx="36" cy="28" r="2.2" fill="#B71C1C"/><rect x="21" y="27" width="6" height="6" rx="1.5" fill="#90A4AE" stroke="${OLi}" stroke-width="1.4"/>`,
    cotona: c => `<path d="M16,8 l-8,6 l-4,26 h8 l1,-14 v20 h22 v-20 l1,14 h8 l-4,-26 l-8,-6 l-8,6 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M24,14 v26" stroke="${OLi}" stroke-width="1.4" opacity=".5"/><circle cx="24" cy="20" r="1.2" fill="${OLi}"/><circle cx="24" cy="27" r="1.2" fill="${OLi}"/><circle cx="24" cy="34" r="1.2" fill="${OLi}"/><rect x="28" y="22" width="5" height="4" rx="1" fill="none" stroke="${OLi}" stroke-width="1.2"/>`,
    pechera: `<path d="M16,8 l-8,6 l-4,26 h8 l1,-14 v20 h22 v-20 l1,14 h8 l-4,-26 l-8,-6 l-8,6 z" fill="#ECEFF1" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M17,12 h14 v6 q4,1 4,6 v20 h-22 v-20 q0,-5 4,-6 z" fill="#fff" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M17,12 q7,-6 14,0" fill="none" stroke="${OLi}" stroke-width="1.6"/>`,
    overol: `<path d="M15,6 l-7,6 l-3,16 h6 l2,-9 v25 h9 l2,-14 l2,14 h9 v-25 l2,9 h6 l-3,-16 l-7,-6 l-9,5 z" fill="#1F3A6B" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M24,11 v18" stroke="#90CAF9" stroke-width="1.6"/><rect x="16" y="20" width="5" height="4" fill="none" stroke="#90CAF9" stroke-width="1.2"/><path d="M13,44 h9 M26,44 h9" stroke="${OLi}" stroke-width="2"/>`,
    traje: `<path d="M24,4 q-8,0 -9,8 l-7,4 l-3,14 h6 l2,-8 v22 h9 l2,-12 l2,12 h9 v-22 l2,8 h6 l-3,-14 l-7,-4 q-1,-8 -9,-8 z" fill="#FBC02D" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><ellipse cx="24" cy="12" rx="5" ry="4.5" fill="#F5D0B0" stroke="${OLi}" stroke-width="1.4"/><path d="M24,17 v14" stroke="${OLi}" stroke-width="1.4" opacity=".5"/>`,
    guantes: c => `<path d="M14,40 v-12 l-5,-8 q-1,-3 2,-4 q2,0 3,2 l3,4 v-14 q0,-3 3,-3 q3,0 3,3 v-2 q0,-3 3,-3 q3,0 3,3 v2 q0,-3 3,-3 q3,0 3,3 v4 q0,-3 3,-3 q3,0 3,3 v16 q0,5 -4,8 v3 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M14,36 h20" stroke="${OLi}" stroke-width="1.6" opacity=".6"/>`,
    botas: c => `<path d="M14,6 h13 v24 l11,6 q3,2 3,5 v3 h-27 z" fill="${c}" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M14,40 h27" stroke="${OLi}" stroke-width="3"/><path d="M14,10 h13" stroke="${OLi}" stroke-width="1.4" opacity=".5"/>`,
    zapatos: `<path d="M7,22 h16 l4,6 l12,3 q4,1 4,5 v4 h-36 z" fill="#37474F" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M30,31 q8,1 9,5 v4 h-9 z" fill="#FBC02D" stroke="${OLi}" stroke-width="1.6"/><path d="M7,40 h36" stroke="#111" stroke-width="3"/><path d="M13,26 l6,0 M14,30 l7,0" stroke="#90A4AE" stroke-width="1.4"/>`,
    legionario: `<path d="M10,26 Q9,8 24,8 Q39,8 38,26 Z" fill="#F1E3C2" stroke="${OLi}" stroke-width="2"/><path d="M37,24 q8,1 9,6 l-10,0 z" fill="#F1E3C2" stroke="${OLi}" stroke-width="1.8"/><path d="M11,24 q-3,9 0,16 l7,-2 q-2,-7 1,-14 z" fill="#E9D8A6" stroke="${OLi}" stroke-width="1.8"/><path d="M10,25 h28" stroke="#C9A96E" stroke-width="3"/>`,
    lentes: `<rect x="5" y="18" width="16" height="11" rx="4" fill="#263238" stroke="${OLi}" stroke-width="2"/><rect x="27" y="18" width="16" height="11" rx="4" fill="#263238" stroke="${OLi}" stroke-width="2"/><path d="M21,22 h6 M5,21 l-3,-3 M43,21 l3,-3" stroke="${OLi}" stroke-width="2"/><path d="M8,21 l5,0 M30,21 l5,0" stroke="#90CAF9" stroke-width="1.6"/>`,
    antiparras: `<path d="M5,20 q19,-8 38,0 v10 q-9,6 -16,0 h-6 q-7,6 -16,0 z" fill="#B3E5FC" fill-opacity=".85" stroke="${OLi}" stroke-width="2"/><path d="M5,22 l-3,1 M43,22 l3,1" stroke="#455A64" stroke-width="3"/><path d="M10,22 l6,-2" stroke="#fff" stroke-width="1.8"/>`,
    bloqueador: `<rect x="15" y="12" width="18" height="30" rx="4" fill="#FB8C00" stroke="${OLi}" stroke-width="2"/><rect x="19" y="5" width="10" height="8" rx="2" fill="#fff" stroke="${OLi}" stroke-width="2"/><text x="24" y="28" font-size="8" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Arial">FPS</text><text x="24" y="37" font-size="8" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Arial">50+</text>`,
    anillo: `<circle cx="24" cy="29" r="11" fill="none" stroke="#FBC02D" stroke-width="5"/><circle cx="24" cy="29" r="11" fill="none" stroke="${OLi}" stroke-width="1" opacity=".4"/><path d="M18,14 l6,-7 l6,7 l-6,6 z" fill="#81D4FA" stroke="${OLi}" stroke-width="1.6"/>`,
    reloj: `<rect x="18" y="4" width="12" height="9" rx="2" fill="#5D4037"/><rect x="18" y="35" width="12" height="9" rx="2" fill="#5D4037"/><circle cx="24" cy="24" r="12" fill="#fff" stroke="${OLi}" stroke-width="2.4"/><path d="M24,24 v-7 M24,24 l5,3" stroke="${OLi}" stroke-width="2" stroke-linecap="round"/>`,
    pulsera: `<ellipse cx="24" cy="26" rx="15" ry="9" fill="none" stroke="#AB47BC" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i / 8 * 6.283; return `<circle cx="${(24 + 15 * Math.cos(a)).toFixed(1)}" cy="${(26 + 9 * Math.sin(a)).toFixed(1)}" r="3" fill="#CE93D8" stroke="${OLi}" stroke-width="1"/>`; }).join('')}`,
    sandalias: `<path d="M10,8 q8,-3 12,4 l3,28 q-1,5 -8,5 q-8,0 -9,-6 z" fill="#4FC3F7" stroke="${OLi}" stroke-width="2"/><path d="M11,18 q6,6 12,0" fill="none" stroke="#0277BD" stroke-width="3"/><path d="M27,12 q8,-3 12,4 l2,24 q-1,5 -7,5 q-7,0 -8,-6 z" fill="#4FC3F7" stroke="${OLi}" stroke-width="2"/><path d="M28,21 q6,6 11,0" fill="none" stroke="#0277BD" stroke-width="3"/>`,
    zapatillas: `<path d="M5,24 q2,-4 8,-4 l6,2 q6,4 12,5 l9,3 q4,2 4,6 v4 h-39 z" fill="#E3F2FD" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M5,40 h39" stroke="#1565C0" stroke-width="3"/><path d="M14,26 l6,2 M16,30 l6,2" stroke="#1565C0" stroke-width="2"/><path d="M27,29 q6,2 14,6" stroke="#1565C0" stroke-width="2" fill="none"/>`,
    gorro_lana: `<path d="M9,32 Q8,12 24,11 Q40,12 39,32 Z" fill="#E91E63" stroke="${OLi}" stroke-width="2"/><rect x="7" y="30" width="34" height="8" rx="3" fill="#F48FB1" stroke="${OLi}" stroke-width="2"/><circle cx="24" cy="9" r="5" fill="#F8BBD0" stroke="${OLi}" stroke-width="1.6"/><path d="M14,20 v10 M20,16 v14 M28,16 v14 M34,20 v10" stroke="#C2185B" stroke-width="1.6"/>`,
    polera: `<path d="M15,6 q9,6 18,0 l3,3 q-2,6 3,9 v24 h-30 v-24 q5,-3 3,-9 z" fill="#FFB300" stroke="${OLi}" stroke-width="2" stroke-linejoin="round"/><path d="M18,10 q6,4 12,0" fill="none" stroke="${OLi}" stroke-width="1.4"/><path d="M12,30 h24" stroke="#fff" stroke-width="3"/>`
  };
  const icoSvg = k => { let v = ICO[k]; if (!v) { const m = String(k).match(/^(\w+)#(\w{6})$/); if (m && typeof ICO[m[1]] === 'function') v = ICO[m[1]]('#' + m[2]); }
    if (typeof v === 'function') v = v('#90A4AE'); return v ? `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">${v}</svg>` : ''; };
  window.SI_ICO = icoSvg;
  try { Object.assign(ICO, window.HT_ICO || {}); } catch (e) {}
  const SI_ACT = [
  ].concat((window.HT_ACT || []).map(a => Object.assign({ emp: TODAS }, a)));
  window.SI_ACT = SI_ACT;
  const actsDe = (tema, e) => SI_ACT.filter(a => a.tema === tema && a.emp.indexOf(e) >= 0).map(a => {
    const r = s => window.siTxt(s, e);
    const act = { tipo: a.tipo, cats: a.cats || ['✅ Así sí', '❌ Así no'], sub: a.sub || null, binario: !a.cats,
      items: a.tipo === 'orden' ? a.items.map(r) : a.items.map(x => [r(x[0]), x[1], x[2] ? r(x[2]) : '', x[3] || null, x[4] ? r(x[4]) : '']) };
    return { act, q: r(a.q), w: r(a.w), o: [''], a: 0, s: '' };
  });
  window.__siActsDe = actsDe;
  const mezclarA = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const escA = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const escena = ref => { const m = String(ref || '').match(/^([\w]+)(?::([LR]))?$/); if (!m || typeof S === 'undefined' || !S[m[1]]) return '';
    let v = ''; try { v = S[m[1]](); } catch (e) { return ''; }
    v = v.replace(/<circle[^>]*stroke="#fff" stroke-width="3"\/><path[^>]*\/>/g, '');
    if (m[2]) v = v.replace(/viewBox="0 0 320 200"/, m[2] === 'L' ? 'viewBox="0 0 160 200"' : 'viewBox="160 0 160 200"');
    return v; };
  function pintarAct(q) {
    const A = q.act, B = document.getElementById('qBody'); if (!B) return;
    let corr = '';
    if (A.tipo === 'orden') corr = A.items.map((t, i) => (i + 1) + ') ' + t).join(' · ');
    else if (A.tipo === 'clasifica' || A.tipo === 'tarjetas') corr = A.items.map(([t, c]) => t + ': ' + A.cats[c].replace(/^\S+\s/, '')).join(' · ');
    else corr = A.items.filter(x => x[1]).map(x => x[0]).join(' · ');
    const tit = { orden: 'Toca los pasos en el orden correcto (1, 2, 3...).', clasifica: 'Elige una opción para cada situación.', marca: 'Toca todas las que correspondan y después toca "Listo".',
      tarjetas: 'Desliza la tarjeta hacia el lado que corresponde, o toca el botón.', vestir: 'Toca o arrastra al trabajador lo que debe usar. ¡Ojo, hay cosas que no van!' }[A.tipo];
    let h = `<div class="siAct"><div class="acH">${tit}</div>`;
    if (A.tipo === 'orden') {
      let ord = mezclarA(A.items.map((t, i) => i)); if (ord.every((v, k) => v === k)) ord = ord.reverse();
      h += `<div class="acL">${ord.map(i => `<button class="acI" data-i="${i}"><span class="acN"></span><span>${escA(A.items[i])}</span></button>`).join('')}</div><button class="acR">↺ Borrar y empezar de nuevo</button>`;
    } else if (A.tipo === 'tarjetas') {
      const cl = A.binario ? ['tjSi', 'tjNo'] : ['tjA', 'tjB'];
      h += `<div class="tjW"><div class="tjP" id="tjP"></div><div class="tjStage" id="tjStage"></div>
        <div class="tjBt"><button class="tjK ${cl[1]}" data-k="1">${escA(A.cats[1])}${A.sub ? `<small>${escA(A.sub[1])}</small>` : ''}</button><button class="tjK ${cl[0]}" data-k="0">${escA(A.cats[0])}${A.sub ? `<small>${escA(A.sub[0])}</small>` : ''}</button></div></div>`;
    } else if (A.tipo === 'vestir') {
      h += `<div class="vsW"><div class="vsFig" id="vsFig"></div><div class="vsMsg" id="vsMsg">👆 Toca o arrastra cada cosa al trabajador</div>
        <div class="vsIt">${mezclarA(A.items.map((x, i) => i)).map(i => `<button class="vsC" data-i="${i}"><span class="vsE">${icoSvg(A.items[i][2])}</span><span>${escA(A.items[i][0])}</span></button>`).join('')}</div>
        <button class="acOk" id="vsOk">Listo, ya está preparado</button></div>`;
    } else if (A.tipo === 'clasifica') {
      h += `<div class="acL">${mezclarA(A.items.map((x, i) => i)).map(i => `<div class="acC" data-i="${i}"><div class="acCt">${escA(A.items[i][0])}</div><div class="acCb">${A.cats.map((c, k) => `<button class="acK" data-k="${k}">${escA(c)}</button>`).join('')}</div></div>`).join('')}</div>`;
    } else {
      h += `<div class="acL">${mezclarA(A.items.map((x, i) => i)).map(i => `<button class="acM" data-i="${i}"><span class="acX"></span><span>${escA(A.items[i][0])}</span></button>`).join('')}</div><button class="acOk" disabled>Listo</button>`;
    }
    h += `<div style="display:none"><button class="opt" data-ok="1" id="acBien">${escA(corr)}</button><button class="opt" data-ok="0" id="acTuya"></button></div></div>`;
    B.innerHTML = h;
    const enviar = (ok, tuya) => { const b = ok ? document.getElementById('acBien') : document.getElementById('acTuya'); if (!ok) b.textContent = tuya; answer(b, ok); };
    const retirar = () => { if (st.revisada) return; st.sel = null; const n = document.getElementById('qNext'); if (n) n.style.display = 'none'; };
    const bloqueado = () => !!st.revisada;
    if (A.tipo === 'orden') {
      let sel = [];
      const pintar = () => B.querySelectorAll('.acI').forEach(b => { const k = sel.indexOf(+b.dataset.i); b.classList.toggle('on', k >= 0); b.querySelector('.acN').textContent = k >= 0 ? k + 1 : ''; });
      B.querySelectorAll('.acI').forEach(b => b.onclick = () => { if (bloqueado()) return; const i = +b.dataset.i; if (sel.indexOf(i) >= 0) return; sel.push(i); pintar(); try { SFX.play('next'); } catch (e) {}
        if (sel.length === A.items.length) enviar(sel.every((v, k) => v === k), sel.map((i, k) => (k + 1) + ') ' + A.items[i]).join(' · ')); });
      B.querySelector('.acR').onclick = () => { if (bloqueado()) return; sel = []; pintar(); retirar(); };
    } else if (A.tipo === 'tarjetas') {
      const ord = mezclarA(A.items.map((x, i) => i)), resp = []; let pos = 0, ocupado = false;
      const stage = B.querySelector('#tjStage'), prog = B.querySelector('#tjP');
      const pintarP = () => { prog.innerHTML = ord.map((x, k) => `<span class="${k < pos ? (resp[k].ok ? 'ok' : 'mal') : k === pos ? 'act' : ''}"></span>`).join('') + `<b>${Math.min(pos + 1, ord.length)} de ${ord.length}</b>`; };
      const carta = () => {
        pintarP();
        if (pos >= ord.length) {
          const bien = resp.filter(x => x.ok).length;
          stage.innerHTML = `<div class="tjFin"><div class="tjE">${bien === ord.length ? '🏆' : '💪'}</div><div class="tjT">${bien === ord.length ? '¡Perfecto!' : '¡Terminaste!'}</div><div class="tjS">Acertaste ${bien} de ${ord.length}</div></div>`;
          B.querySelectorAll('.tjK').forEach(b => b.disabled = true);
          try { SFX.play(bien === ord.length ? 'win' : 'next'); } catch (e) {}
          enviar(bien === ord.length, resp.map(x => A.items[x.i][0] + ': ' + A.cats[x.k].replace(/^\S+\s/, '')).join(' · ')); return;
        }
        const it = A.items[ord[pos]];
        stage.innerHTML = `<div class="tjCard" id="tjCard"><div class="tjL tjLi">${escA(A.cats[1])}</div><div class="tjL tjLd">${escA(A.cats[0])}</div><div class="tjI">${escena(it[2])}</div><div class="tjT">${escA(it[0])}</div><div class="tjH">⬅ desliza ➡</div></div><div class="tjFb" id="tjFb"></div>`;
        const c = stage.querySelector('#tjCard'); let x0 = null, dx = 0;
        c.onpointerdown = ev => { if (bloqueado() || ocupado) return; x0 = ev.clientX; dx = 0; c.setPointerCapture(ev.pointerId); c.style.transition = 'none'; };
        c.onpointermove = ev => { if (x0 === null) return; dx = ev.clientX - x0; c.style.transform = `translateX(${dx}px) rotate(${dx / 14}deg)`;
          c.querySelector('.tjLd').style.opacity = Math.max(0, Math.min(1, dx / 90)); c.querySelector('.tjLi').style.opacity = Math.max(0, Math.min(1, -dx / 90)); };
        c.onpointerup = c.onpointercancel = () => { if (x0 === null) return; x0 = null; c.style.transition = '';
          if (dx > 80) decidir(0); else if (dx < -80) decidir(1); else { c.style.transform = ''; c.querySelectorAll('.tjL').forEach(l => l.style.opacity = 0); } };
      };
      const decidir = k => {
        if (bloqueado() || ocupado || pos >= ord.length) return; ocupado = true;
        const it = A.items[ord[pos]], ok = it[1] === k; resp.push({ i: ord[pos], k, ok });
        const c = stage.querySelector('#tjCard'), fb = stage.querySelector('#tjFb');
        if (c) { c.style.transition = 'transform .32s ease, opacity .32s ease'; c.style.transform = `translateX(${k === 0 ? 420 : -420}px) rotate(${k === 0 ? 24 : -24}deg)`; c.style.opacity = '0'; }
        fb.className = 'tjFb on ' + (ok ? 'ok' : 'mal'); fb.innerHTML = ok ? '✔ ¡Bien!' : `✘ Era: ${escA(A.cats[it[1]])}`;
        try { SFX.play(ok ? 'ok' : 'bad'); } catch (e) {}
        setTimeout(() => { pos++; ocupado = false; carta(); }, ok ? 750 : 1500);
      };
      B.querySelectorAll('.tjK').forEach(b => b.onclick = () => decidir(+b.dataset.k));
      carta();
    } else if (A.tipo === 'vestir') {
      const fig = B.querySelector('#vsFig'), msg = B.querySelector('#vsMsg'), puestos = [], malos = [];
      let ropa = { helmet: false, cofia: false, mask: false, shirt: '#90A4AE', pants: '#546E7A', boots: false, apron: false, gloves: false, glasses: false, hat: '', s: 2.2 };
      const nOk = A.items.filter(x => x[1]).length;
      const dibujar = pop => { let g = ''; try { g = W(100, 206, Object.assign({}, ropa, { face: puestos.length === nOk ? 'ok' : 'ok' })); } catch (e) {}
        fig.innerHTML = `<svg viewBox="0 0 200 215" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="208" rx="70" ry="6" fill="#000" opacity=".12"/><g class="${pop ? 'vsPop' : ''}">${g}</g></svg><div class="vsCnt">${puestos.length} de ${nOk}</div>`; };
      const fin = () => { const ok = !malos.length && puestos.length === nOk;
        B.querySelectorAll('.vsC').forEach(b => b.disabled = true); B.querySelector('#vsOk').disabled = true;
        enviar(ok, 'Puso: ' + (puestos.map(i => A.items[i][0]).join(', ') || 'nada') + (malos.length ? ' · También eligió: ' + malos.map(i => A.items[i][0]).join(', ') : '')); };
      const poner = b => {
        if (bloqueado() || b.disabled) return; const i = +b.dataset.i, it = A.items[i];
        if (it[1]) { Object.assign(ropa, it[3] || {}); puestos.push(i); b.classList.add('ok'); b.disabled = true; dibujar(true);
          msg.className = 'vsMsg ok'; msg.textContent = '✔ ¡Bien! ' + it[0] + (puestos.length < nOk ? '. ¿Qué más le falta?' : ''); try { SFX.play('ok'); } catch (e) {}
          if (puestos.length === nOk) { msg.textContent = malos.length ? '✔ Quedó protegido, pero ojo con lo que no va.' : '🎉 ¡Listo! Quedó bien protegido.'; setTimeout(fin, 500); } }
        else { malos.push(i); b.classList.add('mal'); b.disabled = true; msg.className = 'vsMsg mal'; msg.textContent = '✘ Eso no va. ' + (it[4] || ''); try { SFX.play('bad'); } catch (e) {} }
      };
      B.querySelectorAll('.vsC').forEach(b => {
        let x0 = null, y0 = 0, ghost = null;
        b.onpointerdown = ev => { if (bloqueado() || b.disabled) return; x0 = ev.clientX; y0 = ev.clientY; b.setPointerCapture(ev.pointerId); };
        b.onpointermove = ev => { if (x0 === null) return; if (!ghost && Math.hypot(ev.clientX - x0, ev.clientY - y0) > 10) { ghost = document.createElement('div'); ghost.className = 'vsG'; ghost.innerHTML = b.querySelector('.vsE').innerHTML; document.body.appendChild(ghost); }
          if (ghost) { ghost.style.left = ev.clientX + 'px'; ghost.style.top = ev.clientY + 'px'; const r = fig.getBoundingClientRect(); fig.classList.toggle('sobre', ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom); } };
        b.onpointerup = ev => { if (x0 === null) return; x0 = null; fig.classList.remove('sobre');
          if (ghost) { ghost.remove(); ghost = null; const r = fig.getBoundingClientRect(); if (ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom) poner(b); } else poner(b); };
        b.onpointercancel = () => { x0 = null; if (ghost) { ghost.remove(); ghost = null; } fig.classList.remove('sobre'); };
        b.onclick = ev => ev.preventDefault();
      });
      B.querySelector('#vsOk').onclick = () => { if (bloqueado()) return; fin(); };
      dibujar(false);
    } else if (A.tipo === 'clasifica') {
      const resp = {};
      B.querySelectorAll('.acC').forEach(c => c.querySelectorAll('.acK').forEach(k => k.onclick = () => { if (bloqueado()) return;
        resp[c.dataset.i] = +k.dataset.k; c.querySelectorAll('.acK').forEach(x => x.classList.toggle('on', x === k)); try { SFX.play('next'); } catch (e) {}
        if (Object.keys(resp).length === A.items.length) enviar(A.items.every((x, i) => resp[i] === x[1]), A.items.map((x, i) => x[0] + ': ' + A.cats[resp[i]]).join(' · ')); }));
    } else {
      const ok = B.querySelector('.acOk');
      B.querySelectorAll('.acM').forEach(b => b.onclick = () => { if (bloqueado()) return; b.classList.toggle('on'); b.querySelector('.acX').textContent = b.classList.contains('on') ? '✓' : ''; ok.disabled = !B.querySelector('.acM.on'); retirar(); try { SFX.play('next'); } catch (e) {} });
      ok.onclick = () => { if (bloqueado()) return; const m = [...B.querySelectorAll('.acM.on')].map(b => +b.dataset.i);
        enviar(A.items.every((x, i) => !!x[1] === (m.indexOf(i) >= 0)), m.length ? m.map(i => A.items[i][0]).join(' · ') : '(nada marcado)'); };
    }
  }
  if (typeof renderQ === 'function' && !renderQ.__siAct) {
    const RQ = renderQ;
    renderQ = function () { const r = RQ.apply(this, arguments); try { const q = st.topic.quiz[st.qi]; if (q && q.act) pintarAct(q); } catch (e) {} return r; };
    renderQ.__siAct = true;
  }
  const cssA = document.createElement('style');
  cssA.textContent = `.siAct .acH{background:#FFF6DA;color:#3B2F00;border-left:5px solid #F2B33D;border-radius:10px;padding:9px 12px;font-size:15px;margin:4px 0 12px}
.siAct .acL{display:flex;flex-direction:column;gap:9px}
.siAct .acI,.siAct .acM{display:flex;align-items:center;gap:12px;text-align:left;background:var(--dark2);color:#fff;border:2px solid var(--line);border-radius:14px;padding:13px;font:inherit;font-size:16px;line-height:1.3;cursor:pointer}
.siAct .acN,.siAct .acX{flex:0 0 34px;height:34px;border-radius:50%;border:2px dashed #ffffff66;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:17px}
.siAct .acI.on,.siAct .acM.on{border-color:#F2B33D;background:#22406E}.siAct .acI.on .acN,.siAct .acM.on .acX{background:#F2B33D;color:#0B2457;border:2px solid #F2B33D}
.siAct .acR{margin-top:10px;background:none;border:none;color:#BBD0F2;text-decoration:underline;font:inherit;font-size:15px;cursor:pointer;align-self:center;width:100%}
.siAct .acC{background:var(--dark2);border:2px solid var(--line);border-radius:14px;padding:11px}.siAct .acCt{color:#fff;font-size:16px;margin-bottom:8px;line-height:1.3}
.siAct .acCb{display:grid;grid-template-columns:1fr 1fr;gap:8px}.siAct .acK{background:#ffffff14;color:#fff;border:2px solid #ffffff40;border-radius:10px;padding:10px 6px;font:inherit;font-size:14px;font-weight:bold;cursor:pointer}
.siAct .acK.on{background:#F2B33D;border-color:#F2B33D;color:#0B2457}
.siAct .acOk{margin-top:12px;width:100%;background:#F2B33D;color:#0B2457;border:none;border-radius:14px;padding:14px;font:inherit;font-size:17px;font-weight:bold;cursor:pointer}.siAct .acOk:disabled{opacity:.45;cursor:default}
.siAct button:disabled{cursor:default}`;
  document.head.appendChild(cssA);
  const cssT = document.createElement('style');
  cssT.textContent = `.tjW{display:flex;flex-direction:column;gap:12px}.tjP{display:flex;align-items:center;gap:6px;justify-content:center}.tjP span{width:12px;height:12px;border-radius:50%;background:#ffffff33}
.tjP span.act{background:#F2B33D;transform:scale(1.25)}.tjP span.ok{background:#43A047}.tjP span.mal{background:#E53935}.tjP b{color:#BBD0F2;font-size:13px;margin-left:6px}
.tjStage{position:relative;height:330px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.tjCard{position:relative;width:92%;max-width:340px;height:300px;overflow:hidden;background:#fff;color:#1F2937;border-radius:22px;box-shadow:0 10px 26px rgba(0,0,0,.35);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:0 0 26px;text-align:center;touch-action:none;user-select:none;cursor:grab;transition:transform .25s}
.tjCard .tjI{width:100%;height:190px;background:#EEF2F6;display:flex;align-items:center;justify-content:center;overflow:hidden;pointer-events:none}.tjCard .tjI svg{height:100%;width:auto;max-width:100%}.tjCard .tjT{font-size:17px;font-weight:bold;margin:12px 14px 0;line-height:1.25}.tjCard .tjH{position:absolute;bottom:10px;font-size:12px;color:#9AA5B4;letter-spacing:1px}
.tjL{position:absolute;top:14px;padding:4px 10px;border-radius:8px;font-weight:bold;font-size:15px;opacity:0;border:3px solid;background:#fff;z-index:2}.tjLd{left:14px;color:#2E7D32;border-color:#2E7D32;transform:rotate(-12deg)}.tjLi{right:14px;color:#C62828;border-color:#C62828;transform:rotate(12deg)}
.tjFb{position:absolute;bottom:2px;z-index:3;left:50%;transform:translateX(-50%) scale(.8);opacity:0;padding:8px 16px;border-radius:20px;font-weight:bold;font-size:16px;transition:all .2s;white-space:nowrap}.tjFb.on{opacity:1;transform:translateX(-50%) scale(1)}
.tjFb.ok{background:#43A047;color:#fff}.tjFb.mal{background:#E53935;color:#fff}
.tjFin{background:#fff;color:#1F2937;border-radius:22px;padding:26px 20px;text-align:center;width:88%;max-width:330px;box-shadow:0 10px 26px rgba(0,0,0,.35)}.tjFin .tjE{font-size:60px}.tjFin .tjT{font-size:22px;font-weight:800;color:#12357F;margin-top:6px}.tjFin .tjS{font-size:16px;margin-top:4px}
.tjBt{display:grid;grid-template-columns:1fr 1fr;gap:10px}.tjK{border:none;border-radius:16px;padding:14px 8px;font:inherit;font-size:17px;font-weight:bold;color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;box-shadow:0 4px 0 rgba(0,0,0,.25)}
.tjK small{font-size:12px;font-weight:normal;opacity:.9}.tjK:active{transform:translateY(2px);box-shadow:0 2px 0 rgba(0,0,0,.25)}.tjK:disabled{opacity:.45}
.tjSi{background:#2E7D32}.tjNo{background:#C62828}.tjA{background:#EF6C00}.tjB{background:#1565C0}
.vsW{display:flex;flex-direction:column;gap:10px}.vsFig{position:relative;background:radial-gradient(circle at 50% 40%,#ffffff 0,#E8EEF7 70%);border:3px dashed #ffffff55;border-radius:20px;height:240px;display:flex;justify-content:center;transition:border-color .2s,background .2s}
.vsFig.sobre{border-color:#F2B33D;background:radial-gradient(circle at 50% 40%,#FFF8E1 0,#FFE9A8 70%)}.vsFig svg{height:100%;width:auto}.vsCnt{position:absolute;top:8px;right:10px;background:#12357F;color:#fff;font-weight:bold;font-size:13px;border-radius:12px;padding:3px 10px}
.vsPop{animation:vsPop .45s ease}@keyframes vsPop{0%{transform:scale(1)}40%{transform:scale(1.05)}100%{transform:scale(1)}}.vsPop{transform-origin:100px 200px}
.vsMsg{min-height:44px;background:#ffffff14;color:#fff;border-radius:12px;padding:10px 12px;font-size:15px;text-align:center;line-height:1.3}.vsMsg.ok{background:#E8F5E9;color:#1B5E20;font-weight:bold}.vsMsg.mal{background:#FFEBEE;color:#B71C1C;font-weight:bold}
.vsIt{display:grid;grid-template-columns:1fr 1fr;gap:8px}.vsC{display:flex;align-items:center;gap:8px;background:var(--dark2);color:#fff;border:2px solid var(--line);border-radius:14px;padding:10px;font:inherit;font-size:14px;text-align:left;line-height:1.2;cursor:grab;touch-action:none;user-select:none}
.vsC .vsE{flex:none;width:44px;height:44px;background:#fff;border-radius:12px;padding:4px;box-sizing:border-box;display:flex}.vsC .vsE svg{width:100%;height:100%}.vsC.ok{background:#E8F5E9;color:#1B5E20;border-color:#43A047}.vsC.mal{background:#FFEBEE;color:#B71C1C;border-color:#E53935;text-decoration:line-through}
.vsG{position:fixed;z-index:9999;width:64px;height:64px;background:#fff;border-radius:16px;padding:6px;box-sizing:border-box;pointer-events:none;transform:translate(-50%,-60%);filter:drop-shadow(0 4px 6px rgba(0,0,0,.4))}`;
  document.head.appendChild(cssT);

  // ---------- 9d) Aviso antes de la evaluación: no se entra "en seco" a la prueba
  if (typeof startQuiz === 'function' && !startQuiz.__siAviso) {
    const SQ = startQuiz;
    const cssE = document.createElement('style');
    cssE.textContent = `#siEval{display:none;position:fixed;inset:0;background:rgba(6,18,45,.78);z-index:9998;align-items:center;justify-content:center;padding:18px}
#siEval.on{display:flex}#siEval .seBox{background:#fff;color:#1F2937;border-radius:20px;max-width:390px;width:100%;padding:22px 20px;text-align:center;border-top:8px solid #F2B33D;box-shadow:0 10px 30px rgba(0,0,0,.35)}
#siEval .seIc{font-size:44px;line-height:1}#siEval h3{margin:8px 0 4px;font-size:22px;color:#12357F}#siEval .seT{font-size:14px;color:#4A5664;margin-bottom:12px}
#siEval ul{list-style:none;padding:0;margin:0 0 14px;text-align:left;display:flex;flex-direction:column;gap:8px}
#siEval li{display:flex;gap:10px;align-items:flex-start;background:#F4F7FC;border-radius:12px;padding:9px 11px;font-size:15px;line-height:1.35}#siEval li b{color:#12357F}
#siEval .seGo{width:100%;background:#12357F;color:#fff;border:none;border-radius:14px;padding:15px;font:inherit;font-size:17px;font-weight:bold;cursor:pointer}
#siEval .seRep{width:100%;background:none;border:none;color:#12357F;text-decoration:underline;font:inherit;font-size:15px;margin-top:10px;cursor:pointer}`;
    document.head.appendChild(cssE);
    startQuiz = function () {
      const args = arguments, self = this;
      const conNota = st.mode !== 'ds44' && !st.repaso;
      if (!conNota) return SQ.apply(self, args);
      const T = st.topic.__base || st.topic, n = (T.quiz || []).length, conAct = (T.quiz || []).filter(q => q.act).length;
      let m = document.getElementById('siEval'); if (!m) { m = document.createElement('div'); m.id = 'siEval'; document.body.appendChild(m); }
      m.innerHTML = `<div class="seBox"><div class="seIc">📝</div><h3>Ahora viene la evaluación</h3><div class="seT">${T.title}</div>
        <ul><li>❓<span>Vas a responder <b>${n} preguntas</b> sobre lo que acabas de ver.</span></li>
        <li>⭐<span>Para aprobar necesitas <b>todas correctas</b> (nota 7,0).</span></li>
        ${conAct ? `<li>🧩<span>${conAct > 1 ? conAct + ' de ellas son <b>actividades</b>' : 'Una de ellas es una <b>actividad</b>'}: lee bien las instrucciones antes de tocar.</span></li>` : ''}
        <li>⏳<span>Lee con calma. Puedes cambiar tu respuesta antes de pasar a la siguiente.</span></li>
        <li>🔁<span>Si no apruebas, repasas las láminas y vuelves a intentarlo, con preguntas distintas.</span></li></ul>
        <button class="seGo" id="seGo">Comenzar la evaluación</button><button class="seRep" id="seRep">Prefiero repasar las láminas primero</button></div>`;
      m.className = 'on';
      try { VOZ.say(`Ahora viene la evaluación. Vas a responder ${n} preguntas. Para aprobar necesitas todas correctas. Lee con calma y toca comenzar.`); } catch (e) {}
      document.getElementById('seGo').onclick = () => { m.className = ''; try { VOZ.stop && VOZ.stop(); } catch (e) {} SQ.apply(self, args); };
      document.getElementById('seRep').onclick = () => { m.className = ''; try { VOZ.stop && VOZ.stop(); } catch (e) {} try { startLearn(); } catch (e) {} };
    };
    startQuiz.__siAviso = true;
  }

  // ---------- 10) Al cargar: empresa de la sesión guardada (o grupo, si nadie ha ingresado)
  try {
    const g = JSON.parse(localStorage.getItem('hsl_cap_ruta') || 'null');
    const e = (RUTA && RUTA.persona && empDe(RUTA.persona)) || (g && g.persona && empDe(g.persona)) || '';
    construir('gala');
    if (typeof renderHome === 'function' && document.getElementById('secciones')) renderHome();
  } catch (e) { try { construir('gala'); } catch (e2) {} }
})();

// 9e) Imagen de la evaluación: sin restos de globos (la colita queda suelta al ocultar el rótulo).
// Si el dibujo queda sin sentido al quitarle los rótulos, no se muestra.
(function () {
  try {
    if (typeof renderQ !== 'function' || renderQ.__siQi) return;
    const SIN_IMG = new Set(window.HT_SIN_IMG || []);
    const oculto = el => el && el.style && el.style.display === 'none';
    const pulir = () => { try {
      const q = st.topic && st.topic.quiz && st.topic.quiz[st.qi]; const box = document.querySelector('#qBody .qimg');
      if (!box || !q || q.act) return;
      if (SIN_IMG.has(q.s)) { box.style.display = 'none'; return; }
      const svg = box.querySelector('svg'); if (!svg) return;
      // la colita del globo (queda suelta cuando se oculta el globo)
      const blanco = el => /^(#fff|#ffffff|white)$/i.test(el.getAttribute('fill') || '');
      svg.querySelectorAll('rect').forEach(r => { if (!oculto(r)) return; const n = r.nextElementSibling;
        if (!(n && n.tagName === 'path' && blanco(n) && /^M[\d.]+,[\d.]+ l/.test(n.getAttribute('d') || ''))) return;
        n.style.display = 'none'; const c = n.nextElementSibling;   // y el parche blanco que une la colita con el globo
        if (c && c.tagName === 'rect' && blanco(c) && !c.getAttribute('rx') && +c.getAttribute('width') <= 20 && +c.getAttribute('height') <= 6) c.style.display = 'none'; });
    } catch (e) {} };
    const R0 = renderQ;
    renderQ = function () { const v = R0.apply(this, arguments); pulir(); return v; };
    Object.keys(R0).forEach(k => { try { renderQ[k] = R0[k]; } catch (e) {} });
    renderQ.__siQi = true;
  } catch (e) {}
})();

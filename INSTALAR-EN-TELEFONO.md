# 📱 Instalar VolleyAtom en la Pantalla de Inicio

## ✅ Pasos para instalar la aplicación en tu teléfono

### 1️⃣ Asegurar que el servidor está corriendo

En tu PC, verifica que el servidor esté activo:
- Abre PowerShell en esta carpeta
- Ejecuta: `python -m http.server 8000`
- O haz doble clic en: `iniciar-servidor.bat`

### 2️⃣ Conectar tu teléfono a la misma red WiFi

**IMPORTANTE**: Tu teléfono y tu PC deben estar en la misma red WiFi.

Tu dirección IP local es: **10.0.0.156**

### 3️⃣ Abrir la aplicación en el teléfono

En tu teléfono móvil:

**Para Android (Chrome/Edge/Samsung Internet):**
1. Abre el navegador Chrome o Edge
2. Escribe en la barra de direcciones:
   ```
   http://10.0.0.156:8000/volleyatom-nuevo.html
   ```
3. Presiona Enter

**Para iOS/iPhone (Safari):**
1. Abre Safari
2. Escribe en la barra de direcciones:
   ```
   http://10.0.0.156:8000/volleyatom-nuevo.html
   ```
3. Presiona Enter

### 4️⃣ Instalar en la pantalla de inicio

**Para Android:**
1. Una vez cargada la página, presiona el menú ⋮ (tres puntos)
2. Selecciona **"Agregar a pantalla de inicio"** o **"Instalar aplicación"**
3. Confirma el nombre "VolleyAtom"
4. Presiona **"Agregar"** o **"Instalar"**

**Para iOS/iPhone:**
1. Una vez cargada la página, presiona el botón de compartir 📤 (abajo en el centro)
2. Desplázate y selecciona **"Añadir a pantalla de inicio"**
3. Confirma el nombre "VolleyAtom"
4. Presiona **"Añadir"**

### 5️⃣ ¡Listo! 🎉

Ahora verás el icono de VolleyAtom en tu pantalla de inicio con:
- 🎨 Icono personalizado con gradiente morado
- ⚡ Logo "VA" de VolleyAtom
- 📱 Funciona como una app nativa

## 🔄 Uso diario

### ⚠️ IMPORTANTE para usar la aplicación:

1. **Enciende el servidor en tu PC** (cada vez que quieras usar la app):
   - Haz doble clic en `iniciar-servidor.bat`
   - O ejecuta: `python -m http.server 8000`

2. **Asegúrate de estar en la misma red WiFi** que tu PC

3. **Abre la app desde tu pantalla de inicio**

## 🌐 Alternativa: Usar sin servidor local

Si quieres usar la app sin depender de tu PC:

1. **Opción 1 - Netlify (Gratis):**
   - Ve a: https://app.netlify.com/drop
   - Arrastra toda la carpeta del proyecto
   - Te dará una URL pública (ej: `https://volleyatom-xxx.netlify.app`)
   - Usa esa URL en tu teléfono

2. **Opción 2 - GitHub Pages (Gratis):**
   - Sube el proyecto a GitHub
   - Activa GitHub Pages en la configuración del repositorio
   - Accede desde cualquier lugar

## 🛠️ Solución de problemas

### ❌ "No se puede conectar"
- Verifica que el servidor esté corriendo en la PC
- Confirma que ambos dispositivos estén en la misma WiFi
- Prueba reiniciar el servidor

### ❌ "No aparece la opción de instalar"
- Asegúrate de usar Chrome, Edge o Safari
- Verifica que la página cargue completamente
- Algunos navegadores requieren HTTPS (usa las alternativas online)

### ❌ "La app no guarda los datos"
- Los datos se guardan localmente en el teléfono
- No cierres el navegador desde el administrador de tareas
- Los datos persisten incluso sin conexión

## 📊 Funciones disponibles en la app

✅ Gestión de estudiantes
✅ Registro de pagos
✅ Control de asistencias
✅ Reportes
✅ Impresión de recibos vía Bluetooth
✅ Funciona offline (después de cargar por primera vez)
✅ Datos guardados localmente

---

**Tu IP actual:** 10.0.0.156
**Puerto del servidor:** 8000
**URL completa:** http://10.0.0.156:8000/volleyatom-nuevo.html

---

💡 **Consejo**: Guarda esta URL en los marcadores de tu navegador para acceso rápido.

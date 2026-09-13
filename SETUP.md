Aquí tienes la guía **paso a paso** exacta para cuando llegues a la otra computadora y quieras ponerte a trabajar de una:

---

### **Paso 1: Iniciar sesión en VS Code**

1. Abre **Visual Studio Code**.
2. Haz clic en el ícono de **Cuentas** (el muñequito abajo a la izquierda) y selecciona **Sign in with GitHub**.
3. Autoriza la sesión en la ventana del navegador que se abrirá.

---

### **Paso 2: Descargar el proyecto (Clonar)**

1. En VS Code, presiona **`Ctrl` + `Shift` + `P**`.
2. Escribe **`Git: Clone`** y presiona *Enter*.
3. Pega el enlace de tu repositorio:
`[https://github.com/LordBibi420/IDF-Files.git](https://github.com/LordBibi420/IDF-Files.git)`
4. Selecciona la carpeta en tu computadora donde quieras guardarlo (ej. *Escritorio* o *Documentos*).
5. Te saldrá un mensaje en la esquina inferior derecha: haz clic en **Open / Abrir**.

---

### **Paso 3: Configuración única de Git (Solo se hace la primera vez en esa PC)**

Abre la terminal en VS Code desde el menú superior **Terminal > New Terminal** (o presiona **`Ctrl` + `Shift` + `P**` y busca *Terminal: Create New Terminal*) y ejecuta estos dos comandos:

```bash
git config --global user.name "LordBibi420"

```

*(Presiona Enter)*

```bash
git config --global user.email "tu-correo@ejemplo.com"

```

*(Pon el correo de tu cuenta de GitHub y presiona Enter)*

---

### **Paso 4: Bajar los últimos cambios (Por si Teodoro ya editó)**

Antes de empezar a escribir código, siempre es buena práctica asegurarte de tener la última versión:

1. Ve al panel de **Source Control** a la izquierda (`Ctrl` + `Shift` + `G`).
2. Haz clic en los tres puntos **`...`** (arriba a la derecha del panel) y selecciona **Pull** (o en el ícono de las flechas de sincronizar abajo).

---

### **Paso 5: Trabajar y subir tus avances a GitHub**

1. Abre y edita tu archivo `contenido.css` o el `index.html`.
2. Guarda los cambios con **`Ctrl` + `S**`.
3. Ve a **Source Control** (`Ctrl` + `Shift` + `G`).
4. Escribe un mensaje corto en la casilla (ej: `Ajustes de diseño`).
5. Haz clic en **Commit** y luego en **Sync Changes** (y confirmas con **OK** si te sale el aviso).

¡Listo! Con esto tu proyecto queda sincronizado al instante en GitHub.

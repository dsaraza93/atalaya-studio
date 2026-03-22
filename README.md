# 🎨 Atalaya Studio – Landing Page Profesional

Aplicación web frontend desarrollada para la presentación de servicios de diseño gráfico, branding y desarrollo web, enfocada en experiencia de usuario, rendimiento y buenas prácticas de desarrollo.

---

## 📌 Descripción del Proyecto

**Atalaya Studio** es una landing page moderna que permite:

- Mostrar servicios de forma clara y atractiva
- Consumir datos dinámicos desde una API externa
- Capturar información de usuarios mediante un formulario validado
- Simular integración con backend mediante peticiones HTTP

Este proyecto fue desarrollado aplicando principios de **diseño responsivo, modularidad y seguridad básica en frontend**.

---

## 🧱 Arquitectura del Proyecto

```
📁 atalaya-studio
├── index.html
├── css
│ 
├── js/
│   └── app.js
└── assets/
    └── images/
```

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Diseño responsive (Flexbox, Grid, variables) |
| JavaScript ES6 | Lógica de interacción |
| Fetch API | Consumo de servicios externos |
| LocalStorage | Persistencia en cliente |

---

## ⚙️ Funcionalidades Principales

### 🎯 Render dinámico de testimonios

El sistema consume datos desde una API externa:

```
https://jsonplaceholder.typicode.com/comments?_limit=3
```

- Render dinámico usando `createElement`
- Asignación de nombres personalizados a clientes
- Prevención de ataques XSS mediante `textContent`

---

### 📱 Menú responsive

- Control dinámico mediante JavaScript
- Uso de `aria-expanded` para accesibilidad
- Alternancia de visibilidad en dispositivos móviles

---

### 📝 Validación de formulario

Validaciones implementadas:

- Campos obligatorios
- Validación básica de correo electrónico
- Manejo de errores acumulados mediante alertas

---

### 💾 Persistencia y envío de datos

- Almacenamiento en LocalStorage
- Envío de datos a backend simulado mediante Fetch API

Endpoint utilizado:

```
http://localhost:3000/contact
```

---

## 🚀 Ejecución del Proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/dsaraza93/atalaya-studio.git
```

2. Abrir el archivo:

```
index.html
```

---

## 🌐 API Utilizada

- JSONPlaceholder (Mock API)

```
https://jsonplaceholder.typicode.com/comments?_limit=3
```

---

## 🔒 Seguridad Implementada

- Uso de `textContent` para evitar inyección XSS
- Validación de datos en frontend
- Manejo controlado de errores en peticiones

---

## ⚡ Optimización

- Uso de CSS organizado con variables
- Diseño responsive adaptable a móviles
- Estructura ligera para carga rápida

---

## ⚠️ Retos Identificados

Durante el desarrollo se identificaron los siguientes desafíos:

- Sobrescritura de archivos por falta de control de versiones
- Errores en rutas relativas (CSS e imágenes)
- Problemas de contraste visual en el hero
- Validaciones básicas mejorables

---

## ✅ Mejoras Implementadas

- Corrección de rutas relativas (`../assets/...`)
- Ajuste de contraste mediante overlay en el hero
- Estandarización de IDs para integración con JavaScript
- Mejora en la experiencia responsive

---

## 🔄 Control de Versiones

Se utilizó Git para:

- Inicialización del repositorio local
- Conexión a repositorio remoto en GitHub
- Manejo de conflictos mediante `git pull --rebase`

---


## 👨‍💻 Autor

**Daniel Saraza**  


---

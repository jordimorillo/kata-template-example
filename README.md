# 🎯 Kata Template - Programador-Web.com

[![Tests](https://github.com/YOUR_ORG/YOUR_REPO/workflows/Tests/badge.svg)](https://github.com/YOUR_ORG/YOUR_REPO/actions)
[![codecov](https://codecov.io/gh/YOUR_ORG/YOUR_REPO/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_ORG/YOUR_REPO)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Kata de práctica** - Aprende haciendo con ejercicios prácticos guiados

## 📋 Descripción

Este repositorio contiene una kata de programación diseñada para mejorar tus habilidades en [TEMA DE LA KATA]. 

**¿Qué aprenderás?**
- Concepto 1
- Concepto 2
- Concepto 3

**Nivel**: Principiante | Intermedio | Avanzado  
**Duración estimada**: X horas  
**Mentoría incluida**: ✅ 90 días de soporte ilimitado

## 🚀 Getting Started

### Prerequisitos

- Node.js 18.x o superior
- npm o yarn
- TypeScript básico
- [Conocimientos previos específicos]

### Instalación

1. **Clona este repositorio**:
```bash
git clone https://github.com/YOUR_ORG/YOUR_REPO.git
cd YOUR_REPO
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Verifica que todo funciona**:
```bash
npm test
```

Deberías ver que algunos tests pasan y otros fallan. ¡Tu misión es hacer que todos pasen! ✅

## 📁 Estructura del Proyecto

```
kata-template/
├── src/
│   └── index.ts          # Código principal - EDITA AQUÍ
├── tests/
│   ├── unit/             # Tests unitarios
│   │   └── index.test.ts
│   └── e2e/              # Tests end-to-end
│       └── flow.test.ts
├── .github/
│   └── workflows/
│       └── test.yml      # CI/CD automatizado
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración TypeScript
├── jest.config.js        # Configuración de tests
└── README.md             # Este archivo
```

## 🧪 Ejecutar Tests

### Todos los tests
```bash
npm test
```

### Solo tests unitarios
```bash
npm run test:unit
```

### Solo tests E2E
```bash
npm run test:e2e
```

### Tests en modo watch (se ejecutan automáticamente al guardar)
```bash
npm run test:watch
```

### Generar reporte de cobertura
```bash
npm run test:coverage
```

El reporte HTML se genera en `coverage/lcov-report/index.html`

## 📝 Instrucciones de la Kata

### Paso 1: Lee las instrucciones

[DESCRIPCIÓN DETALLADA DEL EJERCICIO]

### Paso 2: Implementa la solución

Edita el archivo `src/index.ts` y completa las funciones marcadas con `TODO`.

### Paso 3: Ejecuta los tests

```bash
npm test
```

### Paso 4: Itera hasta que todos los tests pasen

- 🔴 **Rojo**: Tests fallan - es normal al principio
- 🟢 **Verde**: Tests pasan - ¡vas por buen camino!
- ♻️ **Refactor**: Mejora tu código sin romper los tests

### Paso 5: (Opcional) Mejora tu solución

Una vez que todos los tests pasen, considera:
- ¿Se puede hacer más eficiente?
- ¿Es legible y mantenible?
- ¿Hay casos edge que no estás considerando?

## 🎓 Recursos de Aprendizaje

### Documentación oficial
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Recurso específico de la kata]

### Tutoriales recomendados
- [Tutorial 1](https://example.com)
- [Tutorial 2](https://example.com)

### Conceptos clave
- **[Concepto 1]**: Breve explicación
- **[Concepto 2]**: Breve explicación
- **[Concepto 3]**: Breve explicación

## 💬 Soporte y Mentoría

¿Atascado? ¡No te preocupes! Tienes acceso a:

### Discord - Comunidad y Mentoría 1-on-1
Únete a nuestro servidor privado donde podrás:
- Hacer preguntas en cualquier momento
- Agendar sesiones de pair programming
- Compartir tu progreso y recibir feedback
- Conectar con otros estudiantes

**[🔗 Únete a Discord](https://discord.gg/INVITE_LINK)**

### ¿Cuándo pedir ayuda?

**Pide ayuda si**:
- Llevas más de 30 minutos atascado en el mismo problema
- No entiendes un concepto fundamental
- Los mensajes de error no tienen sentido
- Quieres revisar tu solución antes de continuar

**Antes de preguntar**:
1. Lee el mensaje de error completo
2. Googlea el error (es parte del aprendizaje)
3. Revisa la documentación del concepto
4. Intenta al menos 2-3 enfoques diferentes

### Formato de pregunta ideal

```
🐛 PROBLEMA:
[Describe qué estás intentando hacer]

💻 CÓDIGO:
[Pega el fragmento de código relevante]

❌ ERROR:
[Mensaje de error completo]

🤔 LO QUE HE INTENTADO:
1. [Intento 1]
2. [Intento 2]
```

## 🏆 Completar la Kata

Una vez que todos los tests pasen:

1. **Haz commit de tu solución**:
```bash
git add .
git commit -m "Complete kata: [nombre]"
git push origin main
```

2. **Comparte tu progreso en Discord**:
- Muestra tu badge de tests pasando ✅
- Comparte los aprendizajes clave
- Pregunta por feedback de tu código

3. **Avanza a la siguiente kata**:
Accede al catálogo completo en [programador-web.com/mentorias](https://programador-web.com/mentorias)

## 🔧 Troubleshooting

### Los tests no se ejecutan
```bash
# Limpia cache de Jest
npm run test -- --clearCache

# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript
```bash
# Verifica la configuración
npx tsc --noEmit

# Actualiza TypeScript
npm install -D typescript@latest
```

### Problemas con Node.js
Asegúrate de estar usando Node.js 18.x o superior:
```bash
node --version
```

## 📜 License

MIT © Programador-Web.com

---

**¿Listo para empezar? 🚀**

1. Instala las dependencias: `npm install`
2. Ejecuta los tests: `npm test`
3. Abre `src/index.ts` y empieza a programar

**¡Mucha suerte! 💪**

---

## 👤 Autor

**Jordi Morillo Sells** — [LinkedIn](https://www.linkedin.com/in/jordi-morillo-sells/)

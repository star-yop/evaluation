# 📝 Evaluation Service - EduLite

Este microservicio se encarga de **gestionar evaluaciones de los cursos** dentro del sistema **EduLite**, incluyendo la creación, consulta y eliminación de evaluaciones. Utiliza **NestJS**, se comunica mediante **TCP (con `MessagePattern`)** y también expone una API HTTP para facilitar pruebas y desarrollo.

---

## 📦 Funcionalidades Principales

- Crear evaluaciones para un usuario y un curso
- Consultar todas las evaluaciones o una específica
- Eliminar evaluaciones por ID
- Calcular automáticamente si el estudiante aprueba (`score >= 70`)
- Comunicación por **TCP** entre microservicios
- Exposición de endpoints HTTP para pruebas locales (Postman)

---

## ⚙️ Tecnologías

- **NestJS**
- **Prisma ORM** con **PostgreSQL**
- **TCP Microservices (NestJS Transport)**
- **DTOs con validación**
- **JSON answers (respuestas evaluadas)**

---

## 📁 Estructura del Proyecto

```bash
src/
├── evaluation.controller.ts    # Controlador HTTP + TCP
├── evaluation.service.ts       # Lógica de negocio
├── dto/
│   └── create-evaluation.dto.ts
├── prisma/
│   └── prisma.service.ts       # Prisma client singleton
├── main.ts                     # Bootstrap con HTTP + TCP

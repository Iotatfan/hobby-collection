# Hobby Collection

A full-stack web application for managing and organizing personal hobby collections. The project consists of a React frontend, Go backend, and a dedicated Playwright automation suite.

> **Current Status:** The application is under active development. Access is currently protected using a dedicated application password with JWT-based authorization. Public user registration is not currently supported.

---

## Live Demo

- **Application:** https://hobby.iotatfan.com/

---

## Repositories

| Component | Description | Link |
|-----------|-------------|------|
| Frontend | React application | https://github.com/Iotatfan/hobby-collection-fe |
| Backend | Go REST API with PostgreSQL | https://github.com/Iotatfan/hobby-collection-be |
| Test Automation | Playwright E2E & API tests | https://github.com/Iotatfan/hobby-collection-test |

---

## Architecture

```text
                +------------------+
                |  React Frontend  |
                +--------+---------+
                         |
                    REST API
                         |
                +--------v---------+
                |    Go Backend    |
                +--------+---------+
                         |
         +---------------+---------------+
         |                               |
+--------v--------+             +--------v--------+
|   PostgreSQL    |             |   Cloudinary    |
|   Database      |             | Image Storage   |
+-----------------+             +-----------------+
```

---

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Chakra UI V3

### Backend

- Go
- Gin
- PostgreSQL
- JWT Authentication
- Cloudinary

### Quality Engineering

- Playwright
  - End-to-End Testing
  - API Testing
- GitHub Actions *(In Progress)*
- HTML Reports
- k6 *(Performance Testing - In Progress)*

---

## Features

### Authentication

- Password-protected application access
- JWT-secured API authorization

### Collection Management

- Create collections
- View collections
- Update collections
- Image upload

### Backend

- RESTful API
- Protected endpoints
- Cloudinary image storage

---

## Test Coverage

### End-to-End Testing

Currently implemented using Playwright:

- Password authentication
- Collection Collection Management (Read)

### API Testing

Currently being implemented using Playwright API Testing:

- Authentication endpoints
- Collection Collection Management endpoints (Read)
- Error handling

### Performance Testing *(In Progress)*

Planned using k6:

- API load testing
- Stress testing
- Response time analysis
- Threshold validation

---

## Current Implementation Status

### Application

| Feature | Status |
|---------|--------|
| Password authentication | ✅ |
| Home page | ✅ |
| Create collection | ✅ |
| View collections | ✅ |
| Update collections | ✅ |
| Upload image | ✅ |
| Delete collection | Planned |
| Public user registration | Planned |

### Test Automation

#### End-to-End (Playwright)

| Scenario | Status |
|----------|--------|
| Password authentication | ✅ |
| Home page | ✅ |
| Collection upload | In Progress |
| Collection edit | In Progress |
| Collection delete | Waiting for application support |

#### API Testing

| Endpoint | Status |
|----------|--------|
| Authentication | In Progress |
| Collection endpoints | In Progress |

#### Performance Testing

- k6 performance testing planned
- Load and stress testing

---

## Roadmap

### Application

- [x] Password-protected authentication
- [x] Collection management (Create, Read, Update)
- [x] Cloudinary image upload
- [ ] Collection deletion

### Quality Engineering

- [x] Playwright project setup
- [x] Page Object Model (POM)
- [ ] Complete E2E test suite
- [ ] Complete API test suite
- [ ] GitHub Actions CI
- [ ] k6 performance testing
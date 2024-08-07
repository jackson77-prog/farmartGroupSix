# Farmart

Farmart is an e-commerce platform designed to empower farmers by eliminating middlemen and enabling direct sales of farm animals. This platform allows farmers to list animals for sale and manage orders, while users can browse, search, and purchase animals directly from farmers.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Wireframes](#wireframes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

### Farmer
- **Authentication**: Login/Register.
- **Animal Management**: Add, update, and edit animals for sale.
- **Order Management**: Confirm or reject orders.

### User
- **Authentication**: Login/Register.
- **Animal Browsing**: View all listed animals.
- **Search & Filter**: Search for animals by type and breed. Filter animals by breed and age.
- **Shopping Cart**: Add animals to the cart and checkout.
- **Payment**: Pay for items in the cart.

## Technologies

- **Backend**: Flask
- **Database**: PostgreSQL
- **Frontend**: React.js, Redux Toolkit
- **Testing**: Jest, Pytest
- **DevOps**: Docker, Docker Compose


## Setup

### Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL


### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/Clairewambani/Farmart-Phase5-group6-project.git
    cd Farmart-Phase5-group6-project
    ```

2. **Backend Setup**

    a. Navigate to the backend directory:
    ```bash
    cd backend
    ```

    b. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

    c. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

    d. Initialize the database:
    ```bash
    flask --app app db init
    flask --app app db migrate -m "Initial migration."
    flask --app app db upgrade
    ```

3. **Frontend Setup**

    a. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

    b. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. **Using Docker**

    a. Navigate to the project root and run:
    ```bash
    docker-compose up --build
    ```

2. **Without Docker**

    a. Start the backend server:
    ```bash
    cd backend
    flask run
    ```

    b. Start the frontend development server:
    ```bash
    cd ../frontend
    npm run dev
    ```

3. **Access the Application**

    - Frontend: http://localhost:3000
    - Backend API: http://localhost:5000/api

## API Endpoints

- `POST /api/auth/login`: User login
- `POST /api/auth/register`: User registration
- `GET /api/animals`: Get all animals
- `POST /api/animals`: Add a new animal (Farmer)
- `PUT /api/animals/:id`: Update an animal (Farmer)
- `DELETE /api/animals/:id`: Delete an animal (Farmer)
- `POST /api/orders`: Create a new order
- `PUT /api/orders/:id/confirm`: Confirm an order (Farmer)
- `PUT /api/orders/:id/reject`: Reject an order (Farmer)

## Wireframes

[Wireframes can be found here](#)

## Testing

- **Backend**: Run Pytest
    ```bash
    cd backend
    pytest
    ```

- **Frontend**: Run Jest
    ```bash
    cd frontend
    npm test
    ```

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



# E-commerce Website Sign-Up and Login Flow

## Project Description

This project is a simple sign-up and login flow for an e-commerce website where users can mark the categories they are interested in. The project follows the design provided in the Figma link below and implements 4 screens: registration for new users, login for existing users, and a protected page showing a list of categories.

## Design Link

[Figma Design](https://www.figma.com/file/EjNZkDNTtgERV5PgF0mxnt/MERN-Assignment?type=design&node-id=33%3A667&mode=design&t=6k9GiDcswPavM0TD-1)

## Features

1. **User Registration**: Allows new users to register.
2. **User Login**: Allows existing users to log in.
3. **Protected Page**: Accessible only to logged-in users, displaying a list of categories.
4. **Category Selection**: Users can mark the categories they are interested in.
5. **Pagination**: The list of categories is paginated, showing only 6 categories at a time.
6. **Persistence**: Users' selected categories are saved in the database and are persistent across sessions.

## Tech Stack

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Setup Instructions

### Prerequisites

- Node.js (version 12 or higher)
- PostgreSQL (version 10 or higher)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/e-commerce-signup-login.git
    cd ecommerce-demo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup the database**:
    - Ensure PostgreSQL is running on your system.
    - Create a new PostgreSQL database.
    - Create a `.env` file in the root directory and add the following environment variables:
        ```env
        DATABASE_URL="postgresql://username:password@localhost:5432/yourdatabase"
        RESEND_API_KEY="your_resend_api_key"
        ```

4. **Generate Prisma client**:
    ```bash
    npx prisma generate
    ```

5. **Run database migrations**:
    ```bash
    npx prisma migrate dev --name init
    ```

6. **Seed the database with fake data**:
    ```bash
    npx ts-node prisma/seed.ts
    ```

7. **Run the development server**:
    ```bash
    npm run dev
    ```

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




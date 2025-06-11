# Next.js Better Auth Demo

A demonstration project showcasing how to implement authentication in Next.js using Better Auth. This project serves as a practical example and learning resource for developers who want to understand how to build secure authentication systems with email verification, OAuth integration, and password management.

![Next.js Better Auth Demo](public/image.png)

## Features

- ✉️ Email verification
- 🔄 Password reset functionality
- 📧 Email-based authentication
- 🔑 OAuth authentication (Google, GitHub)

## Tech Stack

- **Framework:** Next.js 15
- **UI Components:** ShadCN
- **Styling:** Tailwind CSS
- **Database:** Neon (PostgreSQL)
- **ORM:** Drizzle
- **Authentication:** Better-auth
- **Email:** Nodemailer

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- PostgreSQL database (or Neon account)

### Setting up Google App Password for Nodemailer

1. Go to your Google Account settings (https://myaccount.google.com/)
2. Enable 2-Step Verification if not already enabled
3. Go to Security → App passwords (https://myaccount.google.com/apppasswords)
4. Enter a name for your app (e.g., "Next.js Auth")
5. Copy the password and use it as your `EMAIL_PASS` in the `.env` file

4. Run database migrations:

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marrrkkk/nextjs-better-auth-demo.git
cd nextjs-better-auth
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=
```

4. Run database migrations:
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser


## Learn More

To learn more about the technologies used in this project:

- [Better Auth Documentation](https://www.better-auth.com/docs/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)

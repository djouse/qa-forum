# QA Forum - Student-Teacher Q&A Platform

Nuxt.js application using Prisma ORM - QA Forum for students to ask questions and teachers to provide the answers.

## Evaluation Instructions

### User Roles and Login

**Student Account:**
- Can overview all recent questions and navigate to login or register pages.
- Have an overview of the forum in a hero container.

**Student Account:**
- Register as a student or use existing student credentials (development login is available so that testers can do it faster eheh)
- Can ask and view questions, and see and add answers
- Access to "Ask Question" page and "My Questions" dashboard
- Cannot answer questions or manage question states (maybe they should be able to answer to be more interactive??)

**Teacher Account:**
- Register as a teacher or use existing teacher credentials  
- Can view questions in their assigned disciplines
- Can answer questions and mark them as resolved/canceled
- Access to "Teacher Dashboard" with discipline-specific question filtering
- Cannot ask questions (teacher role restriction)

### Key Features to Test

1. **Fake Authentication Flow:** Register/login as both student and teacher using the normal prisma DB without OAuth2.0
2. **Student Experience:** Ask questions, view personal questions, browse all questions
3. **Teacher Experience:** Answer questions, filter by discipline, manage question states
4. **Question Management:** View question details, add answers, state transitions
5. **Responsive Design:** Test on mobile and desktop viewports

### Navigation Differences

- **Students:** Home → Ask Question → My Questions → Question Details
- **Teachers:** Home → Teacher Dashboard → Question Details (with management options)
- **Unauthenticated:** Home (browse only) → Login/Register

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

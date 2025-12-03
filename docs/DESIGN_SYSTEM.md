# QA Forum - Design System & Technical Documentation

## Color Palette

### Primary Colors
- **M-Green**: `#114F55` - Main brand color, used for headings, primary text, and key UI elements
- **Orange**: `#FF6B35` - Accent color for buttons, links, and call-to-action elements
- **Light Green**: `#E8F5F5` - Light background variant of m-green
- **Green**: `#7DD889` - Secondary green for highlights and success states

### Neutral Colors
- **Grey**: `#D1D5DB` - Border colors, form elements, secondary backgrounds
- **Grey-M5**: `#6B7280` - Secondary text, metadata, subtle content
- **Light Gray**: `#F9FAFB` - Card backgrounds, content containers
- **White**: `#FFFFFF` - Primary backgrounds, button text

## Typography

### Font Sizes
- **Hero Headings**: `text-5xl md:text-7xl` (48px/112px)
- **Large Headings**: `text-3xl md:text-4xl` (30px/36px)
- **Section Headings**: `text-2xl md:text-3xl` (24px/30px)
- **Card Titles**: `text-xl` (20px)
- **Body Text**: `text-lg md:text-xl` (18px/20px)
- **Secondary Text**: `text-sm md:text-base` (14px/16px)
- **Metadata**: `text-xs md:text-sm` (12px/14px)

### Font Weights
- **Bold**: `font-bold` - Headings, important text
- **Semibold**: `font-semibold` - Card titles, labels
- **Medium**: `font-medium` - Links, secondary emphasis
- **Regular**: Default weight for body text

## Border Radius

### Standard Radius Values
- **Small Elements**: `rounded-lg` (8px) - Form inputs, small buttons
- **Medium Elements**: `rounded-2xl` (16px) - Inner content containers
- **Large Elements**: `rounded-3xl` (24px) - Main cards, hero sections
- **Buttons**: `rounded-full` - All interactive buttons

## Layout & Spacing

### Container Widths
- **Main Container**: `max-w-5xl mx-auto` - Primary content width
- **Hero Sections**: Full width with internal padding constraints

### Padding & Margins
- **Hero Sections**: `px-16 py-24 md:px-20 md:py-32`
- **Cards**: `p-6` standard, `p-3 md:p-4` for inner containers
- **Buttons**: `px-8 py-3` small, `px-12 py-5` large
- **Section Spacing**: `mb-8` to `mb-16` between major sections

### Grid & Flexbox
- **Discipline Cards**: `grid-cols-1 md:grid-cols-3 gap-4`
- **Hero Layout**: `flex flex-col md:flex-row gap-8 md:gap-24`
- **Form Layout**: `grid-cols-2 gap-4` for form fields

## Component Patterns

### Hero Sections
```
- Background: var(--m-green)
- Text: white
- Button: Orange with white text
- Layout: Two-column on desktop, stacked on mobile
- Padding: Large (py-24 md:py-32)
```

### Question Cards
```
- Background: var(--light-gray)
- Border Radius: rounded-3xl
- Hover Effect: scale-103
- Title: var(--m-green), text-xl
- Content: var(--grey-m5)
- Metadata: Small text, var(--grey-m5)
```

### Buttons
```
Primary (Orange):
- Background: var(--orange)
- Text: white
- Radius: rounded-full
- Hover: scale-105

Secondary (Green):
- Background: var(--m-green)
- Text: white
- Radius: rounded-full

Tertiary (White):
- Background: white
- Text: var(--m-green)
- Border: Optional
```

### Form Elements
```
- Border: var(--grey)
- Focus: var(--orange) border
- Radius: rounded-lg
- Padding: px-3 py-2
```

## Page Structure

### Main Layout Hierarchy
```
1. Header (Navigation)
   - Logo + Brand
   - User Authentication/Profile

2. Hero Section (Role-based)
   - Welcome message
   - Primary action
   - Feature overview

3. Content Section
   - Filters/Controls
   - Content cards/list
   - Pagination

4. Footer
   - App information
   - Version
```

### Responsive Breakpoints
- **Mobile**: Default styles
- **Desktop**: `md:` prefix (768px+)
- **Large Desktop**: `lg:` prefix (1024px+)

## API Structure

### Authentication Endpoints
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Question Management
```
GET    /api/questions              # List questions with filters
POST   /api/questions              # Create new question
GET    /api/questions/:id          # Get question details
PATCH  /api/questions/:id/state    # Update question state
```

### Answer Management
```
POST   /api/answers                # Create answer
GET    /api/answers/:id            # Get answer details
```

### User & Discipline Data
```
GET    /api/disciplines            # List all disciplines
GET    /api/teachers/:id/disciplines # Teacher's disciplines
```

## Database Schema

### Core Entities

#### Users
```
- id: String (Primary Key)
- name: String
- email: String (Unique)
- password: String (Hashed)
- role: Enum (STUDENT, TEACHER)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Disciplines
```
- id: String (Primary Key)
- name: String
- description: String?
- createdAt: DateTime
```

#### Questions
```
- id: String (Primary Key)
- title: String
- content: String
- state: Enum (ACTIVE, RESOLVED, CANCELED)
- gradeYear: Int
- authorId: String (Foreign Key → Users)
- disciplineId: String (Foreign Key → Disciplines)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Answers
```
- id: String (Primary Key)
- content: String
- authorId: String (Foreign Key → Users)
- questionId: String (Foreign Key → Questions)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Attachments (Optional)
```
- id: String (Primary Key)
- fileName: String
- fileUrl: String
- fileType: String
- fileSize: Int
- questionId: String? (Foreign Key → Questions)
- answerId: String? (Foreign Key → Answers)
```

### Relationships
```
User (1) → (N) Questions (as author)
User (1) → (N) Answers (as author)
Discipline (1) → (N) Questions
Question (1) → (N) Answers
Question (1) → (N) Attachments
Answer (1) → (N) Attachments
```

### Key Constraints
- Users can only have one role (STUDENT or TEACHER)
- Teachers cannot create questions
- Students cannot manage question states
- Questions must belong to a discipline
- Answers must belong to a question
- Only authenticated users can create content
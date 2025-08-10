# EasyTicket Backend Requirements

## Project Overview
A modern online ticketing system for bus, ship, and air travel, supporting search, booking, seat selection, payment, and admin management. Built with Node.js, Express, TypeScript, Prisma, and PostgreSQL.

*Note: The initial implementation will focus on bus ticketing. Ship and air ticket options will be included as placeholders, with detailed features to be implemented later.*

## Core Features
- User registration & authentication
- Search buses by route, date, operator
- View available seats and select
- Book tickets and make payments
- View booking history
- Admin: manage buses, routes, schedules, bookings

---

## User Stories
- As a user, I want to search for buses by entering source, destination, and date.
- As a user, I want to view available seats and select my preferred seat.
- As a user, I want to book a ticket and pay online.
- As a user, I want to view my booking history.
- As an admin, I want to add or update bus schedules and routes.
- As an admin, I want to view and manage all bookings.

---

## Planned API Endpoints
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] GET /buses
- [ ] GET /buses/:id/seats
- [ ] POST /bookings
- [ ] GET /bookings (user)
- [ ] GET /admin/bookings
- [ ] POST /admin/buses
- [ ] PATCH /admin/buses/:id
- [ ] ...

---

## Planned Database Models
- User
- Bus
- Route
- Schedule
- Seat
- Booking
- Payment

---

## Database Model Details

### User
- id (PK)
- name
- email (unique)
- password
- role (user, admin, operator)
- createdAt
- updatedAt

### Bus
- id (PK)
- name
- operator
- seatMap (JSON, stores seat layout )
- registrationNumber
- createdAt
- updatedAt

#### Seat Map Convention
- Rows are labeled with letters (A, B, C, ...)
- Columns are labeled with numbers (1, 2, 3, 4, ...)
- Each seat is identified by combining row and column (e.g., A1, A4, B2)

### Route
- id (PK)
- source
- destination
- distance
- createdAt
- updatedAt

### Schedule
- id (PK)
- busId (FK to Bus)
- routeId (FK to Route)
- departureTime
- arrivalTime
- price
- date
- createdAt
- updatedAt

### Seat
- id (PK)
- scheduleId (FK to Schedule)
- row (e.g., "A")
- column (e.g., 1)
- seatNumber (optional, e.g., "A1", can be generated from row+column)
- isBooked

### Booking
- id (PK)
- userId (FK to User)
- scheduleId (FK to Schedule)
- seatId (FK to Seat)
- status (booked, cancelled, pending)
- paymentId (FK to Payment)
- createdAt
- updatedAt

### Payment
- id (PK)
- userId (FK to User)
- amount
- status (pending, completed, failed)
- method (card, mobile banking, etc.)
- transactionId
- createdAt
- updatedAt

---

## Relationships
- A User can have many Bookings.
- A Bus can have many Schedules.
- A Route can have many Schedules.
- A Schedule can have many Seats and Bookings.
- A Booking is linked to one User, one Schedule, one Seat, and one Payment.
- A Payment can be linked to one or more Bookings.

---

## Business Rules & Notes
- Each bus has a fixed seat map.
- Bookings must lock seats to prevent double booking.
- Payment must be confirmed before booking is finalized.
- Admins can manage all data.

---

*Add more details as you refine your requirements and design.*

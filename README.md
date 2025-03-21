# GlobalXFund - Crowdfunding Platform

A modern crowdfunding platform built with React, Express.js, and Node.js that enables users to create and support meaningful campaigns.

## Features

- 🚀 Create and manage fundraising campaigns
- 💰 Process donations securely
- 📊 Real-time campaign progress tracking
- 🎯 Category-based campaign organization
- 👥 User authentication and profiles
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router DOM
  - React Hook Form
  - Lucide React (icons)
  - Axios

- **Backend:**
  - Express.js
  - Node.js
  - CORS

## Project Structure

```
globalxfund/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── server/
│   └── index.js           # Express.js server
├── public/                # Static assets
└── package.json          # Project dependencies
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd globalxfund
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   # Start frontend
   npm run dev

   # Start backend (in a separate terminal)
   npm run server
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run build` - Build the frontend for production
- `npm run server` - Start the backend server
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
```

## API Endpoints

### Campaigns
- `GET /api/campaigns` - Get all campaigns
- `GET /api/campaigns/:id` - Get campaign by ID
- `POST /api/campaigns` - Create new campaign

### Donations
- `POST /api/donations` - Create new donation
- `GET /api/campaigns/:id/donations` - Get donations for a campaign

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [Lucide Icons](https://lucide.dev/)

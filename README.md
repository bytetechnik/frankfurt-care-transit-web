# OMTaxi - Professional Taxi & Ambulance Service

A modern, responsive web application for booking taxi and ambulance services, built with React and TypeScript.

## 🚀 Features

- **Taxi Booking Service**
  - Easy-to-use booking interface
  - Real-time availability
  - Multiple vehicle options

- **Ambulance Service**
  - Emergency response system
  - Insurance information handling
  - Patient transport details
  - Personal information management

- **Multi-language Support**
  - English and German language options
  - Easy language switching

- **User-Friendly Interface**
  - Modern, responsive design
  - Mobile-first approach
  - Intuitive navigation
  - WhatsApp integration for quick contact

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Build Tool:** Vite
- **Form Handling:** React Hook Form
- **Email Service:** EmailJS
- **Maps Integration:** Google Maps
- **Animation:** Framer Motion
- **State Management:** React Context
- **Routing:** React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd omtaxi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React Context providers
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── services/          # API and service integrations
├── translations/      # Language files
├── types/             # TypeScript type definitions
└── lib/              # Utility functions
```

## 🔧 Configuration

### Email Service
The application uses EmailJS for handling contact form submissions. Configure your EmailJS credentials in the `.env` file.

### Maps Integration
Google Maps is integrated for location services. Add your Google Maps API key to the `.env` file.

### Language Support
Language files are located in `src/translations/`. To add a new language:
1. Create a new file in the translations directory
2. Add the language option to the LanguageSwitcher component
3. Update the translations type definitions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The application is fully responsive and optimized for:
- iOS Safari
- Android Chrome
- Mobile Firefox

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email [support@omtaxi.com](mailto:support@omtaxi.com) or open an issue in the repository.

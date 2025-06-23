# Samwel - Backend Developer Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing Samwel's expertise in backend development with Python (Django), JavaScript, and PHP.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth scrolling navigation and animated sections
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with React and optimized for performance

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   └── *.css           # Component styles
├── App.tsx             # Main App component
├── App.css             # Global styles
└── index.tsx           # Entry point
```

## 🎨 Customization

### Personal Information
Update the following files to customize the portfolio for your needs:

- **Personal Details**: Update contact information in `Contact.tsx`
- **Projects**: Modify the projects array in `Projects.tsx`
- **Skills**: Update skill levels and categories in `Skills.tsx`
- **About Section**: Edit the content in `About.tsx`

### Styling
- **Colors**: Modify CSS variables in `App.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Adjust component styles in their respective CSS files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Name**: Samwel
- **Email**: samwel@example.com
- **Location**: Nairobi, Kenya
- **Specialization**: Backend Development

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

---

Built with ❤️ using React and TypeScript

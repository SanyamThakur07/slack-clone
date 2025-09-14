# 🚀 Slack Clone - Modern Team Collaboration Platform

A full-stack, real-time team collaboration application built with Next.js 15, Convex, and modern web technologies. This Slack clone features workspace management, member authentication, and a responsive UI designed for seamless team communication.

## ✨ Key Features

- **🔐 Authentication & Authorization** - Secure user authentication with role-based access control
- **🏢 Workspace Management** - Create, join, and manage multiple workspaces with unique join codes
- **👥 Member Management** - Admin/member role system with user permissions
- **💬 Real-time Communication** - Built for instant messaging and team collaboration
- **🎨 Modern UI/UX** - Clean, responsive interface with dark/light theme support
- **📱 Responsive Design** - Optimized for desktop and mobile devices
- **⚡ Real-time Updates** - Powered by Convex for instant data synchronization
- **🛡️ Type Safety** - Full TypeScript integration throughout the application

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15.5.2](https://nextjs.org)** - React framework with App Router
- **[React 19.1.0](https://react.dev)** - Modern React with latest features
- **[TypeScript 5.x](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first styling framework

### **Backend & Database**
- **[Convex](https://convex.dev)** - Real-time backend-as-a-service
- **[Convex Auth](https://docs.convex.dev/auth)** - Authentication and user management
- **[React Query](https://tanstack.com/query)** - Server state management

### **UI Components & Libraries**
- **[Radix UI](https://www.radix-ui.com)** - Headless, accessible UI components
  - Avatar, Dialog, Dropdown Menu, Separator, Slot, Tooltip
- **[Lucide React](https://lucide.dev)** - Beautiful icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon sets
- **[Sonner](https://sonner.emilkowal.ski)** - Elegant toast notifications
- **[React Hook Form](https://react-hook-form.com)** - Performant form management
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Flexible layout system
- **[Class Variance Authority](https://cva.style/docs)** - Component variant management

### **State Management**
- **[Jotai](https://jotai.org)** - Primitive and flexible state management
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### **Development Tools**
- **[ESLint](https://eslint.org)** - Code linting
- **[Prettier](https://prettier.io)** - Code formatting
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - VS Code extension

## 📦 Dependencies Overview

### Production Dependencies
```json
{
  "@auth/core": "0.37.0",
  "@convex-dev/auth": "^0.0.88",
  "@convex-dev/react-query": "^0.0.0-alpha.11",
  "convex": "^1.26.2",
  "next": "15.5.2",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "typescript": "^5"
}
```

## 🎯 Architecture Highlights

- **Real-time Data Layer** - Convex provides instant updates across all clients
- **Type-safe API** - Full TypeScript integration from frontend to backend
- **Modular Feature Structure** - Organized codebase with feature-based architecture
- **Responsive Layout** - Adaptive UI that works on all screen sizes
- **Authentication Flow** - Secure login/signup with workspace joining capabilities
- **Role-based Access Control** - Admin and member permissions system
- **Modern React Patterns** - Hooks, context, and server components

## 📂 Project Structure

```
slack-clone/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Authentication pages
│   │   ├── workspace/         # Workspace-related pages
│   │   │   └── [workspaceId]/ # Dynamic workspace routes
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── features/              # Feature modules
│   │   ├── auth/              # Authentication logic
│   │   ├── workspaces/        # Workspace management
│   │   └── members/           # Member management
│   ├── components/            # Reusable UI components
│   │   └── ui/               # Base UI components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── convex/                    # Backend functions
│   ├── schema.ts             # Database schema
│   ├── auth.ts               # Authentication config
│   ├── workspaces.ts         # Workspace operations
│   └── members.ts            # Member operations
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager
- Convex account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanyamThakur07/slack-clone.git
   cd slack-clone
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   Follow the prompts to create a new Convex project or link to an existing one.

4. **Configure Authentication**
   - Set up your authentication providers in the Convex dashboard
   - Update environment variables as needed

5. **Run the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint for code quality

## 🌟 Key Features in Detail

### Authentication System
- Secure user registration and login
- Session management with Convex Auth
- Protected routes and middleware
- Role-based access control

### Workspace Management
- Create and manage multiple workspaces
- Unique join codes for workspace access
- Workspace settings and preferences
- Member invitation system

### Member Management
- Admin and member role assignment
- User profile management
- Permission-based UI rendering
- Member removal and role updates

### Real-time Features
- Instant data synchronization
- Live workspace updates
- Real-time member status
- Optimistic UI updates

### Modern UI/UX
- Clean, professional design
- Dark and light theme support
- Responsive layout for all devices
- Accessible components with Radix UI
- Smooth animations and transitions

## 🔄 Future Enhancements

- [ ] **Channel Management** - Create and organize channels
- [ ] **Direct Messaging** - Private conversations between users
- [ ] **File Sharing** - Upload and share files within workspaces
- [ ] **Message Threads** - Threaded conversations
- [ ] **Emoji Reactions** - React to messages with emojis
- [ ] **Search Functionality** - Search messages and files
- [ ] **Notification System** - Real-time notifications
- [ ] **Video/Voice Calls** - Integrated calling features
- [ ] **Mobile App** - React Native companion app

## 📸 Screenshots

*Add screenshots of your application here to showcase the UI*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Add your deployment URL]
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Convex Documentation**: [https://docs.convex.dev](https://docs.convex.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **Radix UI**: [https://www.radix-ui.com](https://www.radix-ui.com)

## 💡 Inspiration

This project was built to demonstrate modern full-stack development practices using the latest technologies in the React ecosystem. It serves as both a learning resource and a foundation for building real-time collaboration applications.

---

**Built with ❤️ by [SanyamThakur07](https://github.com/SanyamThakur07)**

*Perfect for team collaboration, real-time messaging apps, workspace management systems, and learning modern full-stack development patterns.*

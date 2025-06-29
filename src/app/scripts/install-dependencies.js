// Run these commands in your terminal:

import npm from "npm"
import { exec } from "child_process"

// 1. Install Tailwind CSS and dependencies
const installDependencies = () => {
    console.log("Installing Tailwind CSS and dependencies...")
    npm.install(["-D", "tailwindcss", "postcss", "autoprefixer"], (err) => {
      if (err) {
        console.error("Error installing Tailwind CSS and dependencies:", err)
        return
      }
      console.log("Tailwind CSS and dependencies installed successfully.")
    })
  
    console.log("Installing additional dependencies...")
    npm.install(
      [
        "@radix-ui/react-avatar",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "tailwind-merge",
        "tailwindcss-animate",
      ],
      (err) => {
        if (err) {
          console.error("Error installing additional dependencies:", err)
          return
        }
        console.log("Additional dependencies installed successfully.")
      },
    )
  }
  
  // 2. Initialize Tailwind (if not done already)
  const initializeTailwind = () => {
    console.log("Initializing Tailwind CSS...")
    exec("npx tailwindcss init -p", (err, stdout, stderr) => {
      if (err) {
        console.error("Error initializing Tailwind CSS:", stderr)
        return
      }
      console.log("Tailwind CSS initialized successfully.")
    })
  }
  
  installDependencies()
  initializeTailwind()
  
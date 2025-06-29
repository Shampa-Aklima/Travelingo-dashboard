// Run these commands in PowerShell:

console.log("Installing the correct Tailwind CSS PostCSS plugin...")

// 1. Install the new PostCSS plugin
import { exec } from "child_process"

exec("npm install -D @tailwindcss/postcss", (err, stdout, stderr) => {
  if (err) {
    console.error("Error installing @tailwindcss/postcss:", stderr)
    return
  }
  console.log("@tailwindcss/postcss installed successfully!")
})

// 2. Also install the regular tailwindcss if not already installed
exec("npm install -D tailwindcss postcss autoprefixer", (err, stdout, stderr) => {
  if (err) {
    console.error("Error installing tailwindcss:", stderr)
    return
  }
  console.log("Tailwind CSS dependencies installed successfully!")
})

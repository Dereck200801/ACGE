import fs from 'fs'
import path from 'path'

async function fixEnv() {
  const envPath = path.join(process.cwd(), '.env')
  
  // Le @ doit être encodé en %40 dans l'URL
  const envContent = `# Base de données PostgreSQL locale
DATABASE_URL="postgresql://postgres:Reviti2025%40@localhost:5432/ged_database"

# Configuration NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret-key-change-in-production-${Math.random().toString(36).substring(7)}"

# Environment
NODE_ENV="development"

# Configuration upload
UPLOAD_MAX_SIZE="10485760"
UPLOAD_DIR="./uploads"`

  fs.writeFileSync(envPath, envContent)
  console.log('✅ Fichier .env corrigé avec l\'encodage URL approprié')
  console.log('🔑 Mot de passe encodé: Reviti2025@ → Reviti2025%40')
}

fixEnv()

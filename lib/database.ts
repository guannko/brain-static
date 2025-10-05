const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/brain_index'
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

export const config = {
  database: {
    url: DATABASE_URL,
  },
  redis: {
    url: REDIS_URL,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  },
}

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password_hash: string
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      analyses: {
        Row: {
          id: string
          user_id: string
          company_name: string
          website_url: string
          analysis_data: any
          score: number
          status: 'pending' | 'completed' | 'failed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          company_name: string
          website_url: string
          analysis_data?: any
          score?: number
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          company_name?: string
          website_url?: string
          analysis_data?: any
          score?: number
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
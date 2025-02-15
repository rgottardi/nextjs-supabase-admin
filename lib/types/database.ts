export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          role: 'admin' | 'user'
          full_name: string | null
          updated_at: string
        }
        Insert: {
          id: string
          role?: 'admin' | 'user'
          full_name?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'admin' | 'user'
          full_name?: string | null
          updated_at?: string
        }
      }
      user_settings: {
        Row: {
          user_id: string
          preferences: Json
          updated_at: string
        }
        Insert: {
          user_id: string
          preferences?: Json
          updated_at?: string
        }
        Update: {
          user_id?: string
          preferences?: Json
          updated_at?: string
        }
      }
    }
  }
}
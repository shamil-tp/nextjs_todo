// lib/auth.ts
// import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'
import pool from './db'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [

    // Google OAuth WE DON'T USE IT FOR NOW
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),

    // Email & Password
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // find user in DB
        const { rows } = await pool.query(
          'SELECT * FROM users WHERE email = $1', [credentials.email]
        )
        const user = rows[0]
        if (!user) return null

        // compare password
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return { id: user.id, email: user.email, name: user.name }
      }
    })
  ],

  callbacks: {
    // attach user id to session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!
      }
      return session
    }
  },

  pages: {
    signIn: '/login',   // use our custom login page
  },

  session: {
    strategy: 'jwt'     // store session in JWT token
  },

  secret: process.env.NEXTAUTH_SECRET
}
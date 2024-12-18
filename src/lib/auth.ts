import { prisma } from '@/services/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '@/env'
import { posthogServer } from './posthog'

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
          id: user.id
        }
      }
    }
  },

  adapter: PrismaAdapter(prisma) as Adapter,
  secret: env.JWT_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ]
}

export const getServerAuthSession = () => getServerSession(authOptions)

import { prisma } from '@/services/prisma'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import { env } from '@/env'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  callbacks: {
    session: ({ session, user }) => {
      console.log(session, user)
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id
        }
      }
    }
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ]
})

export { handler as GET, handler as POST }

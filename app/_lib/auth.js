import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import NextAuth from "next-auth";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [Google, Discord],

  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await getGuest(user.email);
        if (!existingUser) {
          await createGuest({ email: user.email, fullName: user.name });
        }
        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },

    authorized({ auth }) {
      return !!auth?.user;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

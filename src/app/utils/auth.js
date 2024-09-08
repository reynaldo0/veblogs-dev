import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authOptions = {
  providers: [
    Google({
      clienId: process.env.GOOGLE_ID,
      clinetSecret: process.env.GOOGLE_SECRET,
    }),
    GitHub({
      clienId: process.env.GITHUB_ID,
      clinetSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

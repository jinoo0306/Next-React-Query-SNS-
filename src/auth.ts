import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    CredentialsProvider({
      // credentials 속성을 추가하여 자격 증명 필드를 정의합니다.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // API 요청을 통해 사용자 인증
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        // 응답 상태가 오류일 경우 null 반환
        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);

        // 사용자 정보 반환
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});

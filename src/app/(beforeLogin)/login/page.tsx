"use client";

import { useRouter } from "next/navigation";
import Main from "@src/app/(beforeLogin)/_components/Main";

function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    <div>
      <Main />
    </div>
  );
}

export default Login;

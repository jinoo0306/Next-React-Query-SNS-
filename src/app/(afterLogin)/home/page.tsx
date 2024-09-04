import style from "./home.module.css";
import Tab from "@src/app/(afterLogin)/home/_components/Tab";
import TabProvider from "@src/app/(afterLogin)/home/_components/TabProvider";
import PostForm from "@src/app/(afterLogin)/home/_components/PostForm";
import { Suspense } from "react";
// import Loading from "@src/app/(afterLogin)/home/loading";
// import TabDeciderSuspense from "@src/app/(afterLogin)/home/_components/TabDeciderSuspense";

export default async function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        {/* <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense> */}
      </TabProvider>
    </main>
  );
}

import style from "./home.module.css";
import Tab from "./_components/Tab";
import PostForm from "./_components/PostForm";
import Post from "@src/app/(afterLogin)/_components/Post";
import TabProvider from "./_components/TabProvider";

function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}

export default Home;

import style from "./profile.module.css";
import Post from "@src/app/(afterLogin)/_components/Post";
import BackButton from "@src/app/(afterLogin)/_components/BackButton";
import Image from "next/image";

export default function Profile() {
  const user = {
    id: "jinoo0306",
    nickname: "지누",
    image: "/he.png",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image src={user.image} alt={user.id} width={134} height={134} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}

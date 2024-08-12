"use client";

import style from "./logoutButton.module.css";
import Image from "next/image";

function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "jinoo0306",
    nickname: "지누",
    image: "/he.png",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}

export default LogoutButton;

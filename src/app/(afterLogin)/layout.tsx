import { layoutProps } from "@src/types/props";
import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "@/public/zlogo.png";
import NavMenu from "@src/app/(afterLogin)/_components/NavMenu";
import LogoutButton from "@src/app/(afterLogin)/_components/LogoutButton";
import TrendSection from "@src/app/(afterLogin)/_components/TrendSection";
import FollowRecommend from "@src/app/(afterLogin)/_components/FollowRecommend";
import RightSearchZone from "@src/app/(afterLogin)/_components/RightSearchZone";

function AfterLogin({ children, modal }: layoutProps) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}

export default AfterLogin;

import { useState } from "react";
import { Header, SubHeader, Sidebar, Section, Modal } from "..";

import styles from "./styles.module.scss";

export default function Layout() {
  const [showModal] = useState(false);

  return (
    <>
      <div className={styles.Container}>
        <Header />
        <SubHeader />
        <main className={styles.Wrapper}>
          <Sidebar />
          <Section />
        </main>
        {showModal && <Modal />}
      </div>
      <div className={showModal ? styles.GrayLayer : undefined}></div>
    </>
  );
}

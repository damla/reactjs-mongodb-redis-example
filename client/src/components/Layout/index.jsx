import { useState } from "react";
import { Header, SubHeader, Sidebar, Section, Modal } from "..";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useModal } from "../../contexts/Modal/ModalContext";

export default function Layout() {
  const { showModal } = useModal();

  return (
    <>
      <div
        className={cn(
          styles.Container,
          showModal ? styles.OverflowHidden : undefined
        )}
      >
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

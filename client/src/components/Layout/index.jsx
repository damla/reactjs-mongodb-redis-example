import { Header } from "..";
import { SubHeader } from "..";
import { Sidebar } from "..";
import { Section } from "..";

import styles from "./styles.module.scss";

export default function Layout() {
  return (
    <div className={styles.Container}>
      <Header />
      <SubHeader />
      <div className={styles.Wrapper}>
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}

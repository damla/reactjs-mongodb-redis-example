import { Header } from "..";
import { SubHeader } from "..";
import { Sidebar } from "..";
import { Section } from "..";

import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <SubHeader />
      <Sidebar />
      <Section />
      {children}
    </div>
  );
}

import styles from "./styles.module.scss";
import { Logo } from "../../../assets";
import { Search, Basket } from "../..";
export default function Header() {
  return (
    <header className={styles.Container}>
      <a className={styles.Link} href="/" target="" title="Hepsiburada">
        <img
          className={styles.Logo}
          src={Logo}
          width="211.52"
          height="35"
          alt="hb-logo"
        />
      </a>
      <Search />
      <Basket />
    </header>
  );
}

import styles from "./styles.module.scss";
import { Logo } from "../../../assets";
import { Search } from "../..";
export default function Header() {
  return (
    <header className={styles.Container}>
      <a href="/" target="" title="Hepsiburada">
        <img className={styles.Logo} src={Logo} alt="hb-logo" />
      </a>
      <Search />
      <div>Header</div>
    </header>
  );
}

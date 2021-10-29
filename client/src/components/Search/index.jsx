import styles from "./styles.module.scss";
import { SearchIcon } from "../../assets/";
// TODO: max input karakterini sinirla
export default function Search() {
  return (
    <div className={styles.Container}>
      <span className={styles.LogoWrapper}>
        <img src={SearchIcon} height="17.5" alt="hb-logo" />
      </span>
      <input
        type="search"
        className={styles.SearchInput}
        placeholder="25 milyon'dan fazla ürün içerisinde ara"
      />
    </div>
  );
}

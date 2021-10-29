import { LinkList, Link } from "../..";
import styles from "./styles.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.Container}>
      <LinkList filterTitle="Renk">
        <Link filterName="Label Text (4)" />
        <Link filterName="Lacivert (3)" />
        <Link filterName="Sarı (1)" />
        <Link filterName="Siyah (5)" />
        <Link filterName="Beyaz (2)" />
      </LinkList>
      <LinkList filterTitle="Sıralama">
        <Link filterName="En Düşük Fiyat" />
        <Link filterName="En Yüksek Fiyat" />
        <Link filterName="En Yeniler (A>Z)" />
        <Link filterName="En Yeniler (Z>A)" />
      </LinkList>
      <LinkList filterTitle="Marka">
        <Link filterName="Samsung (4)" />
        <Link filterName="Nokia (6)" />
        <Link filterName="Apple (3)" />
        <Link filterName="LG (2)" />
        <Link filterName="Huawei (6)" />
        <Link filterName="Xiaomi (9)" />
        <Link filterName="General Mobile (1)" />
        {/* count eklenecek */}
      </LinkList>
    </aside>
  );
}

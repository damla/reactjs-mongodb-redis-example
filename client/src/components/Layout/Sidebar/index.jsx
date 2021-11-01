import { LinkList, Link } from "../..";
import styles from "./styles.module.scss";
import { useFilters } from "../../../contexts/Filters/FiltersContext";

export default function Sidebar() {
  const { brands, loadingBrands, colors, loadingColors } = useFilters();
  if (loadingBrands || loadingColors) return <div>Loading...</div>;

  return (
    <aside className={styles.Container}>
      <LinkList filterTitle="Renk">
        {colors.map((color, i) => {
          return (
            <Link
              key={i}
              filterName={color.name + " (" + color.products.length + ")"}
              color={color}
            />
          );
        })}
      </LinkList>
      <LinkList filterTitle="Sıralama">
        <Link filterName="En Düşük Fiyat" sortingType="lessToMore" />
        <Link filterName="En Yüksek Fiyat" sortingType="moreToLess" />
        <Link filterName="En Yeniler (A>Z)" sortingType="aToZ" />
        <Link filterName="En Yeniler (Z>A)" sortingType="zToA" />
      </LinkList>
      <LinkList filterTitle="Marka">
        {brands.map((brand, i) => {
          return (
            <Link
              key={i}
              filterName={brand.name + " (" + brand.products.length + ")"}
              brand={brand}
            />
          );
        })}
      </LinkList>
    </aside>
  );
}

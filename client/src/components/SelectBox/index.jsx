import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { DownArrowIcon } from "../../assets";
import { SelectBoxItem } from "..";

export default function SelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target) &&
        isOpen === true
      ) {
        setIsOpen(!isOpen);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, clickRef]);

  const menuClasses = cn(styles.Menu, isOpen ? styles.Open : undefined);

  return (
    <div
      ref={clickRef}
      className={styles.Container}
      onClick={() => handleClick()}
    >
      <span className={styles.Text}>Sıralama</span>
      <div className={styles.Icon}>
        <img src={DownArrowIcon} width="11" alt="down-arrow" />
      </div>
      <div className={menuClasses}>
        <SelectBoxItem selection="En Düşük Fiyat" />
        <SelectBoxItem selection="En Yüksek Fiyat" />
        <SelectBoxItem selection="En Yeniler (A&gt;Z)" />
        <SelectBoxItem selection="En Yeniler (Z&gt;A)" />
      </div>
    </div>
  );
}

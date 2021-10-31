import styles from "./styles.module.scss";

export default function ProductRow({ itemCount, children }) {
  //   var rows = [];
  // for (var i = 0; i < numrows; i++) {
  //     // note: we are adding a key prop here to allow react to uniquely identify each
  //     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //     rows.push(<ObjectRow key={i} />);
  // }
  return <div className={styles.Row}>{children}</div>;
}

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Info() {
  return (
    <div className={styles.page}>
        <p>
            hello there!
        </p>
          <div>
            <Link href="/">Home página</Link>
          </div>
    </div>
  );
}

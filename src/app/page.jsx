import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import { Featured } from "@/components/Featured/Featured";
import { CategoryList } from "@/components/CategoryList/CategoryList";
import { CardList } from "@/components/CardList/CardList";
import { Menu } from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}

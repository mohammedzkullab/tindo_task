"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Button } from "components";
import ModalExample from "components/Modal_example";

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <main className={styles.main}>
      <Button onClick={() => setOpen((prev) => !prev)}>Show Modal</Button>
      <ModalExample isOpen={isOpen} close={closeModal} />
    </main>
  );
}

import { useState } from "react";
import { Button } from "components";
import ModalExample from "components/Modal_example";
import NoSsr from "components/NoSsr";

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <NoSsr>
      <Button onClick={() => setOpen(true)}>Show Modal</Button>
      <ModalExample isOpen={isOpen} close={closeModal} />
    </NoSsr>
  );
}

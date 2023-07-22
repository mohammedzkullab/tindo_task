import { ModalExample } from "components";
import ModalExampleWithForm from "components/ModalExampleWithForm";
import NoSsr from "components/NoSsr";

export default function Home() {
  return (
    <NoSsr>
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <ModalExample />
        <ModalExampleWithForm />
      </div>
    </NoSsr>
  );
}

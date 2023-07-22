import Button from "components/Button";
import Modal from "components/Modal";
import NoSsr from "components/NoSsr";
import { useState } from "react";

export const ModalExampleWithForm = ({
  initOpen,
  withoutFooter,
}: {
  initOpen?: boolean;
  withoutFooter?: boolean;
}) => {
  const [isOpen, setOpen] = useState<boolean>(initOpen || false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <NoSsr>
      <Button className="border border-white" onClick={() => setOpen(true)}>
        Show Modal example with Form
      </Button>
      <Modal.Wrapper open={isOpen} onClose={closeModal} size="large">
        <Modal.Head>Example Modal With Form</Modal.Head>
        <Modal.Body className="p-5">
          <form>
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="mt-2">
                Name
              </label>
              <input type="text" id="name" className="form-control_input" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control_input" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control_input"
              />
            </div>
          </form>
        </Modal.Body>
        {!withoutFooter && (
          <Modal.Footer className="flex items-center justify-end gap-4">
            <Button
              className="bg-transparent border-[0.5px] border-white"
              onClick={closeModal}
              buttonSize="small"
            >
              Dismiss
            </Button>
            <Button
              className="bg-transparent border-[0.5px] border-white"
              onClick={() => alert("You saved me !")}
              buttonSize="small"
              type="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        )}
      </Modal.Wrapper>
    </NoSsr>
  );
};

export default ModalExampleWithForm;

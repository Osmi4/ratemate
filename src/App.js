import { useState } from "react";
import "./App.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [regModalShown, setRegModalShown] = useState(false);
  const toggleRegisterModal = () => {
    setRegModalShown((prevState) => !prevState);
  };

  return (
    <div className="bg-orange-100 h-screen">
      <div className="w-full flex justify-between h-[100px] items-center font-bold text-gray-950 ">
        <div className="ml-[100px] bg-inherit">Logo</div>
        <button
          className="mr-[100px] rounded-full border-2 py-3 px-7 text-lg border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-200"
          onClick={onOpen}
        >
          Get RateMate
        </button>
      </div>
      <header className="text-center text-8xl mt-[10px] font-extrabold text-gray-950">
        RateMate
      </header>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {regModalShown ? "Register" : "Log in"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nickname"
                  placeholder="Enter your nickname"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                {regModalShown && (
                  <Input
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type="password"
                    variant="bordered"
                  />
                )}
                {!regModalShown && (
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Link
                  className="ml-[10px]"
                  color="primary"
                  size="sm"
                  onClick={toggleRegisterModal}
                >
                  {!regModalShown ? "Register" : "Log in"}
                </Link>
                <div className="flex gap-3">
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  {!regModalShown && (
                    <Button color="primary" onPress={onClose}>
                      Sign in
                    </Button>
                  )}
                  {regModalShown && (
                    <Button color="primary" onPress={onClose}>
                      Register
                    </Button>
                  )}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

import { useContext, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [options, setOptions] = useState({
    title: '',
    text: '',
    close: () => {},
    buttons: [
      {
        text: "",
        size: "",
        color: "",
        callback: () => {},
      },
    ],
  });

  return (
    <ModalContext.Provider value={{ modal, setModal, options, setOptions }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context
};

export default ModalProvider;

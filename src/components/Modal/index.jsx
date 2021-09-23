import { Close, ModalBackground, ModalBody, ModalFooter, ModalHeader, ModalWrapper } from "./style";
import Title from '../Title';
import Text from '../Text';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useModal } from "../../context/Modal";
import { useRef } from "react";
import Button from "../Button";

function Modal() {

    const { modal, setModal, options } = useModal()
    const backRef = useRef(null)

    function closeModal(e){
        if(e.target !== backRef.current) {
            return;
        }
        setModal(false)
        options.close()
    }

    return (
        <>
            {
                modal && 
                (   
                    <ModalBackground ref={backRef} onClick={(e) => closeModal(e)}>
                        <ModalWrapper>
                            <ModalHeader>
                                <Close onClick={() => {setModal(false); options.close()}} icon={faTimes} size='2x'/>
                            </ModalHeader>
                            <ModalBody>
                                <Title typography='h4'>{options.title}</Title>
                                <Text size='sm'>{options.text}</Text>
                            </ModalBody>
                            {console.log(options)}
                            <ModalFooter>
                                { 
                                    options.buttons.map((button, key) => (
                                        <Button key={key} onClick={button.callback} size={button.size} color={button.color}>
                                            {button.text}
                                        </Button>
                                    ))
                                }
                            </ModalFooter>
                        </ModalWrapper>
                    </ModalBackground>
                    
                )
            }
        </>
        
    )
}

export default Modal;
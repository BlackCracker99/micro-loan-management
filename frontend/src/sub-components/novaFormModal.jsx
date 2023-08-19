import React, { Children, useState } from "react";
import ButtonsWithIcon from "../sub-components/novaBtnWithIcon";
import { Modal } from "flowbite-react";

import { HiX, HiPlus } from "react-icons/hi";

export default function FormModal(props) {
    return (
        <>
            <Modal
                dismissible
                show={props.openModal}
                onClose={() => props.setOpenModal(undefined)}
                size={props.modalSize}
            >
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <ButtonsWithIcon
                        text="Submit"
                        classes="w-24"
                        btnIcon={HiPlus}
                    />

                    <ButtonsWithIcon
                        color="failure"
                        text="Cansel"
                        classes="w-24"
                        btnIcon={HiX}
                        onClick={() => props.setOpenModal(undefined)}
                    />
                </Modal.Footer>
            </Modal>
        </>
    );
}

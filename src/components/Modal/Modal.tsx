// import * as React from "react";
import classNames from "classnames";
import React, {ReactNode} from "react";

export interface ModalChildrenProps {
  children?: ReactNode | ReactNode[];
}
export interface ButtonFooterModal {
  className?: string;
  title?: string;
  isDataDismiss?: boolean;
}

export interface ModalProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  isUnbordered?: boolean;
  isBlock?: boolean;
  buttonTitle?: string;
  buttonClassName?: string;
}

export default function Modal(props: React.PropsWithChildren<ModalProps>) {
  const {
    id,
    title,
    subtitle,
    description,
    isUnbordered = false,
    isBlock = false,
    buttonClassName = "btn-primary",
    buttonTitle = "Botón Modal",
    children,
  } = props;

  const modalClass = classNames("modal", {
    fade: !isBlock,
    "d-block": isBlock,
  });

  const modalHeaderClass = classNames("modal-header", {
    unbordered: isUnbordered,
  });

  return (
    <>
      <button
        type="button"
        className={`btn ${buttonClassName}`}
        data-toggle="modal"
        data-target={`#${id}`}
      >
        {buttonTitle}
      </button>
      <div className={modalClass} tabIndex={-1} role="dialog" id={id}>
        <div
          className="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className={modalHeaderClass}>
              {subtitle && <small>{subtitle}</small>}
              <h4 className="modal-title">{title}</h4>
            </div>
            {description && (
              <div className="modal-body">
                <p>{description}</p>
              </div>
            )}
            {children && <div className="modal-footer">{children}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

//ejemplos :
// import Button from "@testing/Button/Button"
// import ModalBox from "../../../src/components/Modal/ModalBox/ModalBox"
// import ModalHeader from "@testing/Modal/ModalHeader/ModalHeader"
// import ModalTitle from "@testing/Modal/ModalTitle/ModalTitle"
// import ModalBody from "@testing/Modal/ModalBody/ModalBody"
// import ModalFooter from "@testing/Modal/ModalFooter/ModalFooter"
// import Modal from '@testing/Modal/Modal';

// <Button type="link" text='modal?' dataToggle='modal' dataTarget='exampleModal1' />

// <ModalBox id="exampleModal1" tabIndex={-1} isModalSm={false}>
//   <ModalHeader>
//     <ModalTitle title='Titulo del modal'>
//       hola
//     </ModalTitle>
//   </ModalHeader>
//   <ModalBody>
//     <p>hola p</p>
//   </ModalBody>
//   <ModalFooter>
//     <Button text='cerrar' dataDismiss='modal'></Button>
//   </ModalFooter>
// </ModalBox>

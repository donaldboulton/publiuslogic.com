import * as React from 'react'
import { useEffect } from 'react'
import FocusLock from 'react-focus-lock'
import ReactDOM from 'react-dom'

import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './modalStyle'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText: string
}

export const Modal: ReactFC<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide()
    }
  }

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [isShown])

  const modal = (
    <>
      <Backdrop onClick={hide} />
      <FocusLock>
        <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={hide}>X</CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

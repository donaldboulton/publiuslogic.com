import * as React from 'react'
import { ConfirmationButtons, Message, YesButton, NoButton, Wrapper } from './confirmationModalStyle'

interface ConfirmationModalProps {
  onConfirm: () => void
  onCancel: () => void
  message: string
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = props => {
  return (
    <React.Fragment>
      <Message>{props.message}</Message>
      <ConfirmationButtons>
        <YesButton onClick={props.onConfirm}>Yes</YesButton>
        <NoButton onClick={props.onCancel}>No</NoButton>
      </ConfirmationButtons>
    </React.Fragment>
  )
}

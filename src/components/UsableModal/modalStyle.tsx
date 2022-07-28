import * as React from 'react'
import * as CSS from 'csstype'

export const Wrapper: CSS.Properties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '700',
  width: 'inherit',
  outline: '0',
}

export const Backdrop: CSS.Properties = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  background: 'rgba(0, 0, 0, 0.3)',
  zIndex: '500',
}

export const StyledModal: CSS.Properties = {
  zIndex: '100',
  background: '#1f2937',
  color: '#fff',
  position: 'relative',
  margin: 'auto',
  borderRadius: '8px',
}

export const Header: CSS.Properties = {
  borderRadius: '8px 8px 0 0',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.3rem',
}

export const HeaderText: CSS.Properties = {
  color: '#fff',
  alignSelf: 'center',
}

export const CloseButton: CSS.Properties = {
  fontSize: '0.8rem',
  border: 'none',
  borderRadius: '3px',
  marginLeft: '0.5rem',
  background: 'none',
  cursor: 'pointer',
}

export const Content: CSS.Properties = {
  padding: '10px',
  maxHeight: '30rem',
  overflowX: 'hidden',
  overflowY: 'auto',
}

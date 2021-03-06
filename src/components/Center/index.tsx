import * as React from 'react'
import styled from 'styled-components'

const CenterStyledH2 = styled.h2`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.5em;
  font-size: 32px;
  font-family: Kaushan Script;
  text-transform: uppercase;
  z-index: 22;
  background-position: 50% 50%;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  -webkit-box-pack: center;
  background: radial-gradient(circle farthest-corner at center center, #a855f7, #9333ea, #be185d) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <CenterStyledH2 {...delegated}>{children}</CenterStyledH2>
    </>
  )
}

export default Center

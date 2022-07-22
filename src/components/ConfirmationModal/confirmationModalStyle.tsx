import styled from 'styled-components'

export const Wrapper = styled.div`
    width 80%;
    @media(min-width: 768px) {
    width: 60%;
    }
    @media(min-width: 1024px) {
    width: 40%;
    }
`

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: flex-center;
`

export const Message = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: center;
`

export const YesButton = styled.button`
  width: 6rem;
  background: #c026d3;
  color: #fff;
`

export const NoButton = styled.button`
  width: 3rem;
  background: #c026d3;
  color: #fff;
  margin-left: 10px;
`

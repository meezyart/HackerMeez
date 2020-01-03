import React from 'react'
import { ContentWrapper,ButtonLink } from '../styles/GlobalStyle'

export const Error404 = ({history}) => {
  const handleRedirect = () =>{
    history.push('/new/0')
  }
  return (
    <ContentWrapper>
      <h1>Page not Found</h1>
      <ButtonLink onClick={handleRedirect}>
        Back to News
      </ButtonLink>
    </ContentWrapper>
  )
}

 /* eslint-disable */

import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import 'normalize.css';

const Main = styled.div`
  background: papayawhip;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  color: palevioletred;
`

const Subtitle = styled.h3`
  color: darkgoldenrod;
`

export default () =>
<Main>
  <Title>Sample Webpage with styled components 💅</Title>
  <Subtitle>Content from Prismic</Subtitle>
  <Link to="/sample-post-1">Sample Post</Link>
</Main>

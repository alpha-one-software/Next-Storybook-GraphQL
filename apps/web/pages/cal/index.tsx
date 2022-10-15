import React, { FC } from 'react'
import { Layout } from '@ui/ui'
import Iframe from '../../components/Iframe'

const Index: FC = () => {
  return (
    <Layout pageTitle="Cal">
      <Iframe title="ui Cal (default version)" urlPath="/pages/cal/" />
    </Layout>
  )
}

export default Index

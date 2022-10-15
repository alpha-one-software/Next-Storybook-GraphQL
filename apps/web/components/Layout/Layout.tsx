import React, { FC } from 'react'
import { Layout as uiLayout, LayoutProps } from '@ui/ui'
import Search from '../Search'

const onMessageType = (e) => {
  //add mutation for send message textbox
}

const onCreateChannel = (name, description, isPrivate) => {
  //add mutation for create Channel here
  console.log('onCreateChannel--', name, description, isPrivate)
}

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <uiLayout
      searchRender={() => <Search />}
      onCreateChannel={onCreateChannel}
      onMessageType={onMessageType}
      {...props}
    >
      {children}
    </uiLayout>
  )
}

export default Layout

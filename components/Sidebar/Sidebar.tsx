import React from 'react'
import Header from './components/Header';
import { Input } from './components/Input';
import { UserList } from './components/UserList';
export const Sidebar = () => {
  return (
    <>
      <Header />
      <Input />
      <UserList/>
    </>
  );
}

import React from "react";
import { Nav, NavLinks } from "@/components/Nav";

//use force-dynamic to force next-js not to cache any of the admin page
//so that we can see the changes instantly meaning we see upto date/most recent data every time the page is accessed
//
export const dynamic = "force-dynamic";
const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Nav>
        <NavLinks href="/admin">Dashboard</NavLinks>
        <NavLinks href="/admin/users">Users</NavLinks>
        <NavLinks href="/admin/products">Products</NavLinks>
        <NavLinks href="/admin/customers">Customers</NavLinks>
        <NavLinks href="/admin/sales">Sales</NavLinks>
      </Nav>
      <div className="container py-6">{children}</div>
    </>
  );
};

export default AdminLayout;

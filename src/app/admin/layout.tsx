import { Nav, NavLinks } from "@/components/Nav";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Nav>
        <NavLinks href="/">Dashboard</NavLinks>
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

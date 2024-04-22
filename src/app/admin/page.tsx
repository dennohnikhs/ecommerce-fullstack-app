import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  body: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  body,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Dashboard Title 1"
        subtitle="Test 1"
        body="Body 1"
      />
      <DashboardCard
        title="Dashboard Title 2"
        subtitle="Test 2"
        body="Body 2"
      />
      <DashboardCard
        title="Dashboard Title 3"
        subtitle="Test 3"
        body="Body 3"
      />
    </div>
  );
};

export default AdminDashboard;

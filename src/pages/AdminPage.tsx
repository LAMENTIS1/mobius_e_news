import React from 'react';
import AdminLogin from '../components/AdminLogin';

const AdminPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <AdminLogin />
      </div>
    </div>
  );
};

export default AdminPage;
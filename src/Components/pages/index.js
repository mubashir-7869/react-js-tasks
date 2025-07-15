import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../pages/form';
import Table from '../pages/table';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function UserPage() {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data.slice(0, 5));
  };

  const handleSubmit = async (form) => {
    if (form.id) {
      await axios.put(`${API_URL}/${form.id}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setEditingUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>User Management</h2>
      <Form onSubmit={handleSubmit} editingUser={editingUser} />
      <Table users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </div>
  );
}

export default UserPage;
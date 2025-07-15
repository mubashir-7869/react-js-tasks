import { useState, useEffect } from "react";

function Form({ onSubmit, editingUser }) {
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', email: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter User Name"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <button className="btn btn-primary">
        {form.id ? 'Update' : 'Add'} User
      </button>
    </form>
  );
}

export default Form;
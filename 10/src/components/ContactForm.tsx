import { useState, useEffect } from 'react';
import { Contact } from '../types/Contact';
//import './form.css';

interface ContactFormProps {
  onSubmit: (contact: Contact) => void;
  selectedContact: Contact | null;
  onCancel: () => void;
}

export default function ContactForm({ onSubmit, selectedContact, onCancel }: ContactFormProps) {
  const [formData, setFormData] = useState<Omit<Contact, 'id'>>({
    name: '',
    email: '',
    phone: '',
    status: 'active'
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact: Contact = {
      ...formData,
      id: selectedContact?.id || Date.now().toString()
    };
    onSubmit(contact);
    if (!selectedContact) {
      setFormData({ name: '', email: '', phone: '', status: 'active' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{selectedContact ? 'Editar Contato' : 'Novo Contato'}</h2>

      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Telefone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group status-group">
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="active">Ativo</option>
          <option value="inactive">Inativo</option>
        </select>
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn save">
          {selectedContact ? 'Atualizar' : 'Salvar'}
        </button>


        {selectedContact && (
          <button type="button" className="btn cancel" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
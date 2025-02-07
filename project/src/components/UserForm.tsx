import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function UserForm() {
  const { state, dispatch } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    if (!formData.phone || !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({
        type: 'SET_USER_DATA',
        payload: {
          id: crypto.randomUUID(),
          ...formData,
        },
      });
      setIsDirty(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsDirty(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-4">
        {Object.entries({
          name: 'Name',
          email: 'Email',
          address: 'Address',
          phone: 'Phone',
        }).map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={key === 'email' ? 'email' : 'text'}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                errors[key] ? 'border-red-500' : ''
              }`}
            />
            {errors[key] && (
              <p className="mt-1 text-sm text-red-600">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Save size={20} className="mr-2" />
        Save
      </button>
    </form>
  );
}
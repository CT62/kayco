'use client';
import { useState } from 'react';

export default function PasswordModal({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      onSuccess();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Enter Password to Access Site
        </h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Access Site
          </button>
        </form>
      </div>
    </div>
  );
}


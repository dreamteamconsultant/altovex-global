'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fix the errors above',
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: data.message || 'Thank you for your message!',
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          type: 'idle',
          message: '',
        });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border bg-[#0B1929]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all backdrop-blur-sm ${
            errors.name ? 'border-red-500' : 'border-[#333333]'
          }`}
          placeholder="Your name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border bg-[#0B1929]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all backdrop-blur-sm ${
            errors.email ? 'border-red-500' : 'border-[#333333]'
          }`}
          placeholder="your@email.com"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border bg-[#0B1929]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all resize-none backdrop-blur-sm ${
            errors.message ? 'border-red-500' : 'border-[#333333]'
          }`}
          placeholder="Tell us about your agricultural needs..."
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-900/50 border border-green-500 text-green-400'
              : status.type === 'error'
              ? 'bg-red-900/50 border border-red-500 text-red-400'
              : 'bg-blue-900/50 border border-blue-500 text-blue-400'
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full px-6 py-3 bg-[#C9A84C] hover:bg-[#E0C080] disabled:bg-[#996633] text-[#0B1929] font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
        aria-busy={status.type === 'loading'}
      >
        {status.type === 'loading' ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            Sending...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane"></i>
            Send Message
          </>
        )}
      </button>

      <p className="text-sm text-[#888888] text-center">
        * Required fields. We respect your privacy and will never share your information.
      </p>
    </form>
  );
}

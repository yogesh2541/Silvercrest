'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/helpers';

const COMPANY_INFO = {
  name: 'SILVERCREST COMMERCE (OPC) PRIVATE LIMITED',
  cin: 'U47912RJ2026OPC113399',
  gstin: '08ABTCS3743F1ZX',
  pan: 'ABTCS3743F',
  director: 'Abdul Rasid',
  address: 'C/O Manak Coworking Space, 2nd Floor, Opp. New Power House, New Power House Road, Jodhpur, Rajasthan - 342001, India',
  email: 'info@silvercrestcommerce.com',
  phone: '+91 89558 35661',
  whatsapp: '+91 89558 35661',
  businessHours: {
    days: 'Monday – Saturday',
    time: '10:00 AM – 6:00 PM IST'
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-20 px-4" style={{backgroundColor: '#F8F5F0'}}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-light mb-4" style={{color: '#B8925A'}}>
            Get in Touch
          </p>
          <h1 className="text-6xl md:text-7xl font-light mb-4" style={{color: '#1F1F1F'}}>
            Contact <span className="font-serif italic" style={{color: '#D6B98C'}}>Silvercrest</span>
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{color: '#6B6B6B'}}>
            Reach out to us for inquiries, support, or business partnerships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-light mb-8" style={{color: '#1F1F1F'}}>
              Company Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} style={{color: '#B8925A'}} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-widest" style={{color: '#B8925A'}}>Address</h4>
                  <p className="text-sm mt-2 leading-relaxed font-light" style={{color: '#6B6B6B'}}>
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} style={{color: '#B8925A'}} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-widest" style={{color: '#B8925A'}}>Phone</h4>
                  <p className="text-sm mt-2 font-light" style={{color: '#6B6B6B'}}>{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} style={{color: '#B8925A'}} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-widest" style={{color: '#B8925A'}}>Email</h4>
                  <p className="text-sm mt-2 font-light" style={{color: '#6B6B6B'}}>{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} style={{color: '#B8925A'}} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-widest" style={{color: '#B8925A'}}>Business Hours</h4>
                  <p className="text-sm mt-2 font-light" style={{color: '#6B6B6B'}}>
                    {COMPANY_INFO.businessHours.days}<br />
                    {COMPANY_INFO.businessHours.time}
                  </p>
                </div>
              </div>

              <div className="pt-6" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
                <div className="space-y-2 text-xs font-light" style={{color: '#6B6B6B'}}>
                  <p><strong style={{color: '#B8925A'}}>CIN:</strong> {COMPANY_INFO.cin}</p>
                  <p><strong style={{color: '#B8925A'}}>GSTIN:</strong> {COMPANY_INFO.gstin}</p>
                  <p><strong style={{color: '#B8925A'}}>PAN:</strong> {COMPANY_INFO.pan}</p>
                  <p><strong style={{color: '#B8925A'}}>Director:</strong> {COMPANY_INFO.director}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light" style={{color: '#1F1F1F'}}>Send us a Message</h3>
            
            <div>
              <label className="block text-xs uppercase tracking-widest font-light mb-3" style={{color: '#B8925A'}}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 focus:outline-none transition-all"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7DFD4',
                  color: '#1F1F1F'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#B8925A';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(198,161,91,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-light mb-3" style={{color: '#B8925A'}}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 focus:outline-none transition-all"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7DFD4',
                  color: '#1F1F1F'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#B8925A';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(198,161,91,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-light mb-3" style={{color: '#B8925A'}}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91-XXXX-XXXX-XXX"
                className="w-full px-4 py-3 focus:outline-none transition-all"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7DFD4',
                  color: '#1F1F1F'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#B8925A';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(198,161,91,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-light mb-3" style={{color: '#B8925A'}}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 focus:outline-none transition-all resize-none"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7DFD4',
                  color: '#1F1F1F'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#B8925A';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(198,161,91,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 font-semibold uppercase text-xs tracking-widest transition-all duration-300"
              style={{
                background: '#B8925A',
                color: '#0F0F0F'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D6B98C';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(198,161,91,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#B8925A';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

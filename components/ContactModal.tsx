import React, { useState, FormEvent } from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';
import { CloseIcon, TelegramIcon } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const t = translations[language];
  const tForm = t.contact.form;
  const tModal = t.contactModal;

  type Status = 'idle' | 'sending' | 'success' | 'error';
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: tForm.service,
    request: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  // IMPORTANT: Replace with your own Access Key from https://web3forms.com
  // The destination email (nguyenhop72131@gmail.com) is configured in your Web3Forms account dashboard.
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        console.error("Web3Forms Access Key is not set. Please replace 'YOUR_ACCESS_KEY_HERE' in ContactModal.tsx with your actual key.");
        setStatus('error');
        return;
    }
    setStatus('sending');

    const data = {
        ...formData,
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New contact from ${formData.name} via Victor Tour Website`,
        from_name: "Victor Tour Website",
        replyto: formData.contact,
    };

    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        if (result.success) {
            setStatus('success');
            setFormData({ name: '', contact: '', service: tForm.service, request: '' });
        } else {
            console.error('Form submission error:', result);
            setStatus('error');
        }
    } catch (error) {
        console.error('Network or other error:', error);
        setStatus('error');
    }
  };


  const inputStyles = "w-full px-4 py-3 bg-white/30 dark:bg-slate-800/20 border border-white/20 placeholder-gray-500 dark:placeholder-gray-300 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition";

  const renderContent = () => {
    switch (status) {
      case 'success':
        return (
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4">{tModal.successMessage}</h3>
            <button onClick={onClose} className="mt-4 bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-2 px-6 border border-transparent rounded-full transition-colors duration-300">
                Close
            </button>
          </div>
        );
      case 'error':
        return (
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4 text-red-500">{tModal.errorMessage}</h3>
            <button onClick={() => setStatus('idle')} className="mt-4 bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-2 px-6 border border-transparent rounded-full transition-colors duration-300">
                Try Again
            </button>
          </div>
        );
      default: // 'idle' or 'sending'
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="modal-name" className="sr-only">{tForm.name}</label>
              <input type="text" name="name" id="modal-name" placeholder={tForm.name} className={inputStyles} value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="modal-contact-info" className="sr-only">{tForm.contact}</label>
              <input type="text" name="contact" id="modal-contact-info" placeholder={tForm.contact} className={inputStyles} value={formData.contact} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="modal-service" className="sr-only">{tForm.service}</label>
              <select id="modal-service" name="service" className={`${inputStyles} appearance-none`} value={formData.service} onChange={handleInputChange}>
                <option className="bg-gray-100/50 dark:bg-slate-700/50 text-gray-500" value={tForm.service} disabled>{tForm.service}</option>
                <option className="bg-gray-100/50 dark:bg-slate-700/50 text-gray-800 dark:text-gray-200" value={tForm.serviceOptions.transfer}>{tForm.serviceOptions.transfer}</option>
                <option className="bg-gray-100/50 dark:bg-slate-700/50 text-gray-800 dark:text-gray-200" value={tForm.serviceOptions.tour}>{tForm.serviceOptions.tour}</option>
                <option className="bg-gray-100/50 dark:bg-slate-700/50 text-gray-800 dark:text-gray-200" value={tForm.serviceOptions.other}>{tForm.serviceOptions.other}</option>
              </select>
            </div>
            <div>
              <label htmlFor="modal-request" className="sr-only">{tForm.request}</label>
              <textarea name="request" id="modal-request" rows={4} placeholder={tForm.request} className={inputStyles} value={formData.request} onChange={handleInputChange}></textarea>
            </div>
            <div>
              <button type="submit" disabled={status === 'sending'} className="w-full bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? tModal.sendingMessage : tForm.button}
              </button>
              
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-white/30 dark:border-slate-700/50"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">{tForm.orWriteTo}</span>
                <div className="flex-grow border-t border-white/30 dark:border-slate-700/50"></div>
              </div>
              
              <a
                  href="https://t.me/Victor_tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300"
              >
                  <TelegramIcon className="w-6 h-6"/>
                  <span>{tForm.telegram}</span>
              </a>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                Note: A valid Access Key from web3forms.com is required for this form to work.
              </p>
            </div>
          </form>
        );
    }
  };


  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white/50 dark:bg-slate-900/30 text-gray-800 dark:text-white border border-white/30 dark:border-slate-700/50 backdrop-blur-2xl rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto transition-colors duration-300" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/50 dark:bg-slate-900/30 backdrop-blur-lg p-6 border-b border-white/30 dark:border-slate-700/50 flex justify-between items-center z-10 transition-colors duration-300">
            <h2 className="text-2xl font-bold">{tModal.title}</h2>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <CloseIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="p-8">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
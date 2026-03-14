'use client';
import { motion } from 'framer-motion';
import { CreditCard, Printer, Phone, Banknote } from 'lucide-react';

const icons: any = { /* map services to icons */ };

export default function ServiceCard({ service, lang }: { service: any; lang: 'bn' | 'en' }) {
  const t = useLanguage().t;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="glass group rounded-3xl p-8 h-full flex flex-col"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
        {icons[service.key]}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{service[lang]}</h3>
      <p className="text-slate-600 dark:text-slate-300 flex-1">{service.desc[lang]}</p>
      <button 
        onClick={() => window.open(`https://wa.me/916295051584?text=${encodeURIComponent(`আমি ${service[lang]} সার্ভিস নিতে চাই`)}`)}
        className="mt-6 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-medium py-4 rounded-2xl hover:shadow-xl transition">
        {t('getService')}
      </button>
    </motion.div>
  );
}

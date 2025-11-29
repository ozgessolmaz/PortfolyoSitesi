import { useState } from 'react';
import Section from './Section';
import { submitContact } from '../api';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await submitContact(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <Section id="contact" eyebrow="İletişim" title="Birlikte çalışalım">
      <p className="text-sm text-slate-300 md:text-base">
        Ürününüze yapay zeka kabiliyetleri eklemek, kurumsal uygulamanızı modernize etmek veya tasarımdan canlıya
        bütün bir süreci üstlenmek için mesaj bırakmanız yeterli.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 text-slate-100 shadow-[0_20px_45px_-25px_rgba(14,165,233,0.7)]">
          <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-semibold text-white">Yeni projelere açığım</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Ürününüze yeni özellikler kazandırmak, bilgisayarlı görü ve yapay zeka çözümleri tasarlamak ya da mevcut
              kod tabanınızı güçlendirmek için birlikte yol haritası çıkarabiliriz.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✉️
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">E-posta</dt>
                  <dd className="text-base font-medium text-white">
                    <a className="hover:text-sky-200" href="mailto:solmazozge02@gmail.com">
                      solmazozge02@gmail.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  📍
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Lokasyon</dt>
                  <dd className="text-base font-medium text-white">
                    İstanbul, Türkiye <span className="text-slate-400">(Remote uygun)</span>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.08] p-8 shadow-[0_18px_50px_-30px_rgba(99,102,241,0.8)] backdrop-blur"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-200">
              İsim
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Adınız"
              />
            </label>
            <label className="text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-6 block text-sm font-medium text-slate-200">
            Mesaj
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={2000}
              rows={6}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
              placeholder="Projenizi anlatabilirsiniz…"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:cursor-not-allowed disabled:bg-slate-500"
          >
            {status === 'sending' ? 'Gönderiliyor…' : 'Mesajı gönder'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-emerald-400">
              Teşekkürler! Kısa süre içinde dönüş yapacağım.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-rose-400">
              Bir sorun oluştu: {errorMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

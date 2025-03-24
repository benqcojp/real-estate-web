'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log(formData);
    // 重置表单
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('お問い合わせありがとうございます。担当者より連絡いたします。');
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">お問い合わせ</h2>
          <p className="text-primary-700 max-w-3xl mx-auto">
            ご質問やご予約など、お気軽にお問い合わせください。心を込めて対応いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-primary-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-primary-800 mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-primary-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-primary-800 mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-primary-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-primary-800 mb-2">電話番号</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-primary-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary-800 mb-2">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-primary-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-accent-red/90 text-white py-3 rounded-sm transition-colors"
              >
                送信する
              </button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm border border-primary-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium text-primary-900 mb-4">お気軽にご連絡ください</h3>
              <p className="text-primary-700 mb-6">
                ご不明な点やご要望がございましたら、フォームからお問い合わせいただくか、以下の連絡先までご連絡ください。
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-accent-red mr-3">📍</span>
                  <div>
                    <h4 className="font-medium text-primary-800">住所</h4>
                    <p className="text-primary-700">
                      〒100-0001<br />
                      東京都千代田区1-1-1<br />
                      宿悠ビル
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-accent-red mr-3">📞</span>
                  <div>
                    <h4 className="font-medium text-primary-800">お電話</h4>
                    <p className="text-primary-700">03-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-accent-red mr-3">✉️</span>
                  <div>
                    <h4 className="font-medium text-primary-800">メール</h4>
                    <p className="text-primary-700">info@yadoyume.jp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-48 w-full mt-4 rounded-sm overflow-hidden">
              <Image
                src="/images/japanese-garden.jpg"
                alt="宿悠の庭園"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
'use client';

import Image from 'next/image';

const services = [
  {
    title: '伝統的な和食体験',
    description: '地元の旬の食材を使用した本格的な懐石料理や郷土料理をお楽しみいただけます。',
    icon: '🍱'
  },
  {
    title: '温泉と入浴施設',
    description: '日本各地の名湯を楽しめる温泉や、リラックスできる入浴施設を完備しています。',
    icon: '♨️'
  },
  {
    title: '文化体験活動',
    description: '茶道、書道、着付けなど、日本の伝統文化を体験できるアクティビティをご用意。',
    icon: '🎎'
  },
  {
    title: '地域観光案内',
    description: '地元ならではの名所や隠れた観光スポットへのガイドサービスを提供しています。',
    icon: '🏯'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 背景デザイン要素 */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 opacity-10">
        <Image 
          src="/images/japanese-pattern.svg" 
          alt="和柄" 
          fill 
          className="object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">おもてなしサービス</h2>
          <p className="text-primary-700 max-w-3xl mx-auto">
            伝統と現代が融合した特別なサービスで、心に残る日本での滞在体験をお約束します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/80 p-6 border border-primary-200 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-primary-900 mb-2">{service.title}</h3>
              <p className="text-primary-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 
'use client';

import Image from 'next/image';

const staff = [
  {
    id: 1,
    name: '山田 恵子',
    position: '旅館女将',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    description: '20年の経験を持つ旅館の女将。心温まるおもてなしで皆様をお迎えします。'
  },
  {
    id: 2,
    name: '佐藤 剛',
    position: '総料理長',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
    description: '伝統的な日本料理から創作料理まで、季節の旬を大切にした美食を提供します。'
  },
  {
    id: 3,
    name: '鈴木 美香',
    position: '文化体験担当',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    description: '茶道、和紙作りなど日本の伝統文化を紹介するエキスパートです。'
  },
  {
    id: 4,
    name: '田中 誠',
    position: 'ツアーガイド',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    description: '地域の隠れた名所や魅力的なスポットをご案内いたします。'
  }
];

const FeaturedAgents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">スタッフ紹介</h2>
          <p className="text-primary-700 max-w-3xl mx-auto">
            お客様の滞在を特別なものにするために、熟練のスタッフがおもてなしの心でお迎えします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staff.map((person) => (
            <div 
              key={person.id} 
              className="bg-primary-50 rounded-sm overflow-hidden shadow-sm border border-primary-200 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image 
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-primary-900">{person.name}</h3>
                <p className="text-accent-red font-medium mb-2">{person.position}</p>
                <p className="text-primary-700">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents; 
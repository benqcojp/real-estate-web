'use client';

import Image from 'next/image';
import Link from 'next/link';

// 旅馆住宿数据
const guesthouses = [
  {
    id: 1,
    title: '京都 竹林の宿',
    address: '京都府京都市嵐山',
    price: 28000,
    roomType: '和室',
    capacity: 2,
    area: 12, // 榻榻米尺寸
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    isFeatured: true,
    amenities: ['温泉', '朝食付き', '庭園']
  },
  {
    id: 2,
    title: '富士山を望む宿',
    address: '山梨県富士河口湖町',
    price: 32000,
    roomType: '和洋室',
    capacity: 4,
    area: 18,
    image: 'https://images.unsplash.com/photo-1578469645735-de64a72d7efc',
    isFeatured: true,
    amenities: ['露天風呂', '懐石料理', '富士山ビュー']
  },
  {
    id: 3,
    title: '金沢 古都の宿',
    address: '石川県金沢市東山',
    price: 25000,
    roomType: '和室',
    capacity: 3,
    area: 10,
    image: 'https://images.unsplash.com/photo-1591529863242-1a504f0016bd',
    isFeatured: true,
    amenities: ['茶室', '加賀料理', '町家造り']
  },
  {
    id: 4,
    title: '瀬戸内 海辺の宿',
    address: '広島県尾道市',
    price: 22000,
    roomType: '和室',
    capacity: 2,
    area: 8,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
    isFeatured: true,
    amenities: ['海景', '地元魚介料理', '舟遊び']
  },
];

const PropertyCard = ({ property }: { property: typeof guesthouses[0] }) => {
  return (
    <div className="bg-white/90 rounded-sm overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 border border-primary-200">
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image 
            src={property.image} 
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <span className="absolute top-4 left-4 bg-accent-red text-white px-3 py-1 text-sm font-medium" style={{writingMode: 'vertical-rl'}}>
          おすすめ
        </span>
      </div>
      
      <div className="p-5">
        <p className="flex items-center text-primary-700 text-sm mb-2">
          <span className="mr-1">📍</span>
          {property.address}
        </p>
        <h3 className="text-xl font-medium mb-2 text-primary-900">{property.title}</h3>
        <p className="text-accent-red text-xl font-medium mb-4">
          ¥{property.price.toLocaleString()}<span className="text-sm text-primary-600">/泊</span>
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.map((amenity, index) => (
            <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-sm">
              {amenity}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between border-t border-primary-100 pt-4">
          <div className="flex items-center text-primary-700">
            <span className="h-5 w-5 mr-1">🏠</span>
            <span>{property.roomType}</span>
          </div>
          <div className="flex items-center text-primary-700">
            <span className="h-5 w-5 mr-1">👥</span>
            <span>最大{property.capacity}名</span>
          </div>
          <div className="flex items-center text-primary-700">
            <span className="h-5 w-5 mr-1">📏</span>
            <span>{property.area}畳</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PropertyCard };

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-900 mb-4">おすすめの宿</h2>
          <p className="text-primary-700 max-w-3xl mx-auto">
            日本各地の厳選された宿泊施設で、心安らぐひとときをお過ごしください。伝統的なおもてなしと現代の快適さが調和した空間をご用意しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guesthouses.map((property) => (
            <Link href={`/guesthouses/${property.id}`} key={property.id}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/locations" 
            className="btn btn-outline border-accent-red text-accent-red hover:bg-accent-red hover:text-white"
          >
            すべての宿を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 
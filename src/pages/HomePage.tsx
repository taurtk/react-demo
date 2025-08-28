import ProductCard from '@/shared/components/molecules/ProductCard';
import { MOCK_PRODUCTS } from '@/shared/constants/mockData';

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[calc(100vh-80px)] bg-cover bg-center" style={{ backgroundImage: "url('/images/main-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-6xl">Performance-Ready</h1>
          <p className="mt-4 text-lg md:text-2xl">Apparel for Work & Beyond</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Our Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { StarIcon } from '@heroicons/react/20/solid';
import type { Product } from '@/shared/types/commonTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <div className="mt-1 flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={classNameMerge(
                product.rating > i ? 'text-yellow-400' : 'text-gray-300',
                'h-5 w-5 flex-shrink-0'
              )}
            />
          ))}
        </div>
        <p className="mt-1 text-sm font-medium text-gray-900">
          ₩{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
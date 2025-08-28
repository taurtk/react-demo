import { forwardRef } from 'react';
import type { BasicInputProps } from '@/shared/types/inputTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNameMerge(
          'flex h-10 w-full rounded-none border-b border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:border-primary-yellow focus:outline-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

BasicInput.displayName = 'BasicInput';

export default BasicInput;
import { forwardRef } from 'react';
import BasicInput from '@/shared/components/atoms/BasicInput';
import type { BasicInputProps } from '@/shared/types/inputTypes';

const FormField = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <BasicInput ref={ref} {...props} />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;
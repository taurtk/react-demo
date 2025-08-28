import { InputHTMLAttributes } from 'react';

export interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
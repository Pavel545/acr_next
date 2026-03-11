import 'react';

declare module 'react' {
  interface VideoHTMLAttributes<T> extends HTMLAttributes<T> {
    pip?: string; // добавляем кастомный атрибут
  }
}
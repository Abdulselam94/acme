import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-12 items-center rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] px-5 text-sm font-semibold text-white shadow-sm hover:shadow-md transform transition duration-200 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed focus-ring',
        className,
      )}
    >
      {children}
    </button>
  );
}

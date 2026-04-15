import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-12 w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] px-5 text-sm font-semibold text-white shadow-sm transition transform duration-200 hover:shadow-md hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus:ring-2 focus:ring-indigo-300',
        className,
      )}
    >
      {children}
    </button>
  );
}

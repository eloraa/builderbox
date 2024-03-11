import { cn } from '@/lib/utils';

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn('h-5 w-5', className)} data-geist-spinner="">
      <div className="w-full h-full relative top-1/2 left-1/2">
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-1.2s] [transform:rotate(.0001deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-1.1s] [transform:rotate(30deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-1s] [transform:rotate(60deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.9s] [transform:rotate(90deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.8s] [transform:rotate(120deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.7s] [transform:rotate(150deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.6s] [transform:rotate(180deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.5s] [transform:rotate(210deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.4s] [transform:rotate(240deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.3s] [transform:rotate(270deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.2s] [transform:rotate(300deg)_translate(146%)]"></div>
        <div className="bg-white h-[8%] absolute -left-[10%] top-[-3.9%] w-[24%] rounded animate-spinner-spinner [animation-delay:-.1s] [transform:rotate(330deg)_translate(146%)]"></div>
      </div>
    </div>
  );
};

import Link from 'next/link';
import { Logo } from '../svgs/logo';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 justify-between py-6 md:px-10 px-5 sticky top-0 z-30">
      <Link href="/dashboard">
        <h1 className="w-8 h-8 animate-glow-cube hover:paused transition-transform hover:scale-110">
          <Logo></Logo>
        </h1>
      </Link>
      <Link href="/dashboard/profile" className="mr-auto">
        <div className="flex items-center gap-2">
          <figure className="w-6 h-6 rounded-full overflow-hidden">
            <Image src="https://utfs.io/f/896f0310-982f-4864-98b5-672135d0315c-n92lk7.png" alt="Profile" width="40" height="40"></Image>
          </figure>
          <h1 className="font-medium">elora</h1>
          <Badge className="text-xs max-sm:hidden">Starter</Badge>
        </div>
      </Link>
      <Button size="sm">Create new Project</Button>
    </header>
  );
};

import { Neon } from '../svgs/neon';
import { Badge } from '../ui/badge';

export const Overlay = () => {
  return (
    <a
      href="https://github.com/eloraa"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-0 left-0 flex items-center gap-1 z-[9999] pointer-events-auto rounded py-1 px-3 bg-white/5 hover:bg-lime-300/5 transition-colors backdrop-blur-md text-xs uppercase font-medium text-lime-300"
    >
      <Neon className="w-2.5 h-2.5"></Neon>
      <span className="mt-[1.5px]">Neon</span>
    </a>
  );
};

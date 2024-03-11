import Image from 'next/image';
import Cube from '@/assets/images/cube3.png';
import { GetStarted } from '@/components/shared/get-started';

export default function Home() {
  return (
    <main className="fixed inset-0 inset-x-0 inset-y-0 flex flex-col items-center justify-center container">
      <figure className="pointer-events-none select-none [filter:hue-rotate(0deg)_saturate(1)] animate-glow-cube">
        <Image src={Cube} alt="cube" className="w-20" />
      </figure>
      <h1 className="text-3xl max-w-xs mx-auto leading-[1.2] tracking-tight text-center">
        Power your web app with the <span className="font-semibold">Builder</span>
      </h1>

      <div className="relative mt-16 flex place-items-center">
        <GetStarted />
      </div>
    </main>
  );
}

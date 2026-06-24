import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  image:    string
  headline: string
  body:     string
}

export function Hero({ image, headline, body }: HeroProps) {
  return (
    <section className="relative h-[520px] md:h-[600px] xl:h-[715px] mx-4 md:mx-8 xl:mx-[100px] mt-[82px] md:mt-[96px] xl:mt-[153px] rounded-[15px] overflow-hidden">
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1530px"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/87 to-transparent" />

      {/* Content — bottom left */}
      <div className="absolute bottom-8 md:bottom-10 xl:bottom-[50px] left-5 md:left-10 xl:left-[59px] flex flex-col gap-5 md:gap-6 xl:gap-[27px] w-full max-w-[90%] md:max-w-[600px] xl:max-w-[703px] pr-5">
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-[19px] text-white">
          <h1 className="font-bold text-[32px] md:text-[44px] xl:text-[60px] leading-[1.2] md:leading-[1.25] xl:leading-[1.1] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] capitalize text-balance">
            {headline}
          </h1>
          <p className="font-normal text-[16px] md:text-[20px] xl:text-[25px] leading-[1.6] md:leading-[1.65] xl:leading-[1.68]">
            {body}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button as="a" href="/approach" intent="primary" size="sm">
            Get to know us
          </Button>
          <Button as="a" href="/contact" intent="outlinedLight" size="sm">
            Speak with us →
          </Button>
        </div>
      </div>
    </section>
  )
}

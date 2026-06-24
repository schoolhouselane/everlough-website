import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  image:    string
  headline: string
  body:     string
}

export function Hero({ image, headline, body }: HeroProps) {
  return (
    <section className="relative h-[715px] mx-[100px] mt-[153px] rounded-[15px] overflow-hidden">
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 1920px) 100vw"
      />

      {/* Gradient overlay — bottom to transparent */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/87 via-black/20 to-transparent" />

      {/* Content — bottom left */}
      <div className="absolute bottom-[50px] left-[59px] flex flex-col gap-[27px] w-[703px]">
        <div className="flex flex-col gap-[19px] text-white">
          <h1 className="font-bold text-[60px] leading-[1.35] tracking-[-1.716px] capitalize text-balance">
            {headline}
          </h1>
          <p className="font-normal text-[25px] leading-[1.68]">
            {body}
          </p>
        </div>

        <div className="flex gap-3">
          <Button as="a" href="/approach" intent="primary">
            Get to know us
          </Button>
          <Button as="a" href="/contact" intent="outlinedLight">
            Speak with us →
          </Button>
        </div>
      </div>
    </section>
  )
}

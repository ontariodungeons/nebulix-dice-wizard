/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9ZmYcdjWHvy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CarouselItem, Carousel } from "@/components/ui/carousel"

export default function Component() {
  return (
    <section className="w-full pt-6 md:pt-12 xl:pt-24">
      <div className="container px-6 space-y-6 xl:space-y-10">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">
              Beautifully designed components
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Accessible. Customizable. Open Source.
            </p>
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <Carousel>
            <CarouselItem>
              <img
                alt="Hero"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                height="1000"
                            src="./src/assets/wizard.png"

                width="2000"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Hero"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                height="1000"
                            src="./src/assets/wizard.png"

                width="2000"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Hero"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover"
                height="1000"
                            src="./src/assets/wizard.png"

                width="2000"
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  )
}


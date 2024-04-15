
import { Button } from "@/components/ui/button"

export default function WizardHero() {
  return (
    <section
  className="relative flex h-[50vh] items-center justify-center bg-cover bg-center text-center"
  style={{ backgroundImage: "url(src/assets/wizard3.png)", width: "100vw" }}
>
  <div className="dark:bg-charcoal absolute inset-0 bg-black opacity-50 dark:opacity-75" />
  <div className="z-10">
    <h1 className="dark:text-lightgray mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      Embark on the Experimental
    </h1>
    <p className="dark:text-lightgray mb-6 text-sm text-gray-800 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      The Dice Wizard is always looking for new adventures to join. Here are
      some of the upcoming adventures, and some of the adventures that are
      waiting for you to join them.
    </p>
    <Button className="bg-peach dark:bg-turquoise rounded px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      Start Your Adventure
    </Button>
  </div>
</section>
  )
}


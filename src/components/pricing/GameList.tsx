/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vzoMXUKxp58
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GameList() {
  return (
    <div className="grid gap-4">
      <header className="w-full py-4 md:py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2 text-lg font-bold" href="#">
            <FlagIcon className="h-6 w-6" />
            D&D Adventures
          </Link>
          <nav className="hidden space-x-4 text-sm font-medium md:flex">
            <Link className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline" href="#">
              Home
            </Link>
            <Link className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline" href="#">
              Live Sessions
            </Link>
            <Link className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline" href="#">
              Online Sessions
            </Link>
            <Link className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center md:hidden">
            <Button size="sm" variant="outline">
              Buy Tickets
            </Button>
          </div>
        </div>
      </header>
      <section className="w-full py-12">
        <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 md:space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Adventure Awaits: D&D Sessions
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Embark on epic quests, battle fearsome monsters, and unravel ancient mysteries. Join us for thrilling
              Dungeons & Dragons sessions.
            </p>
          </div>
          <div className="grid w-full gap-4 md:gap-2">
            <img
              alt="Hero"
              className="mx-auto rounded-lg object-cover aspect-[3/1] overflow-hidden"
              height="400"
              src="/placeholder.svg"
              width="1200"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Live Sessions</h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Immerse yourself in the world of D&D with our live sessions. Gather with fellow adventurers and
                experience the excitement of in-person quests.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">The Cursed Crypt</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">May 15, 2024 | 7:00 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">The Adventurer's Tavern, 123 Main Street</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Uncover the secrets of the ancient crypt and lift the curse that plagues the realm. Are you brave
                  enough to face the undead?
                </p>
              </div>
              <Button size="sm">Buy Now</Button>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">The Forbidden Forest</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 5, 2024 | 6:30 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">The Adventurer's Tavern, 123 Main Street</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter the enchanted forest, encounter mythical creatures, and retrieve the lost artifact. Do you have
                  the wits to survive?
                </p>
              </div>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Online Sessions</h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Embark on virtual adventures with our online sessions. From the comfort of your home, join epic quests,
                interact with other players, and let your imagination run wild.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">The Crystal Caverns</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">May 20, 2024 | 8:00 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Delve into the shimmering Crystal Caverns, uncover hidden treasures, and outwit the guardians. Will
                  you emerge victorious?
                </p>
              </div>
              <Button size="sm">Buy Now</Button>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">The Enchanted Isles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 10, 2024 | 7:30 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embark on a journey to the Enchanted Isles, where magic thrives and mythical creatures roam. Are you
                  ready for the adventure of a lifetime?
                </p>
              </div>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions about our sessions or need assistance? Reach out to our team. Enter your details and
                message below, and we'll get back to you.
              </p>
            </div>
            <div className="grid gap-4 md:gap-2">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
                </div>
                <Button size="sm">Submit</Button>
              </div>
              <div className="flex flex-col gap-4 md:gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Connect with Us</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Follow us on social media for updates, behind-the-scenes peeks, and more.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FacebookIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  <TwitterIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  <InstagramIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PBjTsHk6oLH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC] dark:bg-gray-800">
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Online Adventures"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Online Adventures (Escape from Reality)</h2>
              <p className="text-sm">GAMES</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Model Painting Workshop"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Model Painting Workshop</h2>
              <p className="text-sm">WORKSHOP</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Beginner Games"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Beginner Games</h2>
              <p className="text-sm">GAMES</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Advanced Games"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Advanced Games</h2>
              <p className="text-sm">GAMES</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Dice Making Workshop"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Dice Making Workshop</h2>
              <p className="text-sm">WORKSHOP</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
          <Card className="bg-[#FFDAB9] text-[#000000] dark:bg-gray-800 dark:text-gray-200 transform hover:scale-105 transition-transform duration-200 relative overflow-hidden rounded-md border-2 border-[#F5F5DC]">
            <CardContent className="text-center">
              <img
                alt="Role Playing Games"
                className="rounded-t-md w-full object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h2 className="text-xl font-bold mt-4">Role Playing Games</h2>
              <p className="text-sm">GAMES</p>
            </CardContent>
            <Link
              className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center text-[#FFFFFF] text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-200"
              href="#"
            >
              Join Now
            </Link>
          </Card>
        </div>
      </section>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, Palette, ShoppingBag, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AuthentifyLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
      <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-lg bg-white/30">
        <Link className="flex items-center justify-center" href="#">
          <Palette className="h-6 w-6 mr-2 text-white" />
          <span className="font-bold text-white">Authentify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#">
            Artists
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#">
            Subscribe
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Authentic African Art, Verified on the Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-gray-200">
                  Authentify: Where every brushstroke is captured, every artist is celebrated, and every piece tells a story. Discover and collect genuine African art, backed by blockchain technology.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Explore Marketplace</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-purple-600">
              Featured Artworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={`https://picsum.photos/seed/${i}/400/300`}
                      alt={`African artwork ${i}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Artwork Title #{i}</h3>
                      <p className="text-sm text-gray-600 mb-2">By Artist Name</p>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-600 font-bold">2.5 ICP</span>
                        <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">Explore Full Marketplace</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Authentify?
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Camera className="h-5 w-5" />
                    <span>Capture and verify the creation process</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Seamless marketplace for buying and selling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Powered by ICP blockchain for security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Community pool for legal protection</span>
                  </li>
                </ul>
                <Button className="bg-white text-pink-600 hover:bg-gray-100">Join Authentify Now</Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="African artist creating artwork"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                  <p className="text-purple-600 font-semibold">1000+ Artworks</p>
                  <p className="text-sm text-gray-600">Authenticated & Sold</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscription Plans</h2>
                <p className="text-xl">Choose the plan that fits your artistic journey:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Basic Creator</span>
                    <span className="font-bold">$9.99/month</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Pro Artist</span>
                    <span className="font-bold">$19.99/month</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Gallery Owner</span>
                    <span className="font-bold">$49.99/month</span>
                  </div>
                </div>
                <Button className="bg-white text-purple-700 hover:bg-gray-100">View Full Details</Button>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Community Protection</h2>
                <p className="text-xl">Our unique legal insurance pool:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>5% of all sales contribute to the pool</li>
                  <li>Protects artists and buyers from legal disputes</li>
                  <li>Managed by community-elected board</li>
                  <li>Transparent fund management on the blockchain</li>
                </ul>
                <Button className="bg-white text-purple-700 hover:bg-gray-100">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-600">
                  Join Our Creative Community
                </h2>
                <p className="mx-auto max-w-[600px] text-xl text-gray-600">
                  Be the first to know about new African artworks, artist spotlights, and exclusive content.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input placeholder="Enter your email" type="email" className="bg-white text-purple-700 placeholder:text-purple-400" />
                  <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">Subscribe</Button>
                </form>
                <p className="text-sm text-gray-600">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300 bg-white text-gray-600">
        <p className="text-xs">
          © 2023 Authentify. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
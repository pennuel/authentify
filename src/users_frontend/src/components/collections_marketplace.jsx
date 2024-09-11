import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Search, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from './header'

// Mock data for collections
const collections = [
  {
    id: 1,
    name: "Contemporary African Portraits",
    curator: "Amina Zulu",
    artworkCount: 15,
    coverImage: "https://picsum.photos/seed/collection1/800/400",
    artworks: [
      { id: 101, title: "Vibrant Soul", artist: "Kwame Osei", image: "https://picsum.photos/seed/art101/200/200" },
      { id: 102, title: "Urban Beats", artist: "Zainab Mensah", image: "https://picsum.photos/seed/art102/200/200" },
      { id: 103, title: "Ancestral Whispers", artist: "Ibrahim Toure", image: "https://picsum.photos/seed/art103/200/200" },
    ]
  },
  {
    id: 2,
    name: "Abstract Saharan Landscapes",
    curator: "Jelani Afolayan",
    artworkCount: 12,
    coverImage: "https://picsum.photos/seed/collection2/800/400",
    artworks: [
      { id: 201, title: "Desert Mirage", artist: "Chioma Eze", image: "https://picsum.photos/seed/art201/200/200" },
      { id: 202, title: "Oasis Dreams", artist: "Youssef El Fassi", image: "https://picsum.photos/seed/art202/200/200" },
      { id: 203, title: "Saharan Nights", artist: "Amina Zulu", image: "https://picsum.photos/seed/art203/200/200" },
    ]
  },
  {
    id: 3,
    name: "Tribal Fusion",
    curator: "Abena Poku",
    artworkCount: 18,
    coverImage: "https://picsum.photos/seed/collection3/800/400",
    artworks: [
      { id: 301, title: "Masquerade", artist: "Kwame Osei", image: "https://picsum.photos/seed/art301/200/200" },
      { id: 302, title: "Ancestral Rhythms", artist: "Zainab Mensah", image: "https://picsum.photos/seed/art302/200/200" },
      { id: 303, title: "Modern Tribe", artist: "Ibrahim Toure", image: "https://picsum.photos/seed/art303/200/200" },
    ]
  },
]

export default function CollectionsMarketplace() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.curator.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
        <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Explore Collections</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search collections or curators"
              className="pl-10 bg-white/20 text-white placeholder-gray-300 border-white/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{collection.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-4">Curated by {collection.curator}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {collection.artworks.map((artwork) => (
                    <Image
                      key={artwork.id}
                      src={artwork.image}
                      alt={artwork.title}
                      width={200}
                      height={200}
                      className="w-full h-20 object-cover rounded-md"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{collection.artworkCount} artworks</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  View Collection <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Authentify</h3>
              <p className="text-sm">Empowering African Artists through Blockchain</p>
            </div>
            <nav className="flex gap-4">
              <Link href="#" className="hover:underline">About</Link>
              <Link href="#" className="hover:underline">FAQ</Link>
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2023 Authentify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Search, Plus, Edit2, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from './header'
import Footer from './footer'

// Mock data for artist's artworks
const artworks = [
  { id: 1, title: "Vibrant Savanna", status: "listed", price: 2.5, sales: 3, revenue: 7.5, image: "https://picsum.photos/seed/1/400/300" },
  { id: 2, title: "Urban Beats", status: "draft", price: 1.8, sales: 0, revenue: 0, image: "https://picsum.photos/seed/2/400/300" },
  { id: 3, title: "Ancestral Whispers", status: "listed", price: 3.2, sales: 1, revenue: 3.2, image: "https://picsum.photos/seed/3/400/300" },
  { id: 4, title: "Sahel Dreams", status: "sold", price: 2.1, sales: 5, revenue: 10.5, image: "https://picsum.photos/seed/4/400/300" },
  { id: 5, title: "Tribal Fusion", status: "listed", price: 2.7, sales: 2, revenue: 5.4, image: "https://picsum.photos/seed/5/400/300" },
  { id: 6, title: "Serengeti Sunset", status: "draft", price: 3.5, sales: 0, revenue: 0, image: "https://picsum.photos/seed/6/400/300" },
]

export default function MyCollection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('date-new-old')
  const [activeTab, setActiveTab] = useState('all')

  const filteredArtworks = artworks
    .filter(artwork => 
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === 'all' || artwork.status === activeTab)
    )
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price
      if (sortBy === 'price-high-low') return b.price - a.price
      if (sortBy === 'sales') return b.sales - a.sales
      return 0 // Default to no sorting (assumed to be date-new-old)
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">My Collection</h1>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            <Plus className="mr-2 h-4 w-4" /> Create New Artwork
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search your artworks"
                  className="pl-10 bg-white/20 text-white placeholder-gray-300 border-white/30"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Select onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-[180px] bg-white/20 text-white border-white/30">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-new-old">Date: Newest First</SelectItem>
                <SelectItem value="date-old-new">Date: Oldest First</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="sales">Most Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="bg-white/20">
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All</TabsTrigger>
              <TabsTrigger value="listed" onClick={() => setActiveTab('listed')}>Listed</TabsTrigger>
              <TabsTrigger value="draft" onClick={() => setActiveTab('draft')}>Drafts</TabsTrigger>
              <TabsTrigger value="sold" onClick={() => setActiveTab('sold')}>Sold</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{artwork.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">Status: {artwork.status}</p>
                  <p className="text-purple-600 font-bold">{artwork.price} ICP</p>
                  {artwork.status !== 'draft' && (
                    <p className="text-sm text-gray-600">Sales: {artwork.sales} | Revenue: {artwork.revenue} ICP</p>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" className="flex-1 mr-2">
                    <Edit2 className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <Button variant="outline" className="flex-1 ml-2" disabled={artwork.status === 'sold'}>
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

    <Footer />
    </div>
  )
}
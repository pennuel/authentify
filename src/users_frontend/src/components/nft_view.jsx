import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Palette, Heart, Share2, ExternalLink, Clock, Tag, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from './header'
import Footer from './footer'

// Mock data for the NFT
const nftData = {
  id: "1234",
  title: "Ancestral Whispers",
  artist: "Zainab Mensah",
  description: "A mesmerizing digital painting that blends traditional African motifs with contemporary abstract elements. This piece explores the connection between past and present, inviting viewers to reflect on their heritage and future.",
  image: "https://picsum.photos/seed/nft1234/800/800",
  price: 2.5,
  currency: "ICP",
  edition: "1 of 1",
  createdAt: "2023-06-15T10:30:00Z",
  blockchain: "Internet Computer",
  category: "Digital Painting",
  tags: ["abstract", "heritage", "contemporary"],
  provenance: [
    { event: "Minted", date: "2023-06-15T10:30:00Z", by: "Zainab Mensah" },
    { event: "Listed", date: "2023-06-16T14:00:00Z", by: "Zainab Mensah" },
  ]
}

export default function ViewNFT() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
        <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="overflow-hidden">
              <Image
                src={nftData.image}
                alt={nftData.title}
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2">{nftData.title}</CardTitle>
                    <CardDescription>by {nftData.artist}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={() => setIsLiked(!isLiked)}>
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold mb-4">{nftData.price} {nftData.currency}</p>
                <p className="mb-4">{nftData.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Edition</p>
                    <p>{nftData.edition}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Blockchain</p>
                    <p>{nftData.blockchain}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p>{nftData.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p>{new Date(nftData.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {nftData.tags.map((tag, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Artwork Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="provenance">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="provenance">Provenance</TabsTrigger>
                    <TabsTrigger value="attributes">Attributes</TabsTrigger>
                    <TabsTrigger value="history">Price History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="provenance">
                    <ul className="space-y-4">
                      {nftData.provenance.map((event, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                          <div>
                            <p className="font-medium">{event.event}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(event.date).toLocaleString()} by {event.by}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="attributes">
                    <p>Attributes content (to be implemented)</p>
                  </TabsContent>
                  <TabsContent value="history">
                    <p>Price history content (to be implemented)</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>About the Artist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://picsum.photos/seed/artist1234/200" alt={nftData.artist} />
                <AvatarFallback>{nftData.artist.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{nftData.artist}</h3>
                <p className="text-gray-500">Contemporary Digital Artist</p>
                <Button variant="link" className="p-0">
                  View Profile <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Authenticity Guarantee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <ShieldCheck className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium">Verified by Authentify</p>
                <p className="text-gray-500">This artwork's authenticity is guaranteed by Authentify. Our platform ensures that the provenance and ownership of this NFT are securely recorded on the blockchain.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

    <Footer />
    </div>
  )
}
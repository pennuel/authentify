import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Palette, Upload, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from './footer';

export default function UploadArtwork() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(1);
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isLimited, setIsLimited] = useState(false);
  const [editionSize, setEditionSize] = useState(1);

  const handleImageUpload = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages([...images, ...filesArray]);

      const newPreviewUrls = filesArray.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviewUrls = [...previewUrls];
    URL.revokeObjectURL(newPreviewUrls[index]);
    newPreviewUrls.splice(index, 1);
    setPreviewUrls(newPreviewUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log({ title, description, category, price, images, isLimited, editionSize });
    // Reset form or redirect user after successful upload
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
      <header className="bg-white/30 backdrop-blur-lg py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-white">
            <Palette className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">Authentify</span>
          </Link>
          <nav>
            <Button variant="ghost" className="text-white hover:text-purple-200">My Collection</Button>
            <Button variant="ghost" className="text-white hover:text-purple-200">Profile</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Upload New Artwork</h1>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 space-y-6">
          <div>
            <Label htmlFor="title" className="text-white">Artwork Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white/20 text-white placeholder-gray-300 border-white/30"
              placeholder="Enter the title of your artwork"
              required
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-white">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white/20 text-white placeholder-gray-300 border-white/30"
              placeholder="Describe your artwork"
              required
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-white">Category</Label>
            <Select onValueChange={setCategory} required>
              <SelectTrigger id="category" className="bg-white/20 text-white border-white/30">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="sculpture">Sculpture</SelectItem>
                <SelectItem value="digital">Digital Art</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="mixed-media">Mixed Media</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="price" className="text-white">Price (ICP)</Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="price"
                min={0.1}
                max={10}
                step={0.1}
                value={[price]}
                onValueChange={(value) => setPrice(value[0])}
                className="flex-grow"
              />
              <span className="text-white font-bold">{price} ICP</span>
            </div>
          </div>

          <div>
            <Label className="text-white mb-2 block">Upload Images</Label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer bg-white/10 hover:bg-white/20">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-white" />
                  <p className="mb-2 text-sm text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-300">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} multiple accept="image/*" />
              </label>
            </div>
          </div>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative">
                  <Image src={url} alt={`Preview ${index + 1}`} width={200} height={200} className="rounded-lg object-cover w-full h-40" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Switch id="limited-edition" checked={isLimited} onCheckedChange={setIsLimited} />
            <Label htmlFor="limited-edition" className="text-white">Limited Edition</Label>
          </div>

          {isLimited && (
            <div>
              <Label htmlFor="edition-size" className="text-white">Edition Size</Label>
              <Input
                id="edition-size"
                type="number"
                min={1}
                value={editionSize}
                onChange={(e) => setEditionSize(parseInt(e.target.value))}
                className="bg-white/20 text-white placeholder-gray-300 border-white/30"
              />
            </div>
          )}

          <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
            Upload Artwork
          </Button>
        </form>
      </main>
          <Footer />
    </div>
  );
}
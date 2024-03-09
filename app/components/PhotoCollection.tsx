import Image from 'next/image'

const PhotoCollection = () => {
  const photos = [
    { id: 1, src: '/path/to/photo1.jpg', description: 'Photo 1' },
    { id: 2, src: '/path/to/photo2.jpg', description: 'Photo 2' },
    { id: 3, src: '/path/to/photo3.jpg', description: 'Photo 3' },
    { id: 4, src: '/path/to/photo4.jpg', description: 'Photo 4' },
    { id: 5, src: '/path/to/photo5.jpg', description: 'Photo 5' },
    { id: 6, src: '/path/to/photo6.jpg', description: 'Photo 6' },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative cursor-pointer"
          onMouseEnter={() => console.log('Mouse entered')}
          onMouseLeave={() => console.log('Mouse left')}
        >
          <Image
            src={photo.src}
            alt={photo.description}
            className="h-auto w-full"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
            <p className="text-lg text-white">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PhotoCollection

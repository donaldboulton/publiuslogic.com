import * as React from 'react'
import Tags from '@/components/tags'
import Img, { ImgType } from '@/components/img'

interface PostHeroProps {
  url: string
  title: string
  image: ImgType
  tags: string[]
}

const PostHero = ({ url, title, image, tags }: PostHeroProps) => (
  <div className="mb-1 md:mb-0 w-full max-w-screen-xl mx-auto relative h-96 xl:h-96 lg:h-80">
    <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-gray-700 opacity-50"></div>
    <Img
      image={image}
      alt="featured image"
      className="cover"
      imgClassName="cover"
    />
    <div className="p-4 absolute bottom-0 left-2 z-20">
      {tags ? <Tags tags={tags} /> : ''}
      <h1 className="text-4xl font-bold text-white leading-tight">{title}</h1>
    </div>
  </div>
)
export default PostHero
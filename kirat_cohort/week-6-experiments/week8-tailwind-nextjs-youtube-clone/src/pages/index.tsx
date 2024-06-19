import Image from "next/image"
import { Inter } from "next/font/google"
import { VideoCard } from "@/components/VideoCard"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to learn coding in 30 days | 30 day plan | Code with me"}
        image={"/photo.png"}
        thumbImage={"/thumb.jpg"}
        author={"Paarth Bhasin"}
        views={"46 Mn"}
        timestamp={"2 days ago"}
      />
    </div>
  )
}

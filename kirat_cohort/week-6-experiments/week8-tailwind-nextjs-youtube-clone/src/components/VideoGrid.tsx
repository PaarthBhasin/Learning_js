import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
        image: "/photo.png",
        thumbImage: "/thumb.jpg",
        author: "Paarth Bhasin",
        views: "46 Mn",
        timestamp: "2 days ago",
},{
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
        image: "/photo.png",
        thumbImage: "/thumb.jpg",
        author: "Paarth Bhasin",
        views: "46 Mn",
        timestamp: "2 days ago",
},
{
    title: "How to learn playing in 30 days | 30 day plan | Code with me",
        image: "/photo.png",
        thumbImage: "/thumb.jpg",
        author: "Paarth Bhasin",
        views: "46 Mn",
        timestamp: "2 days ago",
},
{
    title: "How to learn skipping in 30 days | 30 day plan | Code with me",
        image: "/photo.png",
        thumbImage: "/thumb.jpg",
        author: "Paarth Bhasin",
        views: "46 Mn",
        timestamp: "2 days ago",
},
{
    title: "How to learn singing in 30 days | 30 day plan | Code with me",
        image: "/photo.png",
        thumbImage: "/thumb.jpg",
        author: "Paarth Bhasin",
        views: "46 Mn",
        timestamp: "2 days ago",
},]


export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
        {VIDEOS.map( (video,index) => 
            <div key={index}> <VideoCard title={video.title} image={video.image} thumbImage={video.thumbImage} author = {video.author} views={video.views} timestamp={video.timestamp}  /> </div>
        )}
    </div>  
}
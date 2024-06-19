export function VideoCard(props: any){
    return <div>
        <img src={props.image} className="rounded-xl" alt="thumbnail" />
        <div className="grid grid-cols-12">
            <div className="col-span-1 ">
            <img className="rounded-full w-15 h-12 pl-4" src={props.thumbImage} alt="thumbnail" />
            </div>
            <div className="col-span-11 pl-2">
                <div>
                {props.title}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
               {props.author}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.views} | {props.timestamp}
            </div>
            </div>
            
        </div>
    </div>
}
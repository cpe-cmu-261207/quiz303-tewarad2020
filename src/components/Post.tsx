

const Post = () => {
    
    return (
        <div className="space-y-2">

        {/* image and name */}
        <div className="flex space-x-2 items-center">
        <img className="w-12 h-12 rounded-full" src="/profileImages/me.jpg"></img>
        <span className='font-semibold text-lg'>Tewarad Somrad 630310731</span>
        </div>

        {/* status message */}
        <p>Quiz ไม่ง่ายครับ5555 #261207</p>

        {/* like section */}
        <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-500'>100k คน</p>
        </div>

        </div>
    )
}

export default Post
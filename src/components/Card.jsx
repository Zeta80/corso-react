function Card({ title, imgUrl, isVisited, children }) {
  const visitedText = isVisited ? '✨ Visited' : '❌ Not Visited';
  return (
    <>
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-950 '>
            <img className='w-full' src={imgUrl} alt='Sunset in the mountains' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-white'>{title}</div>
                <p className='text-gray-700 text-base'>
                    {children}
                </p>
            </div>
            <span>{visitedText}</span>
        </div>
    </>
  );
}
export default Card;
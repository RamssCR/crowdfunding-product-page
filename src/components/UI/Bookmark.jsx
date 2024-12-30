import bookmarkIcon from '../../assets/images/icon-bookmark.svg'

// eslint-disable-next-line react/prop-types
function Bookmark({marked = false, onClick}) {
    return (
        <article className="bg-gray-100 w-fit flex items-center gap-3 rounded-full ml-4 hover:bg-gray-200 hover:cursor-pointer" onClick={onClick}>
            <button className="size-14 rounded-full">
                <img src={bookmarkIcon} alt="Bookmark" />
            </button>
            <span className="text-gray-600 font-semibold pr-6 hidden lg:block">{!marked ? 'Bookmark' : 'Bookmarked'}</span>
        </article>
    )
}

export default Bookmark
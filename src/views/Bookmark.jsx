import { LaunchList } from "../components/LaunchList"
import { useSelector } from "react-redux"

export function Bookmark () {
    const { bookmarks } = useSelector((state) => state.bookmarks)
    return(
        <>
            <LaunchList launches={bookmarks} />   
        </>
    )
}
import { useContext, useState } from "react"
import { appContext } from '../../context/appContext'
import Button from "../UI/Button"
import Bookmark from "../UI/Bookmark"
import CardContainer from "../UI/CardContainer"
import ProductLogo from "./ProductLogo"

function ProductCard() {
    const [bookmark, setBookmark] = useState(false)
    const { toggleModalView } = useContext(appContext)

    return (
        <CardContainer className="-mt-14 gap-5 lg:pb-12">
            <ProductLogo />
            <h2 className="text-2xl font-bold text-center mt-1 lg:text-3xl">Mastercraft Bamboo Monitor Riser</h2>
            <p className="text-gray-400 text-center lg:text-lg lg:-mt-2">A beautifully & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex items-center w-full px-2 lg:mt-6 lg:justify-between">
                <Button 
                    className="w-full lg:px-14 lg:w-fit"
                    onClick={toggleModalView}
                >
                    Back this project
                </Button>
                <Bookmark marked={bookmark} onClick={() => setBookmark(prev => !prev)} />
            </div>
        </CardContainer>
    )
}

export default ProductCard
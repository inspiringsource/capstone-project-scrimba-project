import React, {useContext} from "react"
import {getClass} from "../utils"
import Image from "../components/Image"
import {Context} from "../Context"
import "../index.css"

function Photos() {
    const{allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i)=> (
        <Image key={img.id} className={getClass(i)} img={img} alt={img.id}/>
    ))

    return (
        <main className="photos">
            <h1>{imageElements}</h1>
        </main>
    )
}

export default Photos
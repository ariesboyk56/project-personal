import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <section>
            <Skeleton count={10} height={5} />
        </section>
    )
}

export default Loading

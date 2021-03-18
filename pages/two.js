import Image from 'next/image'

import Head from 'next/head'i
const Two = () => {
    return(
        <>
        <Head>
            <title>페이지 투!</title>
        </Head>
        <div>
            <div style={{ height: `2000px` }}>미안..</div>
            <Image
                src="/favicon.ico"
                width="10px"
                height="10px"
            />
        </div>
        </>
    )
}

export default Two;
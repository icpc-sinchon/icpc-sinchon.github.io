import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Layout'
import classNames from 'classnames';
const type = 'success'
const Two = () => {
    return (
        <Layout>
            <Head>
                <title>페이지 투!</title>
            </Head>
            <div>
                <div
                    className={
                        classNames({
                            ["class1"]: type === "success",
                            ["class2"]: true
                        })
                    }
                    style={{ height: `2000px` }}>미안..</div>
                <Image
                    src="/favicon.ico"
                    width="10px"
                    height="10px"
                />
            </div>
            <style jsx>{
                `img{
                   border: 1px solid red;
               }`
            }
            </style>
        </Layout>
    )
}

export default Two;
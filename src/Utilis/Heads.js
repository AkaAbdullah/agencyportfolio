import Head from 'next/head';

//Data
import { data } from "Data/data";

const Heads = () => {
    return (
        <Head>
            <meta property="og:url" content={data.Meta.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.Meta.title} />
            <meta property="og:description" content={data.Meta.description} />
            <title>{data.Meta.title}</title>
            <meta name="description" content={data.Meta.description} />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="author" content={data.Meta.author} />
        </Head>
    );
};
export default Heads;
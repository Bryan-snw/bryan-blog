import { Fragment } from "react";
import DetailPage from "../../components/projects/detailPage";
import { getPostData, getPostFilesName } from "../../lib/post-util";
import Head from "next/head";

function DetailProjectPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <DetailPage post={props.post}/>
    </Fragment>
  );
}

export function getStaticProps(context){
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  
  return{
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths(){

  const postFilesName = getPostFilesName();

  const slugs = postFilesName.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({params: {slug: slug}})),
    fallback: false,
  }
}

// export function getStaticProps(context) {
//   return {
//     props: {
//       post: "tes"
//     }
//   }
// }

// export function getStaticPaths() {
//   const postFilesName = getPostFilesName();
//   console.log(postFilesName);

//   return {
//     paths: [{ params: { slug: "drum" } }, { params: { slug: "room" } }],
//     fallback: false,
//   };
// }

export default DetailProjectPage;

import { Fragment } from "react";
import { getAllPosts } from "../../lib/post-util";
import Project from "../../components/projects/projects";
import Head from "next/head";

function ProjectsPage(props) {
  const { posts, halaman } = props;

  // Variable untuk Pagination
  const jumlahDataPerHalaman = 2;
  var jumlahData = posts.length;
  var jumlahHalaman = Math.ceil(jumlahData / jumlahDataPerHalaman);
  var halamanAktif = parseInt(halaman);
  var awalData = jumlahDataPerHalaman * halamanAktif - jumlahDataPerHalaman;

  return (
    <Fragment>
      <Head>
        <title>Projects</title>
        <meta name="description" content="This is all post page" />
      </Head>
      <Project
        posts={props.posts}
        jumlahDataPerHalaman={jumlahDataPerHalaman}
        jumlahHalaman={jumlahHalaman}
        halamanAktif={halamanAktif}
        awalData={awalData}
      />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const allPosts = getAllPosts();
  const { params } = context;

  return {
    props: {
      posts: allPosts,
      halaman: params.slug,
    },
  };
}

export function getStaticPaths() {
  const allPosts = getAllPosts();

  const jumlahDataPerHalaman = 2;
  var jumlahData = allPosts.length;
  var jumlahHalaman = Math.ceil(jumlahData / jumlahDataPerHalaman);

  let slug = [];
  for (let index = 1; index <= jumlahHalaman; index++) {
    let data = { params: { slug: `${index}` } };
    slug.push(data);
  }

  return {
    paths: slug,
    fallback: false,
  };
}

export default ProjectsPage;

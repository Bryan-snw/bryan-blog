import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

// Get the all the file name in the posts folder.
export function getPostFilesName() {
  return fs.readdirSync(postDirectory);
}

/**
 * This is to get the data and content in the post file (Individually / Just One)
 * @param {string} string
 * @returns {object} return Object
 */
export function getPostData(postIdentifier) {
  // Used for directory in image/post folder so the name must be the same. posts/filename === public/images/posts/foldername
  const postSlug = postIdentifier.replace(/\.md$/, ""); // Remove File extension (md) to match the folder name for image

  // to generate path for the post file. adding '.md' back
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  // Define the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Must be data and content because of markdown file.
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts(){
  // Get All the file name in the posts folder
  const postFilesName = getPostFilesName();

  // Stored in a Array of Object that have all the data/content of the post file.
  const allPosts = postFilesName.map((postFileName => {
    return getPostData(postFileName);
  }))

  // sort more recent post. not really sure if this is work tho.
  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts(){
  const allPosts = getAllPosts();

  // Stored the posts that have isFeatured = True
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

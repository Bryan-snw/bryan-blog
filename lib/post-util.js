import fs from 'fs';
import path from 'path';

const postDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles(){
  return fs.readdirSync(postDirectory)
  
}


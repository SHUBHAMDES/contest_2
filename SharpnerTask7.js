const blogs = [];

function create1stBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push({  title: 'BLOG1' });
      resolve();
    }, 3000);
  });
}


function create2ndBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push({ title: 'BLOG2' });
      resolve();
    }, 2000);
  });
}//Shubham Deshmukh janta English School Hindi medium

function deleteBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blogs.length > 0) {
        const deletedBlog = blogs.pop();
        resolve(deletedBlog.title);
      } else {
        reject('ERROR: ARRAY IS EMPTY');
      }
    }, 1000);
  });
}

create1stBlog()
  .then(create2ndBlog)
  .then(deleteBlog)
  .then((deletedBlog) => {
    console.log(deletedBlog);
    return deleteBlog();
  })
  .then((deletedBlog) => {
    console.log(deletedBlog);
    return deleteBlog();
  })
  .then((deletedBlog) => {
    console.log(deletedBlog);
    return deleteBlog();
  })
  .catch((error) => {
    console.log(error);
  });

  

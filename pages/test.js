const test = () => {
  return (
    <div>
      {process.env.NODE_ENV}
      {process.env.API_URI}
    </div>
  );
};

// export async function getStaticProps() {
//   console.log("get Static Props is running");
//   console.log(process.env.API_URI);

//   const posts = "this is an example post"

//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default test;

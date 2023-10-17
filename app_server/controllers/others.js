/* GET homepage */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'About Blog It',
      content: "Blog It is a dynamic and user-centric blogging platform designed to empower individuals and businesses to share their stories, expertise, and creativity with the world. With an intuitive and user-friendly interface, Blog It makes it effortless to craft and publish compelling content in various formats, from articles and tutorials to multimedia-rich posts.\n\nOur platform fosters a vibrant community of bloggers, fostering connections and engagement through comments, likes, and shares. We prioritize user experience, ensuring that anyone, regardless of technical expertise, can easily navigate and manage their blogs.\n\nBlog It is not just a platform for expression; it's a platform for growth. We offer powerful tools for customization, SEO optimization, and monetization, enabling bloggers to reach wider audiences and even generate income from their content.\n Whether you're a seasoned blogger or just starting your journey, Blog It provides the support and resources you need to succeed. Join our community of storytellers, educators, and creatives today and let your voice be heard. Blog It - Where Your Story Begins!" 
     }
      );
};
const logout = (req, res) => {
  res.render('index',
  {
    title:'logout'}
  );
  };
module.exports = {
  about,
  logout
};

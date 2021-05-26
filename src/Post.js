import img from "./logo192.png";
const Post = (props) => {
  const { title, author } = props.bookvar;
  return (
    <div>
      <img src={img} alt="pic" />
      <h4>{title.toUpperCase()}</h4>
      <h4>{author.toUpperCase()}</h4>
      <p>this is paragraph</p>
    </div>
  );
};
export default Post;

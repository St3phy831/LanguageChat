import "./Filters.css";

const Filters = (props) => {
  const orderByNewest = () => {
    let sortedPosts = [...props.posts];
    sortedPosts.sort((x, y) => {
      return new Date(y.created_at) - new Date(x.created_at);
    });
    props.setPosts(sortedPosts);
  };

  const orderByUpvotes = () => {
    let sortedPosts = [...props.posts];
    sortedPosts.sort((x, y) => {
      return y.upvotes - x.upvotes;
    });
    props.setPosts(sortedPosts);
  };

  return (
    <div className="Filters">
      <span>Order By:</span>
      <button className="filtersBtn" onClick={orderByNewest}>
        Newest
      </button>
      <button className="filtersBtn" onClick={orderByUpvotes}>
        Most Popular
      </button>
    </div>
  );
};

export default Filters;

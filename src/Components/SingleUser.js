import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Single.module.css";

const SingleUser = ({ Userdetail, PostList }) => {
  const [Postcount, setPostCount] = useState(0);
  useEffect(() => {
    calculateposts();
  }, []);
  const calculateposts = () => {
    let userpostcount = PostList.reduce((acc, post) => {
      if (post.userId === Userdetail.id) {
        acc++;
      }
      return acc;
    }, 0);
    console.log(userpostcount);
    setPostCount(userpostcount);
  };
  return (
    <div className={styles.userwrapper}>
      <Link to={`profile/${Userdetail.id}`}>
        <div className={styles.user}>
          <span>Name:{Userdetail.username}</span>
          <span>Posts:{Postcount}</span>
        </div>
      </Link>
    </div>
  );
};
export default SingleUser;

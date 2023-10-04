import styles from "./Profile.module.css";
import useModalPopup from "./hooks/useModalPopup";
const SinglePost = ({ post }) => {
  const { showModal, setshowModal, displaymodal } = useModalPopup();
  const handlepopup = () => {
    setshowModal(true);
  };
  return (
    <div onClick={handlepopup} className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {displaymodal(post)}
    </div>
  );
};
export default SinglePost;

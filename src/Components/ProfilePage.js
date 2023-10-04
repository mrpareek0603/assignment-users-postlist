import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import SinglePost from "./SinglePost";

const ProfilePage = ({ UserLists, PostList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userdetail, setUserDetail] = useState("");
  const [usersposts, setUsersposts] = useState([]);
  useEffect(() => {
    let finduser = UserLists.find((user) => user.id === parseInt(id));
    let getuserposts = PostList.filter((post) => post.userId === parseInt(id));
    setUsersposts(getuserposts);
    setUserDetail(finduser);
  }, [id]);

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <button className={styles.backbtn} onClick={() => navigate("/")}>
          Back
        </button>
        <h3>ProfilePage</h3>
      </div>
      <div className={styles.userdetail}>
        <div className={styles.namedetails}>
          <p>{userdetail?.name}</p>
          <p>
            {userdetail?.username}|{userdetail?.company?.catchPhrase}
          </p>
        </div>
        <div className={styles.addressdetails}>
          <p>
            {userdetail?.address?.street}, {userdetail?.address?.suite},{" "}
            {userdetail?.address?.city}
          </p>
          <p>
            {userdetail?.email}|{userdetail?.phone}
          </p>
        </div>
      </div>
      {usersposts && usersposts.length > 0}
      {
        <div className={styles.postwrapper}>
          {usersposts.map((post) => {
            return <SinglePost post={post} key={post.id} />;
          })}
        </div>
      }
    </div>
  );
};
export default ProfilePage;

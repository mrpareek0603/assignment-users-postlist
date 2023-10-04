import styles from "./Directory.module.css";
import SingleUser from "./SingleUser";
const Directory = ({ UserLists, PostList }) => {
  return (
    <div className={styles.directory}>
      <h1>Directory</h1>
      <div className={styles.userdetails}>
        {UserLists.map((User) => {
          return (
            <SingleUser key={User.id} Userdetail={User} PostList={PostList} />
          );
        })}
      </div>
    </div>
  );
};
export default Directory;

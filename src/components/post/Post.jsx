import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://lh3.googleusercontent.com/-GKsPWtdWq0HHB-UWg8VL37qDkiCnA3dzxYkZShsKRoGbxCSvIhUHLFSP3CO9RN-PU_WqCwA5gCUYuI1D4zv-aa5TwP8_Hr3qBlwXk_WquQ53XOBDkaO0ToSU-kmPesAL8a-QqAsDqvGXyNlq_3DB2SSieYJQRkKaAyC7wP56h-cGHvZ59LlmlwVq61xbQ-uNDrl_CT0fB4aJYo653qtH_I7zZVu9xnjZ66lXIfEiYa1KNfpRuFOYXu4ax2XnG3eqnvZx-Zk3sTBur2D_AaUsU4B6FbQXx0UB1m2Ug5cOkPmiXjyoMKqEiB0Vff8djPKN-jyAzpx73qrpowRrB4yiYz2ZlDMmtM-CMMrmiOQnXx0vZxa7Yv2xsikgPZKwlJenEBA-OgPQF1l0n-_7E1_0_MjvbGCv65J-TCxJA5ZQg80GvvfKmDT4uF7Wo7d5q06YEm2JyIVzCt8zNyyce1MUOhaQBQ0mjwbtQPm6JRxFSVhTbPTHrdIRwneF2VHoBlIeeuLZBUUUP5ql8evsYte6u6YSFz-_tiodJq0KVEwutyJUAC36QwN_myWHVyEywX3bVYRDQjAtYImNvjgfAOE4EdZpDYFjwL5YcguukoclEuVXenhh3ekKBWkTbr-bobS8kzhBPEbY_LDbvx9j7xod9M7A2T5fYXtdiJdWDEMAqrUE1TdG2ROEzSSjg0iKXxlHWiJjEFDwP7PexZuw2ZrlLtr=w960-h641-no?authuser=0"
        alt="img"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet..1</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        nesciunt nobis necessitatibus quia corrupti aut eos ipsam? In, quas
        similique, eius fuga possimus laborum hic aliquid fugiat error cumque
        reiciendis.
      </p>
    </div>
  );
}

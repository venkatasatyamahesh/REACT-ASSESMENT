import React from "react";
import "./index.css";
const  Post = ({ people }) => {
    console.log(people);
    return people.map((person) =>{
        return (
            <div className="View">
            <div className="post">
                <div className="propt">
                    <div className="name">
                        {person.name}
                        <br/>
                        {person.location}
                    </div>
                    <div className="dts">
                        <p>...</p>
                    </div>
                </div>
                <div className="photo">
                    <img src={person.PostImage} alt="front"/>
                </div>
                <div className="footer">
                    <div className="like">
                        <img src ="https://tse2.mm.bing.net/th?id=OIP.30OzQAGmwt30tbw7U6IBjwHaHa&pid=Api&P=0&w=167&h=167" alt =""/>
                    </div>
                    <div className="share">
                        <img src ="https://tse2.mm.bing.net/th?id=OIP.pmTCFa4mAtzDoE8BYQ8izwHaHa&pid=Api&P=0&w=168&h=168" alt=""/>
                    </div>
                </div>
                <div className="date">{person.date}</div>
                <div className="likecount">
                    <p>{person.likes}</p>
                </div>
                <div className="description">
                    <p>{person.description}</p>

                </div>

            </div>
            </div>
        );
    });
}
export default Post;
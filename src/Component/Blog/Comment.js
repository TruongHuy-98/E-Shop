import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Comment(props) {

    const id_blog = props.id;
    const idComment = props.idComment;
    const repCmt = props.repCmt;
    const getCmt = props.getCmt;

    const navigator = useNavigate();
    const [comment, setComment] = useState('');

    function checkComment(e) {
        e.preventDefault();

        const loginSuccess = localStorage.getItem('loginSuccess');
        
        if (!JSON.parse(loginSuccess)) {
            alert("Vui lòng đăng nhập")
            navigator('/login')
        } else {
            if (comment) {
        
                const formData = new FormData();
                const user = JSON.parse(localStorage.getItem('user'))
                let url = '/blog/comment/' + id_blog
                let token = JSON.parse(localStorage.getItem('token'))

                //Config để gởi Token qua API
                let config = { 
                    headers: { 
                    'Authorization': 'Bearer '+ token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                    } 
                };
                // Kiểm tra forrm đã nhập chưa!
                formData.append('id_blog', id_blog);
                formData.append('id_user', user.id);
                formData.append('id_comment', idComment ? idComment : 0);
                formData.append('comment', comment);
                formData.append('image_user', user.avatar);
                formData.append('name_user', user.name);

                axios.post(url, formData, config)
                .then(res => {
                    console.log(res)
                })

                e.target.previousElementSibling.value = ''
                repCmt(0)
            }
            else {
                alert("Vui lòng nhập bình luận")
            }
        }
    }

    function valueComment(e) {
        setComment(e.target.value);
    }

    return (
        <div className="replay-box">
          <div className="row">
            <div className="col-sm-12">
              <h2>Leave a replay</h2>
              <div class="text-area">
                        <div class="blank-arrow">
                            <label htmlFor='comment' >Your Name</label>
                        </div>
                        <span>*</span>
                        <textarea onChange={valueComment} id="comment" name="message" rows="11"></textarea>
                        <a onClick={checkComment} class="btn btn-primary" href="">Post comment</a>
                    </div>
            </div>
          </div>
        </div>
    )
}
export default Comment;
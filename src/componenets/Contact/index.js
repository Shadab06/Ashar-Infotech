import emailjs from "emailjs-com";
import { useState } from "react";

const Form = () => {

    const [user, setUser] = useState({ name: "", email: "", subject: "", message: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        emailjs.send('service_97ty84h', 'template_46etcai', user, 'user_Teg9sx2gb2v72L2Loel8o')
            .then(function (response) {
                window.alert("Response Submitted")
            }, function (error) {
                console.log('FAILED...', error);
                window.alert(`Failed: + ${error}`);
            });
    }

    return (
        <div className="contact-us-container">
            <div className="container my-4 col-sm-9 col-md-10 col-lg-8">
                <h2>Contact Us</h2>
                <div style={{ background: "blue", height: "1px", width: "250px" }}></div>
            </div>
            <div>
                <div className="container-item mx-auto my-2 col-sm-9 col-md-10 col-lg-8">
                    <input type="text" className="form-control mb-2" id="exampleFormControlInput1" placeholder="Name" name="name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" name="subject" value={user.subject} onChange={e => setUser({ ...user, subject: e.target.value })} />
                </div>
                <div className="container-item mx-auto col-sm-9 col-md-10 col-lg-8">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter message" value={user.message} onChange={e => setUser({ ...user, message: e.target.value })} ></textarea>
                    <input type="button" className="form-control mt-4" id="exampleFormControlInput1" value="Submit" style={{ background: "blue", color: "white", cursor: "pointer" }} onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Form
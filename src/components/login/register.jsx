import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerclick = () => {

        
        var un = document.getElementById("isd").value
        if (un ==="") {
            
            alert("Blank / Invalid ID")
            window.open('', '_self')
        }
        else{
            
            alert("Registerd")
            window.open('login.jsx', '_self')
        }


    }


    render() {
        return (
            <form>
                <div className="base-container" ref={this.props.containerRef}>
                <h1 > <strong className="imagee">Eat</strong>  <strong className="imagew">Sleep</strong> <strong className="imageq">Binge</strong>🍔</h1>
                    <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="User Name">User Name</label>
                                <input type="text" name="User Name" id="isd" placeholder="User Name" required  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" required />
                            </div>
                        </div>
                    </div>
                    <div className="footer1">
                        <button type="button" className="btn"  onClick={this.handlerclick} > Register

                        </button>
                    </div>
                </div>
            </form>
        );
        
    }
}

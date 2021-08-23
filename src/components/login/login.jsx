import React from "react";
import loginImg from "../../login.svg";




export class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    handlerclick = () => {
        alert('Eat Sleep Binge')

        window.open('https://nithinraoodela.github.io/Registration/', '_self')
        
        
        



       


         



    }


    render() {
        return (
            <form action="/" method="GET">
                <div className="base-container" ref={this.props.containerRef}>
                <h1 > <strong className="imagee">Eat</strong>  <strong className="imagew">Sleep</strong> <strong className="imageq">Binge</strong>🍔</h1>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="User Name">User Name</label>
                                <input type="text" name="User Name" id="isd" placeholder="User Name" ref={this.inputRef}required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"id="isdd" name="password" placeholder="password" required />
                            </div>
                        </div>

                    </div>
                    <div className="footer2">
                        <button type="button" className="btn"  id="btt" onClick={this.handlerclick} > <a href="https://tomatoeatsleepbinge.netlify.app/" className="btn" id="btt">Login</a> 

                        </button>

                    </div>
                </div>

            </form>
        );
    }
}

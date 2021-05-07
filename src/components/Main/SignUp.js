import './SignUp.css'

const SignUp = ({onRouteChange, route, setRoute}) => {

    function toRegister() {
        setRoute('register')
    }
    function toSignIn() {
        setRoute('signin')
    }
    function toHome(){
        setRoute('home')
    }

    return (
        <div container-lg>
        { route === 'register' ? 
            <div>
                <form className="form-bd ">
                    <p className="itm-cnt txt-styl txt-spc">Register</p>
                    <p className="text-h-style">Name</p>
                    <input type="text" name="FullName" placeholder="Full Name" className="btm-spc" />
                    <p className="text-h-style">Email</p>
                    <input type="email" name="email" placeholder="Email" className="btm-spc" />
                    <p className="text-h-style">Password</p>
                    <input type="password" name="FullName" placeholder="Password" className="btm-spc" />
                    <br />
                    <div className="itm-cnt">
                        <button className="button mar">Register</button>
                    </div>
                    <br/>
                    <div className="line-gap">
                        <p className="itm-cnt">Already a Member</p>
                        <a className="itm-cnt"href="#" onClick={toSignIn} >Sign In</a> 
                    </div>
                </form>
                </div>
                :
                <div>
                <form className="form-bd ">
                <p className="itm-cnt txt-styl txt-spc">Sign In</p>
                <p className="text-h-style">Email</p>
                <input type="email" name="email" placeholder="Email" className="btm-spc" />
                <p className="text-h-style">Password</p>
                <input type="password" name="FullName" placeholder="Password" className="btm-spc" />
                <br />
                <div className="itm-cnt">
                    <button className="button mar" onClick={toHome}>Sign In</button>
                </div>
                <br/>
                <div className="line-gap">
                <p className="itm-cnt">Don't Have Account?</p>
                <a href="#" className="itm-cnt" onClick = {toRegister}> Register</a>
                </div>
            </form>
            </div>
        }
        </div>
    )
}

export default SignUp

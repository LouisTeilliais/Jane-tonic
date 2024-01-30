export default function Login() {
    return (
        <div>
            <h1>Login admin</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"></input>
                </label>
            </form>
            <div>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}
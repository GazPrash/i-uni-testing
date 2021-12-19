import React from "react";
import GoogleLogin from "react-google-login";

function Login() {
  const responseGoogleFailure = (issue) => {
    console.log(issue);
  };

  const responseGoogleSuccess = (data) => {
    // store login data in db TODO
    console.log(data);
  };

  return (
    <div className="card text-dark bg-light mb-3">
      <div className="container text-center">
        <div className="card-body">
          <main className="form-signin">
            <div className="container my-2 w-75">
              <form>
                <h1 className="h3 mb-3 font-monospace fw-bold">
                  Join iUniversity!
                </h1>
                <div className="form-floating my-3 py-2">
                  <GoogleLogin
                    clientId={process.env.GOOGLE_OAUTH_CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className="btn btn-outline-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-google mx-2 my-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        Sign in with Google
                      </button>
                    )}
                    // buttonText="Sign in with Google"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>

                <h6 className="font-monospace fw-bold">
                  {" "}
                  Or sign up with email
                </h6>

                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary my-4" type="submit">
                  Sign in
                </button>
                <p className="mt-5 mb-3 text-muted">© iUniversity</p>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;

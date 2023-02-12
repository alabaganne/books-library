import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// After Sign Up, Ask User to:
// * Verify email address
// * Add phone number
// * Submit Identity Card image to be able to purchase (optional)
function Login() {
  return (
    <div className="flex-center min-h-screen bg-gray-200">
      <div className="rounded bg-white p-12">
        <h2>Log In</h2>
        <form action="" className="mt-10 space-y-6">
          <div className="form-group required">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="text-sm text-gray-500">
              You dont't have an account?{' '}
              <Link to="/register" className="text-black hover:underline">
                Register here
              </Link>
            </div>
            <div>
              <button className="btn-common btn-base btn-primary">
                Log In
              </button>
            </div>
          </div>
        </form>
        <Link
          to="/"
          className="mt-6 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-600"
        >
          <FiArrowLeft /> Go back home
        </Link>
      </div>
    </div>
  );
}

export default Login;

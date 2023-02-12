import { Link } from 'react-router-dom';

export default function Newsletter() {
  // on form submit, send confirmation email to subscribe to newsletter
  // once email is confirmed, start sending email to user
  // if email is added but not confirmed for 7 days, delete email from the database

  return (
    <div className="flex-center bg-black pt-8 pb-4 text-center text-white">
      <div className="flex max-w-7xl flex-col items-center justify-center">
        <h3 className="text-4xl font-bold">
          Sign Up Today For 10% Off Your First Order
        </h3>
        <p className="mt-2 text-lg">
          Sign up to our newsletter for the latest news, inspiration, exclusive
          offers and discount codes
        </p>
        <form action="" className="mt-10 flex w-full max-w-2xl flex-1 gap-2">
          <input
            type="text"
            className="flex-1 rounded bg-white px-4 py-2 text-base shadow-sm outline-none focus:placeholder-transparent"
            placeholder="Enter your email address"
          />
          <button className="btn-common btn-lg btn-secondary items-center gap-2">
            Sign Me Up
          </button>
        </form>
        <p className="mt-8 text-sm">
          View{' '}
          <Link to="/" className="opacity-75 hover:underline hover:opacity-100">
            Terms & Conditions
          </Link>{' '}
          |{' '}
          <Link to="/" className="opacity-75 hover:underline hover:opacity-100">
            Privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
}

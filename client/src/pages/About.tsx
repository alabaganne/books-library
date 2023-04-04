import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';

export default function About() {
  return (
    <section className="flex justify-center gap-10 ">
      <div className="flex flex-row items-start justify-center gap-8">
        <div className="ml-10 mr-10 mt-24 mb-24 flex flex-col items-center justify-center gap-12">
          <p className=" text-gray-900 ">
            Our Book Store ecommerce website offers a wide range of services to
            ensure a seamless and enjoyable shopping experience for our
            customers. Our services include a user-friendly website interface
            that allows customers to easily search for their favorite books and
            explore new titles in various genres. We also offer a wide selection
            of books in different formats, including physical books, e-books,
            and audiobooks, so customers can choose their preferred format for
            reading.
          </p>
          <img
            src={about2}
            alt="About"
            className=" h-[300px] w-[300px] rounded-full object-cover"
          />
          <p className=" text-gray-900 ">
            To help customers make informed decisions about their purchases, we
            provide detailed product descriptions, customer reviews, and author
            interviews. Our personalized recommendations based on customers'
            reading history and preferences also help them discover new titles
            that they will enjoy. We understand the importance of secure and
            efficient delivery of our products. That's why we offer multiple
            delivery options, including standard shipping and express delivery,
            to meet our customers' needs. We also provide tracking information
            so customers can stay updated on the status of their orders.
          </p>
          <img
            src={about3}
            alt="About"
            className=" h-[300px] w-[300px] rounded-full object-cover"
          />
          <p className=" text-gray-900 ">
            For payment, we offer a variety of secure payment options, including
            credit/debit card payments and online payment services. Our payment
            process is quick and hassle-free, ensuring a smooth checkout
            experience for our customers. At our Book Store ecommerce website,
            we strive to provide exceptional customer service. Our customer
            support team is always available to assist with any queries or
            issues, ensuring our customers have a positive shopping experience.
          </p>
          <img
            src={about4}
            alt="About"
            className=" h-[300px] w-[300px] rounded-full object-cover"
          />
        </div>
        <img
          src={about1}
          alt="About"
          className=" hidden h-[100%] w-[50%] object-cover opacity-[0.8] sm:block"
        />
      </div>
    </section>
  );
}

// Page to view cart items and proceed with ordering
import shadowlands from '../assets/shadowlands.jpg';
import Item from '../components/Item';
export default function Cart() {
  return (
    <section className=" flex flex-col items-center justify-center gap-10 pt-10 pb-10 pl-10 pr-10 smm:flex-row smm:items-start">
      <div className=" flex h-[558px] w-[95%] flex-col items-start gap-6 overflow-auto border-[1px] border-solid pb-8 pt-8 pl-6 pr-6 ss:w-[90%] smm:w-[60%]">
        <Item
          id={1}
          title="Shadowlands: A Journey Through Lost Britain"
          authorName="Matthew Green"
          imageUrl={shadowlands}
          price={450.43}
        />
        <Item
          id={1}
          title="Shadowlands: A Journey Through Lost Britain"
          authorName="Matthew Green"
          imageUrl={shadowlands}
          price={450.43}
        />
        <Item
          id={1}
          title="Shadowlands: A Journey Through Lost Britain"
          authorName="Matthew Green"
          imageUrl={shadowlands}
          price={450.43}
        />
        <Item
          id={1}
          title="Shadowlands: A Journey Through Lost Britain"
          authorName="Matthew Green"
          imageUrl={shadowlands}
          price={450.43}
        />
      </div>
      <div className=" h-[558px] w-[95%] border-[1px] border-solid pb-8 pl-6 pr-6 ss:w-[70%] smm:w-[30%]">
        <form action="" className="mt-10 space-y-6">
          <div className="form-group required">
            <label htmlFor="email">First and last name</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="email">Phone Number</label>
            <input
              type="text"
              placeholder="99 999 999"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="email">Address</label>
            <input
              type="text"
              placeholder="174 Esprolls Boumhal"
              className="form-control mt-1"
            />
          </div>
          <div className=" flex items-center justify-center pt-8">
            <button
              type="submit"
              className=" rounded-sm bg-gray-900 pl-6 pr-6 pt-2 pb-2 text-sm font-medium text-white"
            >
              validate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

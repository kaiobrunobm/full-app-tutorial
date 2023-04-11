import Button from "../Utils/Button";
import Headers from "../Utils/Headers";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 mx-3">
          <Headers>Want tips & tricks to optimize your flow?</Headers>
          <p>Sign up to our newsletter and stay up to data.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Exemple@email.com"
              className="p-3 flex w-full rounded-md text-blackPrimary sm:mr-5"
            />
            <Button>Notify me</Button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-primary mx-auto">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

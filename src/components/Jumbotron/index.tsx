const Jumbotron = ({ title }: any) => {
  return (
    <>
      <section className="bg-black dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;

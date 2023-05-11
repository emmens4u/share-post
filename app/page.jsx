import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Introducing our innovative application that leverages the power of
        ChatGPT to generate thought-provoking prompts for users to share and
        discuss with their peers.
      </p>
      <Feed />
    </section>
  );
};

export default Home;

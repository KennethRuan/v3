const HarbourPage = () => {
  return (
    <div className="w-full h-ful text-dusk">
      <div className="text-7xl font-semibold"> harbour </div>
      <div className="h-1 my-2 bg-dusk w-full" />
      <div className="text-md font-semibold">
        {"Next.js, OpenAI, LangChain, Google Cloud"}
      </div>
      <div className="mt-2 text-md flex-col">
        <p>
          {
            "a chatbot designed to simulate real conversations in 70+ languages and dialects."
          }
        </p>
        <p>
          best google cloud hack @ <b className="font-semibold">ht6</b>
        </p>
        <p></p>
      </div>
    </div>
  );
};

const harbourDetails = {
  name: "Harbour",
  year: "2023",
  display: <HarbourPage />,
};

export default harbourDetails;

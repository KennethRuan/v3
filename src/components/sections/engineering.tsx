const Engineering = () => {
  return (
    <div className="relative w-full bg-cafe z-[1]">
      <div className="relative shadow-[0_0_16px_5px] shadow-darkcafe px-10 py-12 pb-24">
        <div className="w-full flex flex-col text-chalk">
          <div className="font-bold text-3xl"> engineering. </div>
          <div className="text-lg">i wanna be a systems architect.</div>
          <div className="text-lg">
            want to build cool backends make the world go brrrr.
          </div>
        </div>
        <div className="h-12" />
        <div className="w-full flex flex-col items-center gap-2 text-chalk text-2xl">
          <div className="flex flex-row gap-2">
            {["harbour", "navcare", "signalvest"].map((entry, i) => (
              <>
                <div key={`${i}-entry`}>{entry}</div>
                <div key={`${i}-dash`}>|</div>
              </>
            ))}
          </div>
        </div>
        <div className="h-12" />
        <div className="flex items-center justify-center">
          <div className="w-[60%] aspect-[16/9] bg-chalk rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;

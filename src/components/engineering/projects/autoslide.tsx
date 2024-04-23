const NavcarePage = () => {
  return (
    <div className="w-full h-ful text-dusk">
      <div className="text-7xl font-semibold"> autoslide </div>
      <div className="h-1 my-2 bg-dusk w-full" />
    </div>
  );
};

const autoslideDetails = {
  name: "Autoslide",
  year: "2021",
  display: <NavcarePage />,
};

export default autoslideDetails;

import useFetchPackages from "../../hooks/useFetchPackage";
import { PackageContainer } from "./Packages.style";

function Packages() {
  const { packages, error, loading } = useFetchPackages();

  return (
    <PackageContainer loc="PackageContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      {packages && packages?.map((my_package) => console.log(my_package))}
    </PackageContainer>
  );
}

export default Packages;

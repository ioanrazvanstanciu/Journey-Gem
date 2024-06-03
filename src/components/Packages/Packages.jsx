import useFetchPackages from "../../hooks/useFetchPackage";
import { PackageContainer } from "./Packages.style";
import PackageCard from "./PackageCard/PackageCard";

function Packages() {
  const { packages, error, loading } = useFetchPackages();

  return (
    <PackageContainer loc="PackageContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, server is down.</div>}
      {packages &&
        packages?.map((my_package) => (
          <PackageCard key={my_package.tara} {...my_package} />
        ))}
    </PackageContainer>
  );
}

export default Packages;

import useFetchPackages from "../../hooks/useFetchPackage";
import { PackageContainer } from "./Reserved.style";
import ReservedCard from "./ReservedCard/ReservedCard";

function Reserved() {
  const { packages, error, loading  } = useFetchPackages("?este_rezervat=1");
 console.log(packages);
  return (
    <PackageContainer loc="PackageContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, server is down.</div>}
      {packages &&
        packages?.map((my_package) => (
          <ReservedCard key={my_package.tara} {...my_package} />
        ))}
    </PackageContainer>
  );
}

export default Reserved;
import { useEffect } from "react";
import useFetchPackages from "../../hooks/useFetchPackage";
import { PackageContainer } from "./Reserved.style";
import ReservedCard from "./ReservedCard/ReservedCard";

function Reserved() {
  const { packages, error, loading } = useFetchPackages();

  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("reloaded");
    }
  }, []);

  const reservedPackages = packages?.filter(
    (my_package) => my_package.este_rezervat === 1
  );

  return (
    <PackageContainer loc="PackageContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, server is down.</div>}
      {reservedPackages && reservedPackages.length > 0
        ? reservedPackages.map((my_package) => (
            <ReservedCard key={my_package.tara} {...my_package} />
          ))
        : !loading && <div>No reserved packages found.</div>}
    </PackageContainer>
  );
}

export default Reserved;

import useFetchPackages from "./../../hooks/useFetchPackage";
import { PackageContainer } from "./EditDelete.style";
import EditDeleteSingleCard from "./EditDeleteSingleCard/EditDeleteSingleCard";

function EditDelete() {
  const { packages, error, loading } = useFetchPackages();

  return (
    <PackageContainer loc="PackageContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error} Error on getting data, server is down.</div>}
      {packages &&
        packages?.map((my_package) => (
          <EditDeleteSingleCard key={my_package.tara} {...my_package} />
        ))}
    </PackageContainer>
  );
}

export default EditDelete;

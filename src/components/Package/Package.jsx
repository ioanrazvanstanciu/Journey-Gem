import { useParams } from "react-router-dom";
import {
  PackageContainer,
  PackageDetailsImageContainer,
  PackageDetailsImage,
  PackageAllDetails,
  PackageAllDetailsLinieDetaliu,
  PackageAllDetailsAntet,
  PackageAllDetailsValoare,
  ReserveButton,
} from "./Package.style";
import useFetchPackages from "../../hooks/useFetchPackage";

function Package() {
  const { id } = useParams();
  const { packages: my_package, error, loading } = useFetchPackages("/" + id);

  return (
    <PackageContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {my_package && (
        <>
          <PackageDetailsImageContainer>
            <PackageDetailsImage src={my_package.imagine_pachet} />
          </PackageDetailsImageContainer>
          <PackageAllDetails>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Tara: </PackageAllDetailsAntet>{" "}
              <PackageAllDetailsValoare>
                {my_package.tara}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Oras: </PackageAllDetailsAntet>{" "}
              <PackageAllDetailsValoare>
                {my_package.oras}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>
                Numar zile concediu:{" "}
              </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.nr_zile_concediu}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Zi check in: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.zi_check_in}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Zi check out: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.zi_check_out}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Numar persoane: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.nr_pers}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Mod transport: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.mod_transport}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Pret sejur: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.pret_sejur}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Moneda sejur: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.moneda_sejur}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
          </PackageAllDetails>
          <ReserveButton>Reserve package</ReserveButton>
        </>
      )}
    </PackageContainer>
  );
}

export default Package;

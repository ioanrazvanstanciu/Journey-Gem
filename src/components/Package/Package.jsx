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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const handleReservePackage = (pachetul_meu) => {
  let pachet_modificat = {
    ...pachetul_meu,
    este_rezervat: 1,
  };

  fetch(`http://localhost:3001/pachete/${pachet_modificat.id}`, {
    method: "PUT",
    body: JSON.stringify(pachet_modificat),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        await response.json();
        toast("Ai rezervat cu succes pachetul dorit!", {
          autoClose: 2500,
          onClose: () => {
            window.location.href = "/reserved-packages";
          },
        });
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("A aparut o eroare:", error);
      toast.error("Eroare la rezervarea pachetului!");
    });
};

export const isThisSpecificPackageReserved = (pachetul_meu) => {
  if (pachetul_meu.este_rezervat === 0) {
    return (
      <ReserveButton onClick={() => handleReservePackage(pachetul_meu)}>
        Reserve package!
      </ReserveButton>
    );
  } else {
    return (
      <p>
        <CheckCircleIcon />
        Reserved!
      </p>
    );
  }
};

function Package() {
  const { id } = useParams();
  const { packages: my_package, error, loading } = useFetchPackages("/" + id);

  return (
    <PackageContainer>
      <ToastContainer />
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
          <div>{isThisSpecificPackageReserved(my_package)}</div>
        </>
      )}
    </PackageContainer>
  );
}

export default Package;

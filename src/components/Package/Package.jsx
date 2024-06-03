import { useParams } from "react-router-dom";
import {
  CardImgContainer,
  CardInfoContainer,
  Text,
  UperText,
} from "../Packages/PackageCard/PackageCard.style";
import { PackageContainer, PackageImgSingle } from "./Package.style";
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
          <CardImgContainer>
            <PackageImgSingle src={my_package.imagine_pachet} />
          </CardImgContainer>
          <CardInfoContainer>
            <Text>
              <UperText>Tara: </UperText> {my_package.tara}
            </Text>
            <Text>
              <UperText>Oras: </UperText> {my_package.oras}
            </Text>
            <Text>
              <UperText>Numar zile concediu: </UperText>
              {my_package.nr_zile_concediu}
            </Text>
            <Text>
              <UperText>Zi check in: </UperText>
              {my_package.zi_check_in}
            </Text>
            <Text>
              <UperText>Zi check out: </UperText>
              {my_package.zi_check_out}
            </Text>
            <Text>
              <UperText>Numar persoane: </UperText>
              {my_package.nr_pers}
            </Text>
            <Text>
              <UperText>Mod transport: </UperText>
              {my_package.mod_transport}
            </Text>
            <Text>
              <UperText>Pret sejur: </UperText>
              {my_package.pret_sejur}
            </Text>
            <Text>
              <UperText>Moneda sejur: </UperText>
              {my_package.moneda_sejur}
            </Text>
          </CardInfoContainer>
        </>
      )}
    </PackageContainer>
  );
}

export default Package;

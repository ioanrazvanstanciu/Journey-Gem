import { useState } from "react";
import Select from "react-select";
import {
  CustomAddContainer,
  PentruPozaAntete,
  StilPentruPozaLink,
  CustomPackageImage,
  SubmitCustomPackageButton,
} from "./CustomAddUser.style";
import { styled } from "@mui/system";

import * as React from "react";
import PropTypes from "prop-types";
import { Button, buttonClasses } from "@mui/base/Button";

import dayjs from "dayjs";

import CustomNewNumberInput from "./CustomNewComponents/CustomNewNumperInput";
import CustomNewCheckInDate from "./CustomNewComponents/CustomNewCheckInDate";
import CustomNewCheckOutDate from "./CustomNewComponents/CustomNewCheckOutDate";
import CustomNewStringInput from "./CustomNewComponents/CustomNewStringInput";

import { ToastContainer, toast } from "react-toastify";

const InputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? "#C7D0DD" : "#1C2025"};
  background: ${theme.palette.mode === "dark" ? "#1C2025" : "#FFF"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#434D5B" : "#DAE2ED"};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };

  &:hover {
    border-color: #3399FF;
  }

  &:focus {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px #0072E5;
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <button
      {...other}
      ref={ref}
      style={{
        all: "unset",
        position: "relative",
        display: "inline-block",
        padding: "0",
        cursor: "pointer",
      }}
    >
      <svg width="150" height="50">
        <polygon points="0,50 0,0 150,0 150,50" className="bg" />
        <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
        <foreignObject x="0" y="0" width="150" height="50">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    </button>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

const CustomAddUser = () => {
  const [inputObject, setInputObject] = useState({
    tara: "",
    oras: "",
    imagine_pachet: "",
    nr_zile_concediu: "",
    zi_check_in: null,
    zi_check_out: null,
    nr_pers: "",
    mod_transport: "",
    pret_sejur: "",
    moneda_sejur: "",
    este_rezervat: 0,
  });

  const countriesData = {
    Romania: ["Bucharest", "Cluj-Napoca", "Iasi", "Timisoara", "Constanta"],
    France: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    Germany: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    Italy: ["Rome", "Milan", "Naples", "Turin", "Palermo"],
    Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza"],
    China: ["Beijing", "Shanghai", "Chongqing", "Tianjin", "Guangzhou"],
    India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"],
    Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    Canada: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
    "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"],
    Japan: ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka"],
    "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
    Mexico: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"],
    Argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"],
    "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
    Turkey: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"],
    Egypt: ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said"],
    Indonesia: ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang"],
    Nigeria: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt"],
    Sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås"],
    Netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
    Thailand: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hat Yai"]
  };
  
  const tari_indicativ = {
    Romania: "RO",
    France: "FR",
    Germany: "DE",
    Italy: "IT",
    Spain: "ES",
    "United States": "US",
    Brazil: "BR",
    China: "CN",
    India: "IN",
    Russia: "RU",
    Australia: "AU",
    Canada: "CA",
    "United Kingdom": "GB",
    Japan: "JP",
    "South Korea": "KR",
    Mexico: "MX",
    Argentina: "AR",
    "South Africa": "ZA",
    Turkey: "TR",
    "Saudi Arabia": "SA",
    Egypt: "EG",
    Indonesia: "ID",
    Nigeria: "NG",
    Sweden: "SE",
    Netherlands: "NL",
    Thailand: "TH"
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [imageLink, setImageLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [nrZileConcediu, setNrZileConcediu] = useState(null);

  const [ziCheckIn, setZiCheckIn] = useState(dayjs().format("DD.MM.YYYY"));

  const [ziCheckOut, setZiCheckOut] = useState(dayjs().format("DD.MM.YYYY"));

  const [nrPersoane, setNrPersoane] = useState(null);

  const [modTransport, setModTransport] = useState("");

  const [pretPerNoapte, setPretPerNoapte] = useState(null);

  const [monedaSejur, setMonedaSejur] = useState("");

  const [contor, setContor] = useState(0);
  const [trebuieAfisataPoza, setTrebuieAfisataPoza] = useState(1);

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleToggleImage = () => {
    setContor((prevContor) => {
      const newCount = prevContor + 1;
      if (newCount % 2 !== 0) {
        setTrebuieAfisataPoza(0);
        setImageUrl(imageLink);
      } else {
        setTrebuieAfisataPoza(1);
        setImageUrl("");
      }
      return newCount;
    });
  };

  const countryOptions = Object.entries(tari_indicativ).map(
    ([country, code]) => ({
      label: country,
      value: country,
      flagUrl: `https://flagcdn.com/16x12/${code.toLowerCase()}.png`,
    })
  );

  const cityOptions = selectedCountry
    ? countriesData[selectedCountry.value].map((city) => ({
        label: city,
        value: city,
      }))
    : [];

  const formatOptionLabel = ({ label, flagUrl }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={flagUrl}
        alt={`${label} flag`}
        style={{ marginRight: 10, width: 20, height: 15 }}
      />
      {label}
    </div>
  );

  return (
    <CustomAddContainer>
      <div
        style={{
          textAlign: "center",
          fontWeight: "600",
          textDecoration: "underline",
        }}
      >
        Let's customize your own package! Complete the fields below step by step
      </div>
      {/* TARA */}
      <div>
        <label htmlFor="country-select">
        Select the country for the desired package:
        </label>
        <Select
          id="country-select"
          value={selectedCountry}
          onChange={setSelectedCountry}
          options={countryOptions}
          formatOptionLabel={formatOptionLabel}
          placeholder="Select a country"
          isClearable
        />
      </div>

      {/* ORAS */}
      {selectedCountry && (
        <div>
          <label htmlFor="city-select">Select the desired city:</label>
          <Select
            id="city-select"
            value={selectedCity}
            onChange={setSelectedCity}
            options={cityOptions}
            placeholder="Select a city"
            isClearable
          />
        </div>
      )}

      {/* IMAGINE PACHET */}
      {selectedCity && (
        <div>
          <PentruPozaAntete>
            <label htmlFor="image-url">
            Enter the link for the picture of the desired package:
            </label>
            <InputElement
              value={imageLink}
              onChange={handleImageLinkChange}
              placeholder="Type image URL…"
              type="text"
            />

            <SvgButton onClick={handleToggleImage}>
              {trebuieAfisataPoza === 1 && (
                <div style={{ textAlign: "center" }}>
                 Display the chosen image
                </div>
              )}
              {trebuieAfisataPoza === 0 && (
                <div style={{ textAlign: "center" }}>
                 Hide the selected image
                </div>
              )}
            </SvgButton>
          </PentruPozaAntete>
          {imageUrl && (
            <StilPentruPozaLink>
              <CustomPackageImage
                src={imageUrl}
                alt="Incorrect image url"
              />
            </StilPentruPozaLink>
          )}
        </div>
      )}

      {/* NR ZILE CONCEDIU */}
      {contor > 0 && (
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            How many days do you plan to stay?
          </div>
          <div>
            <CustomNewNumberInput
              nr={nrZileConcediu}
              setNr={setNrZileConcediu}
            />
          </div>
        </div>
      )}

      {/* ZI CHECK IN */}
      {nrZileConcediu && (
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <CustomNewCheckInDate
            ziCheckIn={ziCheckIn}
            setZiCheckIn={setZiCheckIn}
          />
        </div>
      )}

      {/* ZI CHECK OUT */}
      {nrZileConcediu && (
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <CustomNewCheckOutDate
            ziCheckOut={ziCheckOut}
            setZiCheckOut={setZiCheckOut}
          />
        </div>
      )}

      {/* NR PERSOANE */}
      {nrZileConcediu > 0 && (
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
           Enter the number of people:
          </div>
          <div>
            <CustomNewNumberInput nr={nrPersoane} setNr={setNrPersoane} />
          </div>
        </div>
      )}

      {/* MOD TRANSPORT */}
      {nrPersoane > 0 && (
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
           Enter the mode of transport:
          </div>
          <div>
            <CustomNewStringInput
              myString={modTransport}
              setMyString={setModTransport}
              myLabel={"Modalitatea de transport"}
            />
          </div>
        </div>
      )}

      {/* PRET SEJUR */}
      {modTransport && (
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
           Enter the price of one night's accommodation:
          </div>
          <div>
            <CustomNewNumberInput nr={pretPerNoapte} setNr={setPretPerNoapte} />
          </div>
        </div>
      )}
      {pretPerNoapte > 0 && (
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          The price of the stay is {(nrZileConcediu - 1) * pretPerNoapte}
        </div>
      )}

      {/* MONEDA SEJUR */}
      {pretPerNoapte > 0 && (
        <div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            Enter the currency for the stay:
          </div>
          <div>
            <CustomNewStringInput
              myString={monedaSejur}
              setMyString={setMonedaSejur}
              myLabel={"Moneda pentru sejur"}
            />
          </div>
        </div>
      )}

      {/* BUTON PENTRU SUBMIT */}
      {monedaSejur && (
        <div>
          <SubmitCustomPackageButton
            onClick={() => {
              {
                /* REALIZEZ POST IN DB JSON */
              }
              fetch(`http://localhost:3001/pachete`, {
                method: "POST",
                body: JSON.stringify({
                  ...inputObject,
                  tara: selectedCountry.value,
                  oras: selectedCity.value,
                  imagine_pachet: imageLink,
                  nr_zile_concediu: nrZileConcediu,
                  zi_check_in: ziCheckIn,
                  zi_check_out: ziCheckOut,
                  nr_pers: nrPersoane,
                  mod_transport: modTransport,
                  pret_sejur: (nrZileConcediu - 1) * pretPerNoapte,
                  moneda_sejur: monedaSejur,
                  este_rezervat: 0,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    toast("Your custom package has just been added!", {
                      autoClose: 2500,
                      onClose: () => {
                        window.location.href = "/all-packages";
                      },
                    });
                  } else {
                    throw new Error("Network response was not ok");
                  }
                })
                .catch((error) => {
                  console.error("An error occurred:", error);
                  toast.error("Error adding your custom package!");
                });
            }}
          >
            Submit custom package
          </SubmitCustomPackageButton>
        </div>
      )}

      {/* TOASTER PENTRU NOTIFICARI */}
      <ToastContainer />
    </CustomAddContainer>
  );
};

export default CustomAddUser;

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? blue[600] : blue[200]};
  --hover-color: ${theme.palette.mode === "light" ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === "light" ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === "dark" ? blue[700] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 4px;
    }
  }`
);

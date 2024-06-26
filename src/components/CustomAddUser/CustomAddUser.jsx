import { useState } from "react";
import Select from "react-select";
import {
  CustomAddContainer,
  PentruPozaAntete,
  StilPentruPozaLink,
} from "./CustomAddUser.style";
import { styled } from "@mui/system";

import * as React from "react";
import PropTypes from "prop-types";
import { Button, buttonClasses } from "@mui/base/Button";

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
  const countriesData = {
    Romania: ["Bucharest", "Cluj-Napoca", "Iasi", "Timisoara", "Constanta"],
    France: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    Germany: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    Italy: ["Rome", "Milan", "Naples", "Turin", "Palermo"],
    Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
    ],
    Brazil: [
      "São Paulo",
      "Rio de Janeiro",
      "Brasilia",
      "Salvador",
      "Fortaleza",
    ],
    China: ["Beijing", "Shanghai", "Chongqing", "Tianjin", "Guangzhou"],
    India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"],
    Russia: [
      "Moscow",
      "Saint Petersburg",
      "Novosibirsk",
      "Yekaterinburg",
      "Nizhny Novgorod",
    ],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    Canada: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
    "United Kingdom": [
      "London",
      "Birmingham",
      "Manchester",
      "Glasgow",
      "Liverpool",
    ],
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
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [imageLink, setImageLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
        Completati pas cu pas campurile de mai jos
      </div>
      {/* TARA */}
      <div>
        <label htmlFor="country-select">
          Selectati tara pentru pachetul dorit:
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
          <label htmlFor="city-select">Selectati orasul dorit:</label>
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
              Introduceti linkul pentru poza pachetului dorit:
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
                  Afisati imaginea aleasa
                </div>
              )}
              {trebuieAfisataPoza === 0 && (
                <div style={{ textAlign: "center" }}>
                  Ascundeti imaginea aleasa
                </div>
              )}
            </SvgButton>
          </PentruPozaAntete>
          {imageUrl && (
            <StilPentruPozaLink>
              <img
                src={imageUrl}
                alt="Nu s-a introdus corect poza"
                style={{ width: "75%", height: "auto", borderRadius: "10px" }}
              />
            </StilPentruPozaLink>
          )}
        </div>
      )}

      {/* NR ZILE CONCEDIU */}
      {contor > 0 && <div>Acum trb ales nr zile concediu</div>}
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

import React from "react";
import Header from "../containers/header";
import { shallow, mount } from "enzyme";
import { setAuthentification } from "../constants";
import AuthentificationReducer from "../reducers/authentification";
import {
  SET_AUTHENTIFICATION,
  INCREMENT_ACTION_COUNT
} from "../constants/action-types";
import RootTest from "./root-test";
import { incrementActionCount } from "../constants";

describe("Test sur Header", () => {
  it(" Render du composant connecté sans erreur", () => {
    const wrapper = shallow(
      <RootTest>
        <Header />
      </RootTest>
    );
  });
});


import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Temperature } from "./../../../src/models/temperature/temperature.model";
import {window } from "./../../window"


describe('Temperature', () => {

    let temperature;

    //Avant chaque IT le beforeEach sera invoqué
    beforeEach(() => {
        temperature = new Temperature({ //On fait notre déclaration ici afin de ne pas le déclarer à chaque fois
            exist: undefined
        });
    });

    // Description du test unitaire
    it("Temperature contain 0", () => {
        assert.equal(temperature.get("temperature"), 0);
    });

    it("min contain 0", () => {
        assert.equal(temperature.get("min"), 0);
    });

    it("max contain 0", () => {
        assert.equal(temperature.get("max"), 0);
    });

});

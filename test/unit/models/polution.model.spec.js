
import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Polution } from "./../../../src/models/polution/polution.model";
import {window } from "./../../window"


describe('Polution', () => {

    let polution;

    //Avant chaque IT le beforeEach sera invoqué
    beforeEach(() => {
        polution = new Polution({ //On fait notre déclaration ici afin de ne pas le déclarer à chaque fois
            exist: undefined
        });
    });

    // Description du test unitaire
    it("aqi contain 0", () => {
        assert.equal(polution.get("aqi"), 0);
    });

    it("pm contain 0", () => {
        assert.equal(polution.get("pm"), 0);
    });

    it("ozone contain 0", () => {
        assert.equal(polution.get("ozone"), 0);
    });
    

});

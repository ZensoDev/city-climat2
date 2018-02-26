
import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import {window } from "./../../window"

var model = new Model;

describe('Model', () => {

    let model;

    //Avant chaque IT le beforeEach sera invoqué
    beforeEach(() => {
        model = new Model({ //On fait notre déclaration ici afin de ne pas le déclarer à chaque fois
            exist: undefined
        });
    });

    // Description du test unitaire
    it("getObservers returns an Array", () => {
        assert.isArray(model.getObservers());
    });

    it("Setter do not mute property if not exist", () => {
        let value = true;
        model.set("foo", value);
        assert.equal(model.get("foo"), undefined);
    });

    it("setter mute property", () => {
        let value = true;
        model.set("exist", value);
        assert.equal(model.get("exist"), value);
    });

    it("Getter retrieve default value if property is undefined or don't exists", () => {
        let value = "Default value";
        assert.equal(model.get("exist", value), value);
    });

    it("Getter retrieve default value if property don't exists", () => {
        let value = "Default value";
        assert.equal(model.get("foo", value), value);
    });

    //the window problem
    it("toString get Json representation of model property", () => {
        assert.equal(model.toString(), "{}")
    });

    it("notify call binded callback", () => {
        let called = false;
        let callback = () => {
            called = true;
        }
        model.bind(callback);
        model.notify();
        assert.equal(called, true);
    });

});

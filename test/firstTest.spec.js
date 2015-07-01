import {expect} from "chai";
import TODO from "../src/js/index.js";

describe("TODO", () => {
    describe("sayHellow", () => {
        it("should say Hello", function () {
            // Given
            const obj = new TODO();

            // When

            // Then
            expect(obj.sayHello()).to.equal("Hello");
        });
    });
});
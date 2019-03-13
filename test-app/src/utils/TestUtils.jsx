import * as React from 'react';
import { mount } from 'enzyme';

class TestFixtureOptions {
    preshallow;
    postshallow;
}

export class TestUtils {
    static instance;
    static wrapper;
    /**
     * Sets the environment for the tests
     * @param Component: component to be loaded
     * @param props: properties to be passed into the component
     * @param {TestFixtureOptions} options options for the test set up.
     *          @param options_preshallow: no-params function to be called before the component is mounted.
     *          @param options_postshallow: function to call after the component is called, it receives the wrapped element and the props used as paraemeters.
     */
    static fixture(Component, props, options) {
        this.instance = new TestUtils();
        beforeEach(() => {
            if (options && options.preshallow) {
                options.preshallow();
            }
            this.instance.wrapper = mount(<Component {...props} />);         
            if (options && options.postshallow) {
                options.postshallow(this.instance.wrapper, props);
            }

        });
        afterAll(() => {
            this.instance = undefined;
        });
    }

    /**
     * Checks whether the given element is truthy
     * @param target: object to check.
     */
    static truthy(target) {
        expect(target).toBeTruthy();
    }

    /**
     * Checks whether element inside the wrapped element has a specific value inside its props.
     * @param selector: a selector to find the element inside the wrapper using enzyme's find.
     * @param property: name of the property inside the props that should be checked.
     * @param expected: either an object or a function. If "expected" is an object, this function will check that the property specified by "property" is equal to the object passed.
     * If "expected" is a function receiving the property, then it should return a boolean when the property value matches the condition.
     */
    static propIs(selector, property, expected) {
        if (expected instanceof Function) {
            expect(expected(this.instance.wrapper.find(selector).first().props()[property])).toBe(true);
        } else {
            expect(this.instance.wrapper.find(selector).first().props()[property]).toBe(expected);
        }     
    }
    
    static globalPropIs(property, expected) {
        if (expected instanceof Function) {
            expect(expected(this.instance.wrapper.instance().props[property])).toBe(true);
        } else {
            expect(this.instance.wrapper.instance().props[property]).toBe(expected);
        }
    }
    /**
     * Checks whether the wrapped element has a specific value inside its state.
     * @param property: name of the property inside the state that should be checked.
     * @param expected: either an object or a function. If "expected" is an object, this function will check that the property specified by "property" is equal to the object passed.
     * If "expected" is a function receiving the property, then it should return a boolean when the property value matches the condition.
     */
    static stateIs(property, expected) {
        if (expected instanceof Function) {
            expect(expected(this.instance.wrapper.state()[property])).toBe(true);
        } else {
            expect(this.instance.wrapper.state()[property]).toBe(expected);
        }
    }

    /**
     * Checks whether element inside the wrapped element exists by checking it can be found, it exists at least one, and checking how many of them there are.
     * @param selector: a selector to find the element inside the wrapper using enzyme's find.
     * @param length: either an object or a function. If "length" is an object, this function will check that the wrapper has as many elements has specified.
     * If "length" is a function receiving the length, then it should return a boolean when the length value matches the condition defined for it.
     */
    static checkExistence(selector, length) {
        expect(this.instance.wrapper.find(selector)).toBeTruthy();
        expect(this.instance.wrapper.find(selector).first()).toBeTruthy();
        if (length instanceof Function) {
            expect(length(this.instance.wrapper.find(selector).length)).toBe(true);
        } else if (length) {
            expect(this.instance.wrapper.find(selector).length).toBe(length);
        }
    }

    /**
     * Checks whether element inside the wrapped element does not exists by checking it can not be found.
     * @param selector: a selector to find the element inside the wrapper using enzyme's find.
     */
    static checkAbsence(selector) {
        expect(this.instance.wrapper.find(selector).length).toBe(0);
    }

    /**
     * Mocks a function in an object with the given implementation.
     * @param object: object that should have its function replaced.
     * @param method: string containing the name of the funtion that should be replaced.
     * @param implementation: either an object or a function. If "implementation" is an object, then the function is set to return that object.
     * If "implementation" is not present, the the function is set to return an empty object {}.
     * If "implementation" is a function, then it should contain the replecement for the function that should be replaced.
     */
    static mockFunction(object, method, async = true, implementation) {
        let impl = implementation ? implementation : {};
        if (impl instanceof Function) {
            // const imp = <Function>impl;
            return jest.spyOn(object, method)
                .mockImplementation(implementation);
        } else {
            return jest.spyOn(object, method)
                .mockImplementation(() => async ? Promise.resolve(impl) : impl);

        }
    }
    /**
     * types in a input.
     * @param selector: a selector to find the element inside the wrapper using enzyme's find.
     * @param input: content that should be written in the input.
     */
    static type(selector, input, name) {
        let nombre = name ? name : this.instance.wrapper.find(selector).first().props().name;
        this.instance.wrapper.find(selector).first().simulate('change', { target: { name: nombre, value: input } });
    }
    /**
     * Simulates clicking in the submit button.
     * @param selector: a selector to find the element inside the wrapper using enzyme's find. 
     */
    static submit(selector) {
        const formulario = wrapper().find(selector);
        formulario.simulate('submit', { // simulamos click en el botón de submit.
            preventDefault: () => { /*nada*/ }
        });
    }

    /**
     * Mocks the localStorage
     * @param storage: the mock used for the localStorage, if "storage" is an object, the the localStorage object will be replaced with that object.
     * If storage is a function, then the method specified by "method" will be replaced with the function, all other functions will do nothing.
     * If storage is a function, but method is not specified the storage should be a function returning the localStorage object.
     * @param method: the name of the function to be replaced in the localStorage mocked. 
     */
    static mockStorage(storage, method) {
        let store;
        store = {
            getItem: (name) => { /*empty*/ },
            setItem: (name, value) => { /*empty*/ }
        };

        if (storage instanceof Function && method) {
            store[method] = storage;
        } else if (storage instanceof Function && !method) {
            store = storage();
        } else {
            store = undefined;
        }

        Object.defineProperty(window, 'localStorage', {
            value: store ? store : storage
        });
    }

}

/**
 * return the wrapped instance generated in the last fixture call.
 */
export function wrapper() {
    return TestUtils.instance === undefined ? undefined : TestUtils.instance.wrapper;
} 
import { TestUtils, wrapper } from '../../utils/TestUtils';
import Test3 from './Test3';

// Using Juanlu's library

describe('Test3', () => {
    const myMockFunction = jest.fn();
    let props = {
        apiTestCallError: myMockFunction,
        apiTestCallSucess: myMockFunction,
        iniApiTestCall: myMockFunction
    };

    TestUtils.fixture(Test3, props, {
        preshallow: () => {
            // Esta funcion se llamará justo antes de montar el componente, si no hiciera nada, podría omitirse
        },
        postshallow: () => {
            // Esta funcion se llamará tras montar el componente, si no hace nada, como en este caso, podría omitirse
        }
    });

    it('It loads properly', () => {
        TestUtils.truthy(wrapper());
    });

    it('It has an structure', () => {
        TestUtils.checkExistence('h2', 3);
    });

});

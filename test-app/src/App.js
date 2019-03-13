import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PATH_EMPTY, PATH_TEST_1, PATH_TEST_2, PATH_TEST_3, PATH_TEST_4, PATH_TEST_5} from './constants';
import Menu from './components/menu/Menu';
import Test1 from './containers/test1/Test1';
import Test2 from './components/test2/Test2';
import Test3 from './containers/test3/Test3';
import Test4 from './components/test4/Test4';
import Test5 from './components/test5/Test5';

class App extends Component {

    render() {
        return (
          <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path={PATH_EMPTY}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test1 />} />
                        )
                    }
                />
                <Route
                    path={PATH_TEST_1}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test1 />} />
                        )
                    }
                />
                <Route
                    path={PATH_TEST_2}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test2 />} />
                        )
                    }
                />
                <Route
                    path={PATH_TEST_3}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test3 />} />
                        )
                    }
                />
                <Route
                    path={PATH_TEST_4}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test4 />} />
                        )
                    }
                />
                <Route
                    path={PATH_TEST_5}
                    component={(props) =>
                        (
                            <Menu {...props} child={<Test5 />} />
                        )
                    }
                />
            </Switch>
          </BrowserRouter>
        );
    }

}

export default App;
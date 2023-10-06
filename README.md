# Getting Started with Create React App

```
npx create-react-app product-app --template typescript
```


# OOP VS Functional

C#/c++/...

class Calculator {
    int state = 0; // STATE
    int add (int value) {
        this.state += value; // STATE MUTATION
        return this.state;
    }
}

calc = new Calculator()
calc.add(10) // 10
calc.add(10) // 20
calc.add(10);

calc.add(10);
calc.add(10);
calc.add(10);
calc.add(10);
calc.add(5);
calc.add(10);
calc.add(20);
calc.add(10);
calc.add(10);
calc.add(10);
calc.add(10);
calc.add(10); // unpredictable
calc.add(10);

// FP
// Pure function, given same input, always expect same output
function add(state, value) {
    return state + value
}

add(10, 20) // 30
add(10, 20) // 30


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


REDUX FLOW

 created the store
    initial state ps {products: [], loading: false, error: false}



    component PRoductList.tsx
    Container ProductList.ts [use the container]
                mapStateToProps - get data from store, pass to component as props
                mapDispatchToProps - pass the dispatcher functions to the component so 
                                    that component can dispatch to store

                need store, store is passed via Provider using react context
                index.tsx
                        <Provider store={store}> managed by react-redux bridge
                                <App>   
                                    <ProducerListContainer> <-- store is obtained via react context, managed by react-redux bridge library

    created a container using all together

        ProductList render called with default data from store
            products: is empty array []

            useEffect called after component initialized
                dispatch the thunk getProductsThunk
                thunk intercept getProductsThunk action, calls the thunk function for async call

                on the thunk, we make api call
                get products data
                use initPRoducts action to initialize products in store

                now container notice that there was a dispatch, data change for products with data

                container calls the PRoductList component render with 94 products

                then products are listed..

                but on the second update, useEffect is not called
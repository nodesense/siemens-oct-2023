// es5
export default function loggerMiddleware(store:any) {
    console.log ("Logger Middleware store")
    return function (next: any) {
        console.log("Logger middleware next")
        
        return function (action: any) {
            console.log("Logger middleware dispatched action ", action)

            return next(action) // forward the action to next middleware
        }
    }
}

export const loggerMiddleware2 = (store: any) => (next: any) => (action: any) => next(action)

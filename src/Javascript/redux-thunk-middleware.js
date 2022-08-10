// https://daveceddia.com/what-is-a-thunk/
// https://en.wikipedia.org/wiki/Thunk

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    // This gets called for every action you dispatch.
    // If it's a function, call it.
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    // Otherwise, just continue processing this action as usual
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

// After you install redux-thunk in your project, and apply the middleware,
// every action you dispatch will pass through this bit of code.
// It calls actions that are functions (and returns whatever they return),
// and otherwise passes the action along to then next middleware,
// or to Redux itself (which is what next(action) does).

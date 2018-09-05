import authReducer from '../../reducers/auth';

test('should test default value', () => {
    const state = authReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({});
})


test('should test login case', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);    
})

test('should test logout case', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: '123'}, action);
    expect(state).toEqual({});
})
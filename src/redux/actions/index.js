// @flow

export interface IActionType {
  type: string;
  payload: any;
}

export const ACTION = {
  CHANGE_TEXT: 'CHANGE_TEXT',
  ASYNC_NUMBER: "ASYNC_NUMBER",
  CLEAR_NUMBER: 'CLEAR_NUMBER'
};

export const changeText = (text: string): IActionType => ({ type: ACTION.CHANGE_TEXT, payload: text });
export const addNumberAsync = (num: number): IActionType => ({ type: ACTION.ASYNC_NUMBER, payload: num });
export const clearNumberAsync = (): IActionType => ({type: ACTION.CLEAR_NUMBER, payload: 0});

export const getAsyncNumber = () => (async (dispatch) => {
  try {
    const num = await getNumber();
    await console.log(num);
    dispatch(addNumberAsync(num))
  } catch (error) {
    console.error(error.toLocaleString());
    dispatch(clearNumberAsync());
  }
});

const getNumber = () => (
  new Promise(resolve => setTimeout(() => {
    resolve(Math.random())
  }, 3000))
);
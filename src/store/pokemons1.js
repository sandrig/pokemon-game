import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'pokemons1',
  initialState: {
    data: {},
  },
  reducers: {
    setPokemons1: (state, action) => {
      if (state.data[action.payload.key]) {
        const copyStateData = { ...state.data }
        delete copyStateData[action.payload.key]

        return {
          ...state,
          data: copyStateData,
        }
      }

      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.pokemon,
        },
      }
    },
  },
})

export const { setPokemons1 } = slice.actions
export const selectPokemons1Data = state => state.pokemons1.data

export default slice.reducer

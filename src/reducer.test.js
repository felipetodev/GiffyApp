import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './reducer'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    act(() => {
        result.current.updateKeyword('naruto')
    })

    expect(result.current.keyword).toBe('naruto')
})

test('should use initial values', () => {
    const { result } = setup({
        initialKeyword: 'sasuke'
    })

    expect(result.current.keyword).toBe('sasuke')
})

test('should update correctly times when used twice', () => {
    const { result } = setup({
        initialKeyword: 'sasuke'
    })

    act(() => {
        result.current.updateKeyword('n')
        result.current.updateKeyword('na')
    })

    expect(result.current.keyword).toBe('na')
    expect(result.current.times).toBe(2)
})
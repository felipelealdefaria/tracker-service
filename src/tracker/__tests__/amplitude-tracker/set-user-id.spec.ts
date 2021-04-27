import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setUserId function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setUserIdSpy = jest.spyOn(amplitude, 'setUserId').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = amplitude.setUserId(mock?.userId)

    expect(res).toEqual({ success: true })
    expect(setUserIdSpy).toHaveBeenCalledWith(mock?.userId)
  })

  test('Should to have be called setUserId function with error response', () => {
    const { amplitude } = makeSut()
    const setUserIdSpy = jest.spyOn(amplitude, 'setUserId').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = amplitude.setUserId(mock?.userId)

    expect(res).toEqual({ error: true })
    expect(setUserIdSpy).toHaveBeenCalledWith(mock?.userId)
  })
})

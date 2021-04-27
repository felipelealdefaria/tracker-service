import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called init function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const initResolveSpy = jest.spyOn(amplitude, 'init').mockImplementation(() => ({ success: true }))

    const { apiKey, userId, options, callback } = mock
    const res: StatusResponse = amplitude.init({ apiKey, userId, options, callback })

    expect(res).toEqual({ success: true })
    expect(initResolveSpy).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })

  test('Should to have be called init function with error response', () => {
    const { amplitude } = makeSut()
    const initRejectSpy = jest.spyOn(amplitude, 'init').mockImplementation(() => ({ error: true }))

    const { apiKey, userId, options, callback } = mock
    const res: StatusResponse = amplitude.init({ apiKey, userId, options, callback })

    expect(res).toEqual({ error: true })
    expect(initRejectSpy).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })
})

import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called init function with correct params and correct response', () => {
    const { track } = makeSut()
    const initResolveSpy = jest.spyOn(track, 'init').mockImplementation(() => ({ success: true }))

    const { apiKey, userId, options, callback } = mock
    const res: StatusResponse = track.init({ apiKey, userId, options, callback })

    expect(res).toEqual({ success: true })
    expect(initResolveSpy).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })

  test('Should to have be called init function with error response', () => {
    const { track } = makeSut()
    const initRejectSpy = jest.spyOn(track, 'init').mockImplementation(() => ({ error: true }))

    const { apiKey, userId, options, callback } = mock
    const res: StatusResponse = track.init({ apiKey, userId, options, callback })

    expect(res).toEqual({ error: true })
    expect(initRejectSpy).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })
})

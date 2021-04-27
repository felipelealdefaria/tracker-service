import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called log function with correct params and correct response', () => {
    const { track } = makeSut()
    const logResolveSpy = jest.spyOn(track, 'log').mockImplementation(() => ({ success: true }))

    const { eventName, eventProperties, callback } = mock
    const res: StatusResponse = track.log({ eventName, eventProperties, callback })

    expect(res).toEqual({ success: true })
    expect(logResolveSpy).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })

  test('Should to have be called log function with error response', () => {
    const { track } = makeSut()
    const logRejectSpy = jest.spyOn(track, 'log').mockImplementation(() => ({ error: true }))

    const { eventName, eventProperties, callback } = mock
    const res: StatusResponse = track.log({ eventName, eventProperties, callback })

    expect(res).toEqual({ error: true })
    expect(logRejectSpy).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })
})

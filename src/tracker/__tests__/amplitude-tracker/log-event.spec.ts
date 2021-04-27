import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called logEvent function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const logResolveSpy = jest.spyOn(amplitude, 'logEvent').mockImplementation(() => ({ success: true }))

    const { eventName, eventProperties, callback } = mock
    const res: StatusResponse = amplitude.logEvent({ eventName, eventProperties, callback })

    expect(res).toEqual({ success: true })
    expect(logResolveSpy).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })

  test('Should to have be called logEvent function with error response', () => {
    const { amplitude } = makeSut()
    const logRejectSpy = jest.spyOn(amplitude, 'logEvent').mockImplementation(() => ({ error: true }))

    const { eventName, eventProperties, callback } = mock
    const res: StatusResponse = amplitude.logEvent({ eventName, eventProperties, callback })

    expect(res).toEqual({ error: true })
    expect(logRejectSpy).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })
})

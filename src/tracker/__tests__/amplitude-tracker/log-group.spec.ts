import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called logGroup function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const logGroupSpy = jest.spyOn(amplitude, 'logGroup').mockImplementation(() => ({ success: true }))

    const { eventName, eventProperties, groups, callback } = mock
    const res: StatusResponse = amplitude.logGroup({ eventName, eventProperties, groups, callback })

    expect(res).toEqual({ success: true })
    expect(logGroupSpy).toHaveBeenCalledWith({ eventName, eventProperties, groups, callback })
  })

  test('Should to have be called logGroup function with error response', () => {
    const { amplitude } = makeSut()
    const logGroupSpy = jest.spyOn(amplitude, 'logGroup').mockImplementation(() => ({ error: true }))

    const { eventName, eventProperties, groups, callback } = mock
    const res: StatusResponse = amplitude.logGroup({ eventName, eventProperties, groups, callback })

    expect(res).toEqual({ error: true })
    expect(logGroupSpy).toHaveBeenCalledWith({ eventName, eventProperties, groups, callback })
  })
})

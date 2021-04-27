import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called logGroup function with correct params and correct response', () => {
    const { track } = makeSut()
    const logGroupSpy = jest.spyOn(track, 'logGroup').mockImplementation(() => ({ success: true }))

    const { eventName, eventProperties, groups, callback } = mock
    const res: StatusResponse = track.logGroup({ eventName, eventProperties, groups, callback })

    expect(res).toEqual({ success: true })
    expect(logGroupSpy).toHaveBeenCalledWith({ eventName, eventProperties, groups, callback })
  })

  test('Should to have be called logGroup function with error response', () => {
    const { track } = makeSut()
    const logGroupSpy = jest.spyOn(track, 'logGroup').mockImplementation(() => ({ error: true }))

    const { eventName, eventProperties, groups, callback } = mock
    const res: StatusResponse = track.logGroup({ eventName, eventProperties, groups, callback })

    expect(res).toEqual({ error: true })
    expect(logGroupSpy).toHaveBeenCalledWith({ eventName, eventProperties, groups, callback })
  })
})

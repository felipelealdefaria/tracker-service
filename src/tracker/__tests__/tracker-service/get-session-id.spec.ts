import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { SessionIdResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called getSessionId function with correct params and correct response', () => {
    const { track } = makeSut()
    const mockSessionId: number = mock?.sessionId
    const getSessionIdSpy = jest.spyOn(track, 'getSessionId').mockImplementation(() => ({ success: true, sessionId: mockSessionId }))
    const res: SessionIdResponse = track.getSessionId()

    expect(res).toEqual({ success: true, sessionId: mockSessionId })
    expect(getSessionIdSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called getSessionId function with error response', () => {
    const { track } = makeSut()
    const mockSessionId: number = mock?.sessionId
    const getSessionIdSpy = jest.spyOn(track, 'getSessionId').mockImplementation(() => ({ error: true, sessionId: mockSessionId }))
    const res: SessionIdResponse = track.getSessionId()

    expect(res).toEqual({ error: true, sessionId: mockSessionId })
    expect(getSessionIdSpy).toHaveBeenCalledWith()
  })
})

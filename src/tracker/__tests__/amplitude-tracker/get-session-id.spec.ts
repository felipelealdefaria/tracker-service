import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { SessionIdResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called getSessionId function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const mockSessionId: number = mock?.sessionId
    const getSessionIdSpy = jest.spyOn(amplitude, 'getSessionId').mockImplementation(() => ({ success: true, sessionId: mockSessionId }))
    const res: SessionIdResponse = amplitude.getSessionId()

    expect(res).toEqual({ success: true, sessionId: mockSessionId })
    expect(getSessionIdSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called getSessionId function with error response', () => {
    const { amplitude } = makeSut()
    const mockSessionId: number = mock?.sessionId
    const getSessionIdSpy = jest.spyOn(amplitude, 'getSessionId').mockImplementation(() => ({ error: true, sessionId: mockSessionId }))
    const res: SessionIdResponse = amplitude.getSessionId()

    expect(res).toEqual({ error: true, sessionId: mockSessionId })
    expect(getSessionIdSpy).toHaveBeenCalledWith()
  })
})

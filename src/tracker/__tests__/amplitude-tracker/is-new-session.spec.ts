import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { NewSessionResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called isNewSession function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const mockIsNewSession: boolean = mock?.isNewSession
    const isNewSessionSpy = jest.spyOn(amplitude, 'isNewSession').mockImplementation(() => ({ success: true, isNewSession: mockIsNewSession }))
    const res: NewSessionResponse = amplitude.isNewSession()

    expect(res).toEqual({ success: true, isNewSession: mockIsNewSession })
    expect(isNewSessionSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called isNewSession function with error response', () => {
    const { amplitude } = makeSut()
    const isNewSessionSpy = jest.spyOn(amplitude, 'isNewSession').mockImplementation(() => ({ error: true, isNewSession: null }))
    const res: NewSessionResponse = amplitude.isNewSession()

    expect(res).toEqual({ error: true, isNewSession: null })
    expect(isNewSessionSpy).toHaveBeenCalledWith()
  })
})

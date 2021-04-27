import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { NewSessionResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called isNewSession function with correct params and correct response', () => {
    const { track } = makeSut()
    const mockIsNewSession: boolean = mock?.isNewSession
    const isNewSessionSpy = jest.spyOn(track, 'isNewSession').mockImplementation(() => ({ success: true, isNewSession: mockIsNewSession }))
    const res: NewSessionResponse = track.isNewSession()

    expect(res).toEqual({ success: true, isNewSession: mockIsNewSession })
    expect(isNewSessionSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called isNewSession function with error response', () => {
    const { track } = makeSut()
    const isNewSessionSpy = jest.spyOn(track, 'isNewSession').mockImplementation(() => ({ error: true, isNewSession: null }))
    const res: NewSessionResponse = track.isNewSession()

    expect(res).toEqual({ error: true, isNewSession: null })
    expect(isNewSessionSpy).toHaveBeenCalledWith()
  })
})

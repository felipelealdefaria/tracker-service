import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setUserId function with correct params and correct response', () => {
    const { track } = makeSut()
    const setUserIdSpy = jest.spyOn(track, 'setUserId').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = track.setUserId(mock?.userId)

    expect(res).toEqual({ success: true })
    expect(setUserIdSpy).toHaveBeenCalledWith(mock?.userId)
  })

  test('Should to have be called setUserId function with error response', () => {
    const { track } = makeSut()
    const setUserIdSpy = jest.spyOn(track, 'setUserId').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = track.setUserId(mock?.userId)

    expect(res).toEqual({ error: true })
    expect(setUserIdSpy).toHaveBeenCalledWith(mock?.userId)
  })
})

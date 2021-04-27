import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called clearUserProperties function with correct params and correct response', () => {
    const { track } = makeSut()
    const clearUserPropertiesSpy = jest.spyOn(track, 'clearUserProperties').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = track.clearUserProperties()

    expect(res).toEqual({ success: true })
    expect(clearUserPropertiesSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called clearUserProperties function with error response', () => {
    const { track } = makeSut()
    const clearUserPropertiesSpy = jest.spyOn(track, 'clearUserProperties').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = track.clearUserProperties()

    expect(res).toEqual({ error: true })
    expect(clearUserPropertiesSpy).toHaveBeenCalledWith()
  })
})

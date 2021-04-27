import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called clearUserProperties function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const clearUserPropertiesSpy = jest.spyOn(amplitude, 'clearUserProperties').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = amplitude.clearUserProperties()

    expect(res).toEqual({ success: true })
    expect(clearUserPropertiesSpy).toHaveBeenCalledWith()
  })

  test('Should to have be called clearUserProperties function with error response', () => {
    const { amplitude } = makeSut()
    const clearUserPropertiesSpy = jest.spyOn(amplitude, 'clearUserProperties').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = amplitude.clearUserProperties()

    expect(res).toEqual({ error: true })
    expect(clearUserPropertiesSpy).toHaveBeenCalledWith()
  })
})

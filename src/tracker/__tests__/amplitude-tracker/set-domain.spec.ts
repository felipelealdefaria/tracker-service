import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setDomain function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setDomainSpy = jest.spyOn(amplitude, 'setDomain').mockImplementation(() => ({ success: true }))

    const { domain } = mock
    const res: StatusResponse = amplitude.setDomain(domain)

    expect(res).toEqual({ success: true })
    expect(setDomainSpy).toHaveBeenCalledWith(domain)
  })

  test('Should to have be called setDomain function with error response', () => {
    const { amplitude } = makeSut()
    const setDomainSpy = jest.spyOn(amplitude, 'setDomain').mockImplementation(() => ({ error: true }))

    const { domain } = mock
    const res: StatusResponse = amplitude.setDomain(domain)

    expect(res).toEqual({ error: true })
    expect(setDomainSpy).toHaveBeenCalledWith(domain)
  })
})
